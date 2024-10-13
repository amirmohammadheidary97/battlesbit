import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Cursor: { input: any; output: any; }
  Duration: { input: any; output: any; }
  Time: { input: any; output: any; }
  Uint8: { input: any; output: any; }
  Uint64: { input: any; output: any; }
  Upload: { input: any; output: any; }
  _Any: { input: any; output: any; }
  _FieldSet: { input: any; output: any; }
};

export type Achievement = Node & {
  __typename?: 'Achievement';
  createdAt: Scalars['Time']['output'];
  definition: AchievementDefinition;
  definitionID: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  progress: Scalars['Int']['output'];
  updatedAt: Scalars['Time']['output'];
  user: User;
  userID: Scalars['ID']['output'];
};

/** A connection to a list of items. */
export type AchievementConnection = {
  __typename?: 'AchievementConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AchievementEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type AchievementDefinition = Node & {
  __typename?: 'AchievementDefinition';
  createdAt: Scalars['Time']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  progresses: AchievementConnection;
  query: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};


export type AchievementDefinitionProgressesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AchievementOrder>;
};

/** A connection to a list of items. */
export type AchievementDefinitionConnection = {
  __typename?: 'AchievementDefinitionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AchievementDefinitionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type AchievementDefinitionEdge = {
  __typename?: 'AchievementDefinitionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['Cursor']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<AchievementDefinition>;
};

export type AchievementDefinitionFilter = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['ID']['input']>;
};

/** Ordering options for AchievementDefinition connections */
export type AchievementDefinitionOrder = {
  /** The ordering direction. */
  direction?: OrderDirection;
  /** The field by which to order AchievementDefinitions. */
  field: AchievementDefinitionOrderField;
};

/** Properties by which AchievementDefinition connections can be ordered. */
export enum AchievementDefinitionOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type AchievementDefinitionsPage = {
  __typename?: 'AchievementDefinitionsPage';
  data?: Maybe<Array<AchievementDefinition>>;
  total: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type AchievementEdge = {
  __typename?: 'AchievementEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['Cursor']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Achievement>;
};

/** Ordering options for Achievement connections */
export type AchievementOrder = {
  /** The ordering direction. */
  direction?: OrderDirection;
  /** The field by which to order Achievements. */
  field: AchievementOrderField;
};

/** Properties by which Achievement connections can be ordered. */
export enum AchievementOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type Asset = {
  __typename?: 'Asset';
  /** The direction and value change in the last 24 hours */
  changePercent24Hr: Scalars['Float']['output'];
  /** Asset icon URL */
  iconUrl: Scalars['String']['output'];
  /** unique identifier for asset */
  id: Scalars['String']['output'];
  /** supply x price */
  marketCapUSD: Scalars['Float']['output'];
  /** total quantity of asset issued */
  maxSupply: Scalars['Float']['output'];
  /** proper name for asset */
  name: Scalars['String']['output'];
  /** volume-weighted price based on real-time market data, translated to USD */
  priceUSD: Scalars['Float']['output'];
  /** rank is in ascending order - this number is directly associated with the marketcap whereas the highest marketcap receives rank 1 */
  rank: Scalars['Int']['output'];
  /** available supply for trading */
  supply: Scalars['Float']['output'];
  /** most common symbol used to identify this asset on an exchange */
  symbol: Scalars['String']['output'];
  /** quantity of trading volume represented in USD over the last 24 hours */
  volumeUSD24Hr: Scalars['Float']['output'];
  /** Volume Weighted Average Price in the last 24 hours */
  vwap24Hr: Scalars['Float']['output'];
};

export type AssetUpdate = {
  __typename?: 'AssetUpdate';
  id: Scalars['String']['output'];
  priceUSD: Scalars['Float']['output'];
};

/**
 * CreateAchievementDefinitionInput is used for create AchievementDefinition object.
 * Input was generated by ent.
 */
export type CreateAchievementDefinitionInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  query: Scalars['String']['input'];
};

/**
 * CreateGameInput is used for create Game object.
 * Input was generated by ent.
 */
export type CreateGameInput = {
  currency: GameCurrency;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Duration']['input']>;
  entryFee?: InputMaybe<Scalars['Uint64']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  maxPlayers?: InputMaybe<Scalars['Uint8']['input']>;
  maxPositions?: InputMaybe<Scalars['Uint8']['input']>;
  minPlayers?: InputMaybe<Scalars['Uint8']['input']>;
  startVBalance?: InputMaybe<Scalars['Uint64']['input']>;
  title: Scalars['String']['input'];
};

