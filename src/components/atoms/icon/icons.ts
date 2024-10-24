import addFriendIcon from '@/assets/img/icons/general/addfriend.svg?react';
import IconAI from '@/assets/img/icons/general/ai-help.svg?react';
import arrowUp from '@/assets/img/icons/general/arrow-up.svg?react';
import closeIcon from '@/assets/img/icons/general/icon-close.svg?react';
import reverseIcon from '@/assets/img/icons/general/reverse.svg?react';
import shareIcon from '@/assets/img/icons/general/share-icon.svg?react';
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
};
