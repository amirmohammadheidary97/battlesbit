import cupOutlineIcon from '@/assets/img/icons/balanceAccess/cup.svg?react';
import dateTimeIcon from '@/assets/img/icons/balanceAccess/dateTime.svg?react';
import depositIcon from '@/assets/img/icons/balanceAccess/deposit.svg?react';
import leaderBoardIcon from '@/assets/img/icons/balanceAccess/leaderBoard.svg?react';
import storeIcon from '@/assets/img/icons/balanceAccess/store.svg?react';
import addUserPrimaryIcon from '@/assets/img/icons/general/add-user.svg?react';
import addFriendIcon from '@/assets/img/icons/general/addfriend.svg?react';
import IconAI from '@/assets/img/icons/general/ai-help.svg?react';
import arrowRightDobbleIcon from '@/assets/img/icons/general/arrow-right-dobble.svg?react';
import arrowUp from '@/assets/img/icons/general/arrow-up.svg?react';
import backMainIcon from '@/assets/img/icons/general/back-main.svg?react';
import closedEysIcon from '@/assets/img/icons/general/closedEyes.svg?react';
import humanIcon from '@/assets/img/icons/general/coin2.svg?react';
import cupIcon from '@/assets/img/icons/general/cup.svg?react';
import graphicTimerIcon from '@/assets/img/icons/general/grafic-timer-icon.svg?react';
import graphicXpIcon from '@/assets/img/icons/general/grafic-xp-icon.svg?react';
import graphicGiftIcon from '@/assets/img/icons/general/graphic_gift_box.svg?react';
import closeIcon from '@/assets/img/icons/general/icon-close.svg?react';
import leaderboardIcon from '@/assets/img/icons/general/leaderboard-icon.svg?react';
import lockOutlineIcon from '@/assets/img/icons/general/lockdollor.svg?react';
import openEyesIcon from '@/assets/img/icons/general/openEyes.svg?react';
import plusIcon from '@/assets/img/icons/general/plus.svg?react';
import reverseIcon from '@/assets/img/icons/general/reverse.svg?react';
import settingIcon from '@/assets/img/icons/general/setting.svg?react';
import shareIcon from '@/assets/img/icons/general/share-icon.svg?react';
import tetherIcon from '@/assets/img/icons/general/tether.svg?react';
import timerIcon from '@/assets/img/icons/general/timer2.svg?react';
import timerLoadingIcon from '@/assets/img/icons/general/timer3.svg?react';
import type {IconType} from '@/types/props/icons';

export const IconComponent: Record<
  IconType,
  React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >
> = {
  IconAI,
  'arrow-up': arrowUp,
  shareIcon: shareIcon,
  close: closeIcon,
  reverse: reverseIcon,
  addFriend: addFriendIcon,
  leaderboard: leaderboardIcon,
  humanCoin: humanIcon,
  cup: cupIcon,
  plusGreen: plusIcon,
  setting: settingIcon,
  closedEyes: closedEysIcon,
  openEyes: openEyesIcon,
  cupOutline: cupOutlineIcon,
  dateTime: dateTimeIcon,
  deposit: depositIcon,
  leaderBoardOutline: leaderBoardIcon,
  store: storeIcon,
  lockOutline: lockOutlineIcon,
  timer: timerIcon,
  timerLoading: timerLoadingIcon,
  graphicXpIcon: graphicXpIcon,
  graphicTimerIcon: graphicTimerIcon,
  backMain: backMainIcon,
  tether: tetherIcon,
  graphicGiftIcon: graphicGiftIcon,
  addUserPrimary: addUserPrimaryIcon,
  arrowRightDobble: arrowRightDobbleIcon,
};