/**
 * CreateGameMatchPositionInput is used for create GameMatchPosition object.
 * Input was generated by ent.
 */
export type CreateGameMatchPositionInput = {
  baseToken: Scalars['String']['input'];
  leverage: Scalars['Uint8']['input'];
  limitPrice?: InputMaybe<Scalars['Float']['input']>;
  margin: Scalars['Float']['input'];
  matchID: Scalars['ID']['input'];
  side: GameMatchPositionSide;
  stopLoss?: InputMaybe<Scalars['Float']['input']>;
  targetPoint?: InputMaybe<Scalars['Float']['input']>;
  type: GameMatchPositionType;
};

/**
 * CreateUserInput is used for create User object.
 * Input was generated by ent.
 */
export type CreateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  nickName?: InputMaybe<Scalars['String']['input']>;
};

/**
 * CreateWalletInput is used for create Wallet object.
 * Input was generated by ent.
 */
export type CreateWalletInput = {
  currency: WalletCurrency;
};

export type Game = Node & {
  __typename?: 'Game';
  createdAt: Scalars['Time']['output'];
  currency: GameCurrency;
  description?: Maybe<Scalars['String']['output']>;
  duration: Scalars['Duration']['output'];
  entryFee: Scalars['Uint64']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  maxPlayers: Scalars['Uint8']['output'];
  maxPositions: Scalars['Uint8']['output'];
  minPlayers: Scalars['Uint8']['output'];
  startVBalance: Scalars['Uint64']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

/** A connection to a list of items. */
export type GameConnection = {
  __typename?: 'GameConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GameEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** GameCurrency is enum for the field currency */
export enum GameCurrency {
  Solana = 'solana',
  Usdt = 'usdt'
}

/** An edge in a connection. */
export type GameEdge = {
  __typename?: 'GameEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['Cursor']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Game>;
};

export type GameFilter = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['ID']['input']>;
};

export type GameMatch = Node & {
  __typename?: 'GameMatch';
  createdAt: Scalars['Time']['output'];
  endTime?: Maybe<Scalars['Time']['output']>;
  game: Game;
  gameID: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  participants?: Maybe<Array<GameMatchParticipant>>;
  positions?: Maybe<Array<GameMatchPosition>>;
  startTime?: Maybe<Scalars['Time']['output']>;
  status: GameMatchStatus;
  updatedAt: Scalars['Time']['output'];
  winner?: Maybe<User>;
  winnerID?: Maybe<Scalars['ID']['output']>;
};

/** A connection to a list of items. */
export type GameMatchConnection = {
  __typename?: 'GameMatchConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GameMatchEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type GameMatchEdge = {
  __typename?: 'GameMatchEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['Cursor']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<GameMatch>;
};

export type GameMatchFilter = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  q?: InputMaybe<Scalars['String']['input']>;
};

/** Ordering options for GameMatch connections */
export type GameMatchOrder = {
  /** The ordering direction. */
  direction?: OrderDirection;
  /** The field by which to order GameMatches. */
  field: GameMatchOrderField;
};

/** Properties by which GameMatch connections can be ordered. */
export enum GameMatchOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type GameMatchParticipant = Node & {
  __typename?: 'GameMatchParticipant';
  createdAt: Scalars['Time']['output'];
  currency: GameMatchParticipantCurrency;
  gameMatchID: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  match: GameMatch;
  positions?: Maybe<Array<GameMatchPosition>>;
  updatedAt: Scalars['Time']['output'];
  user: User;
  userID: Scalars['ID']['output'];
  vBalance: Scalars['Uint64']['output'];
};

