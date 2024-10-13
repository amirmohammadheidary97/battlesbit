import {createRequest} from 'urql';

import {UrqlClient} from '../urql-client';

import type {RefreshTokenMutation} from '@/gql-codegen/generated';
import {RefreshTokenDocument} from '@/gql-codegen/generated';
import {useAuthenticationStore} from '@/hooks/global-stores/authentication.store';

const refreshAccessToken = async (refreshToken: string) => {
  const request = createRequest<RefreshTokenMutation>(RefreshTokenDocument, {
    refreshToken,
  });
  const response = await UrqlClient.executeMutation(request).toPromise();
  if (!response?.error && response?.data) {
    return Promise.resolve(response.data.refreshToken);
  } else return Promise.reject(response?.error);
};

let manageJwtInstanceCreated = false;
class ManageJWT {
  //
  expireTime: number | undefined = undefined;
  private timoutId: number | undefined = undefined;
  private onRefreshAccessTokenError = (err: unknown) => {
    console.error(err);
  };
  //
  constructor() {
    if (manageJwtInstanceCreated) {
      throw new Error('You can only create one instance!');
    }
    manageJwtInstanceCreated = true;
  }
  //
  private setExpireTime(time: number) {
    this.expireTime = time;
  }
  //
  handleRefreshToken() {
    const {setAccessToken, setRefreshToken, refreshToken} =
      useAuthenticationStore.getState();
    //
    refreshAccessToken(refreshToken as string)
      .then(({accessToken, expiresIn, refreshToken}) => {
        // set data
        this.setExpireTime(expiresIn);
        setRefreshToken(refreshToken);
        setAccessToken(accessToken);
        // check expiration
        this.checkAccessToken();
      })
      .catch(error => {
        if (this.onRefreshAccessTokenError)
          this.onRefreshAccessTokenError(error);
      });
  }
  //
  private abortRefreshAccessTokenTimeout() {
    if (this.timoutId) {
      window.clearTimeout(this.timoutId);
    }
  }
  private setRefreshTimeout() {
    this.abortRefreshAccessTokenTimeout();
    this.timoutId = window.setTimeout(
      this.handleRefreshToken,
      this.getRemainingTime(),
    );
  }
  getRemainingTime() {
    const {expireTime} = useAuthenticationStore.getState();
    const remainingTime = (expireTime ?? Date.now()) - Date.now();
    return remainingTime;
  }
  checkAccessToken() {
    const remainingTime = this.getRemainingTime();
    const isExpired = remainingTime <= 0;
    if (isExpired) {
      this.handleRefreshToken();
    } else {
      this.expireTime = remainingTime;
      this.setRefreshTimeout();
    }
  }
  init(props?: {onRefreshAccessTokenError: (error: unknown) => void}) {
    if (props?.onRefreshAccessTokenError)
      this.onRefreshAccessTokenError = props.onRefreshAccessTokenError;
    this.checkAccessToken();
  }
}

const JwtManager = new ManageJWT();
export default JwtManager;