/** A connection to a list of items. */
export type GameMatchParticipantConnection = {
  __typename?: 'GameMatchParticipantConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GameMatchParticipantEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** GameMatchParticipantCurrency is enum for the field currency */
export enum GameMatchParticipantCurrency {
  Solana = 'solana',
  Usdt = 'usdt'
}

/** An edge in a connection. */
export type GameMatchParticipantEdge = {
  __typename?: 'GameMatchParticipantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['Cursor']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<GameMatchParticipant>;
};

/** Ordering options for GameMatchParticipant connections */
export type GameMatchParticipantOrder = {
  /** The ordering direction. */
  direction?: OrderDirection;
  /** The field by which to order GameMatchParticipants. */
  field: GameMatchParticipantOrderField;
};

/** Properties by which GameMatchParticipant connections can be ordered. */
export enum GameMatchParticipantOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type GameMatchPosition = Node & {
  __typename?: 'GameMatchPosition';
  baseToken: Scalars['String']['output'];
  closePrice: Scalars['Float']['output'];
  closedAt?: Maybe<Scalars['Time']['output']>;
  createdAt: Scalars['Time']['output'];
  entryPrice: Scalars['Float']['output'];
  expiredAt?: Maybe<Scalars['Time']['output']>;
  gameMatchID: Scalars['ID']['output'];
  gameMatchParticipantID: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  leverage: Scalars['Uint8']['output'];
  limitPrice?: Maybe<Scalars['Float']['output']>;
  margin: Scalars['Float']['output'];
  match: GameMatch;
  openedAt?: Maybe<Scalars['Time']['output']>;
  participant: GameMatchParticipant;
  profit?: Maybe<Scalars['Float']['output']>;
  quoteToken: Scalars['String']['output'];
  side: GameMatchPositionSide;
  size: Scalars['Float']['output'];
  status: GameMatchPositionStatus;
  stopLoss?: Maybe<Scalars['Float']['output']>;
  targetPoint?: Maybe<Scalars['Float']['output']>;
  type: GameMatchPositionType;
  updatedAt: Scalars['Time']['output'];
};

/** A connection to a list of items. */
export type GameMatchPositionConnection = {
  __typename?: 'GameMatchPositionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GameMatchPositionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type GameMatchPositionEdge = {
  __typename?: 'GameMatchPositionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['Cursor']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<GameMatchPosition>;
};

export type GameMatchPositionFilter = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  q?: InputMaybe<Scalars['String']['input']>;
};

/** Ordering options for GameMatchPosition connections */
export type GameMatchPositionOrder = {
  /** The ordering direction. */
  direction?: OrderDirection;
  /** The field by which to order GameMatchPositions. */
  field: GameMatchPositionOrderField;
};

/** Properties by which GameMatchPosition connections can be ordered. */
export enum GameMatchPositionOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

/** GameMatchPositionSide is enum for the field side */
export enum GameMatchPositionSide {
  Buy = 'buy',
  Sell = 'sell'
}

/** GameMatchPositionStatus is enum for the field status */
export enum GameMatchPositionStatus {
  Canceled = 'canceled',
  Liquidated = 'liquidated',
  Open = 'open',
  Pending = 'pending',
  Settled = 'settled'
}

/** GameMatchPositionType is enum for the field type */
export enum GameMatchPositionType {
  Limit = 'limit',
  Market = 'market'
}

export type GameMatchPositionsPage = {
  __typename?: 'GameMatchPositionsPage';
  data?: Maybe<Array<GameMatchPosition>>;
  total: Scalars['Int']['output'];
};

/** GameMatchStatus is enum for the field status */
export enum GameMatchStatus {
  Closed = 'closed',
  Open = 'open',
  Pending = 'pending'
}

export type GameMatchesPage = {
  __typename?: 'GameMatchesPage';
  data?: Maybe<Array<GameMatch>>;
  total: Scalars['Int']['output'];
};

/** Ordering options for Game connections */
export type GameOrder = {
  /** The ordering direction. */
  direction?: OrderDirection;
  /** The field by which to order Games. */
  field: GameOrderField;
};

/** Properties by which Game connections can be ordered. */
export enum GameOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type GamesPage = {
  __typename?: 'GamesPage';
  data?: Maybe<Array<Game>>;
  total: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Cancel a game match position for a in progress match if eligible **(authenticated only)** */
  cancelGameMatchPosition: Scalars['Boolean']['output'];
  /** Create a new achievement definition **(permission: create:achievementDefinitions)** */
  createAchievementDefinition: AchievementDefinition;
  /** Create a new game **(permission: create:games)** */
  createGame: Game;
  /** Create a new game match position for a in progress match **(authenticated only)** */
  createGameMatchPosition: GameMatchPosition;
  /** Create a new user **(permission: create:users)** */
  createUser: User;
  /** Create a new wallet **(authenticated only)** */
  createWallet: Wallet;
  /** Delete a achievement definition **(permission: delete:achievementDefinitions)** */
  deleteAchievementDefinition: Scalars['Boolean']['output'];
  /** Delete a game **(permission: delete:games)** */
  deleteGame: Scalars['Boolean']['output'];
  /** Delete a user **(permission: delete:users)** */
  deleteUser: Scalars['Boolean']['output'];
  /** Join a game **(authenticated only)** */
  joinGame: Scalars['Boolean']['output'];
  loginWithEmail: Token;
  loginWithPassword: Token;
  noop: Scalars['String']['output'];
  refreshToken: Token;
  requestEmailVerificationCode: RequestVerificationCodePayload;
  /** Update a achievement definition **(permission: update:achievementDefinitions)** */
  updateAchievementDefinition: AchievementDefinition;
  /** Update a game **(permission: update:games)** */
  updateGame: Game;
  /** Update profile **(authenticated only)** */
  updateProfile: User;
  /** Update a user **(permission: update:users)** */
  updateUser: User;
};


export type MutationCancelGameMatchPositionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateAchievementDefinitionArgs = {
  createAchievementDefinitionInput: CreateAchievementDefinitionInput;
};


export type MutationCreateGameArgs = {
  createGameInput: CreateGameInput;
};


export type MutationCreateGameMatchPositionArgs = {
  createGameInput: CreateGameMatchPositionInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateWalletArgs = {
  createWalletInput: CreateWalletInput;
};


export type MutationDeleteAchievementDefinitionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteGameArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationJoinGameArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginWithEmailArgs = {
  email: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};


export type MutationLoginWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRequestEmailVerificationCodeArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateAchievementDefinitionArgs = {
  id: Scalars['ID']['input'];
  updateAchievementDefinitionInput: UpdateAchievementDefinitionInput;
};


export type MutationUpdateGameArgs = {
  id: Scalars['ID']['input'];
  updateGameInput: UpdateGameInput;
};


export type MutationUpdateProfileArgs = {
  updateProfileInput: UpdateProfileInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  updateUserInput: UpdateUserInput;
};

/**
 * An object with an ID.
 * Follows the [Relay Global Object Identification Specification](https://relay.dev/graphql/objectidentification.htm)
 */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
};

export type Notification = {
  __typename?: 'Notification';
  action: NotificationAction;
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  target: NotificationTarget;
  type: NotificationType;
};

export enum NotificationAction {
  Canceled = 'CANCELED',
  Created = 'CREATED',
  Updated = 'UPDATED'
}

export enum NotificationTarget {
  Game = 'GAME',
  Match = 'MATCH',
  Position = 'POSITION',
  Wallet = 'WALLET'
}

export enum NotificationType {
  Error = 'ERROR',
  Info = 'INFO',
  Warning = 'WARNING'
}

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  /** Specifies an ascending order for a given `orderBy` argument. */
  Asc = 'ASC',
  /** Specifies a descending order for a given `orderBy` argument. */
  Desc = 'DESC'
}

/**
 * Information about pagination in a connection.
 * https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo
 */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type Pagination = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type PublicUser = {
  __typename?: 'PublicUser';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  nickName?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Time']['output'];
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  /** Get a achievement definition by id */
  achievementDefinition: AchievementDefinition;
  /** Get all achievement definitions */
  achievementDefinitions: AchievementDefinitionConnection;
  /** Get all achievement definitions by page */
  achievementDefinitionsPage: AchievementDefinitionsPage;
  asset?: Maybe<Asset>;
  assets?: Maybe<Array<Maybe<Asset>>>;
  /** Get a game by id */
  game: Game;
  /** Get a game match by id **(permission: read:gameMatches)** */
  gameMatch: GameMatch;
  /** Get a game match position by id **(permission: read:gameMatchPositions)** */
  gameMatchPosition: GameMatchPosition;
  /** Get all game match positions **(permission: read:gameMatchPositions)** */
  gameMatchPositions: GameMatchPositionConnection;
  /** Get all game match positions by page **(permission: read:gameMatchPositions)** */
  gameMatchPositionsPage: GameMatchPositionsPage;
  /** Get all game match positions **(permission: read:gameMatches)** */
  gameMatches: GameMatchConnection;
  /** Get all game match positions by page **(permission: read:gameMatches)** */
  gameMatchesPage: GameMatchesPage;
  /** Get all games */
  games: GameConnection;
  /** Get all games by page */
  gamesPage: GamesPage;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Lookup nodes by a list of IDs. */
  nodes: Array<Maybe<Node>>;
  /** Get the current user's profile **(authenticated only)** */
  profile: User;
  /** Get a transaction by id **(permission: read:transactions)** */
  transaction: Transaction;
  /** Get all transactions **(permission: read:transactions)** */
  transactions: TransactionConnection;
  /** Get all transactions by page **(permission: read:transactions)** */
  transactionsPage: TransactionsPage;
  /** Get a user by id **(permission: read:users)** */
  user: User;
  /** Get all users **(permission: read:users)** */
  users: UserConnection;
  /** Get all users by page **(permission: read:users)** */
  usersPage: UsersPage;
  /** Get a wallet by id **(permission: read:wallets)** */
  wallet: Wallet;
  /** Get all wallets **(permission: read:wallets)** */
  wallets: WalletConnection;
  /** Get all wallets by page **(permission: read:wallets)** */
  walletsPage: WalletsPage;
};


export type QueryAchievementDefinitionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAchievementDefinitionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filterBy?: InputMaybe<AchievementDefinitionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AchievementDefinitionOrder>;
};


export type QueryAchievementDefinitionsPageArgs = {
  filterBy?: InputMaybe<AchievementDefinitionFilter>;
  orderBy?: InputMaybe<AchievementDefinitionOrder>;
  paginateBy?: InputMaybe<Pagination>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
};


export type QueryGameArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGameMatchArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGameMatchPositionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGameMatchPositionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filterBy?: InputMaybe<GameMatchPositionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GameMatchPositionOrder>;
};


export type QueryGameMatchPositionsPageArgs = {
  filterBy?: InputMaybe<GameMatchPositionFilter>;
  orderBy?: InputMaybe<GameMatchPositionOrder>;
  paginateBy?: InputMaybe<Pagination>;
};


export type QueryGameMatchesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filterBy?: InputMaybe<GameMatchFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GameMatchOrder>;
};


export type QueryGameMatchesPageArgs = {
  filterBy?: InputMaybe<GameMatchFilter>;
  orderBy?: InputMaybe<GameMatchOrder>;
  paginateBy?: InputMaybe<Pagination>;
};


export type QueryGamesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filterBy?: InputMaybe<GameFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GameOrder>;
};


export type QueryGamesPageArgs = {
  filterBy?: InputMaybe<GameFilter>;
  orderBy?: InputMaybe<GameOrder>;
  paginateBy?: InputMaybe<Pagination>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTransactionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filterBy?: InputMaybe<TransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransactionOrder>;
};


export type QueryTransactionsPageArgs = {
  filterBy?: InputMaybe<TransactionFilter>;
  orderBy?: InputMaybe<TransactionOrder>;
  paginateBy?: InputMaybe<Pagination>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filterBy?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserOrder>;
};


export type QueryUsersPageArgs = {
  filterBy?: InputMaybe<UserFilter>;
  orderBy?: InputMaybe<UserOrder>;
  paginateBy?: InputMaybe<Pagination>;
};


export type QueryWalletArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWalletsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filterBy?: InputMaybe<WalletFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WalletOrder>;
};


export type QueryWalletsPageArgs = {
  filterBy?: InputMaybe<WalletFilter>;
  orderBy?: InputMaybe<WalletOrder>;
  paginateBy?: InputMaybe<Pagination>;
};

export type RequestVerificationCodePayload = {
  __typename?: 'RequestVerificationCodePayload';
  expiresIn: Scalars['Int']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Subscribe to asset (single) updates */
  assetUpdated?: Maybe<AssetUpdate>;
  /** Subscribe to assets (multiple) updates */
  assetsUpdated?: Maybe<Array<Maybe<AssetUpdate>>>;
  /** Subscribe to time updates */
  currentTime: Scalars['String']['output'];
  /**  Subscribe to notification created event **(authenticated only)** */
  notificationCreated: Notification;
};


export type SubscriptionAssetUpdatedArgs = {
  id: Scalars['String']['input'];
};

export type Token = {
  __typename?: 'Token';
  accessToken: Scalars['String']['output'];
  expiresIn: Scalars['Int']['output'];
  refreshToken: Scalars['String']['output'];
};

export type Transaction = Node & {
  __typename?: 'Transaction';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['Time']['output'];
  currency: TransactionCurrency;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ref?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Time']['output'];
  userID: Scalars['ID']['output'];
};

/** A connection to a list of items. */
export type TransactionConnection = {
  __typename?: 'TransactionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TransactionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** TransactionCurrency is enum for the field currency */
export enum TransactionCurrency {
  Solana = 'solana',
  Usdt = 'usdt'
}

/** An edge in a connection. */
export type TransactionEdge = {
  __typename?: 'TransactionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['Cursor']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Transaction>;
};

export type TransactionFilter = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  q?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['ID']['input']>;
};

/** Ordering options for Transaction connections */
export type TransactionOrder = {
  /** The ordering direction. */
  direction?: OrderDirection;
  /** The field by which to order Transactions. */
  field: TransactionOrderField;
};

/** Properties by which Transaction connections can be ordered. */
export enum TransactionOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type TransactionsPage = {
  __typename?: 'TransactionsPage';
  data?: Maybe<Array<Transaction>>;
  total: Scalars['Int']['output'];
};

/**
 * UpdateAchievementDefinitionInput is used for update AchievementDefinition object.
 * Input was generated by ent.
 */
export type UpdateAchievementDefinitionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

/**
 * UpdateGameInput is used for update Game object.
 * Input was generated by ent.
 */
export type UpdateGameInput = {
  clearDescription?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<GameCurrency>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Duration']['input']>;
  entryFee?: InputMaybe<Scalars['Uint64']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  maxPlayers?: InputMaybe<Scalars['Uint8']['input']>;
  maxPositions?: InputMaybe<Scalars['Uint8']['input']>;
  minPlayers?: InputMaybe<Scalars['Uint8']['input']>;
  startVBalance?: InputMaybe<Scalars['Uint64']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  nickName: Scalars['String']['input'];
};

/**
 * UpdateUserInput is used for update User object.
 * Input was generated by ent.
 */
export type UpdateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  clearAvatar?: InputMaybe<Scalars['Boolean']['input']>;
  clearEmail?: InputMaybe<Scalars['Boolean']['input']>;
  clearNickName?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  nickName?: InputMaybe<Scalars['String']['input']>;
};

export type User = Node & {
  __typename?: 'User';
  achievements: AchievementConnection;
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Time']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  isSuperuser: Scalars['Boolean']['output'];
  matches: GameMatchParticipantConnection;
  nickName?: Maybe<Scalars['String']['output']>;
  transactions: TransactionConnection;
  updatedAt: Scalars['Time']['output'];
  wallets?: Maybe<Array<Wallet>>;
  wonMatches: GameMatchConnection;
};


export type UserAchievementsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AchievementOrder>;
};


export type UserMatchesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GameMatchParticipantOrder>;
};


export type UserTransactionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransactionOrder>;
};


export type UserWonMatchesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GameMatchOrder>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['Cursor']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

export type UserFilter = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  q?: InputMaybe<Scalars['String']['input']>;
};

/** Ordering options for User connections */
export type UserOrder = {
  /** The ordering direction. */
  direction?: OrderDirection;
  /** The field by which to order Users. */
  field: UserOrderField;
};

/** Properties by which User connections can be ordered. */
export enum UserOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type UsersPage = {
  __typename?: 'UsersPage';
  data?: Maybe<Array<User>>;
  total: Scalars['Int']['output'];
};

export type Wallet = Node & {
  __typename?: 'Wallet';
  /** Get wallet public key address */
  address?: Maybe<Scalars['String']['output']>;
  balance: Scalars['Uint64']['output'];
  createdAt: Scalars['Time']['output'];
  currency: WalletCurrency;
  id: Scalars['ID']['output'];
  locked: Scalars['Uint64']['output'];
  updatedAt: Scalars['Time']['output'];
  userID: Scalars['ID']['output'];
};

/** A connection to a list of items. */
export type WalletConnection = {
  __typename?: 'WalletConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WalletEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** WalletCurrency is enum for the field currency */
export enum WalletCurrency {
  Solana = 'solana',
  Usdt = 'usdt'
}

/** An edge in a connection. */
export type WalletEdge = {
  __typename?: 'WalletEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['Cursor']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Wallet>;
};

export type WalletFilter = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  q?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['ID']['input']>;
};

/** Ordering options for Wallet connections */
export type WalletOrder = {
  /** The ordering direction. */
  direction?: OrderDirection;
  /** The field by which to order Wallets. */
  field: WalletOrderField;
};

/** Properties by which Wallet connections can be ordered. */
export enum WalletOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type WalletsPage = {
  __typename?: 'WalletsPage';
  data?: Maybe<Array<Wallet>>;
  total: Scalars['Int']['output'];
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};
