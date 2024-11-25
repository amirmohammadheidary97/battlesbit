import Avatar from '@/assets/img/icons/avatars/Ava1.png';
import Avatar2 from '@/assets/img/icons/avatars/Ava2.png';
import type {User} from '@/types/models/user';

export type friendItem = {
  user: User;
  isOnline: boolean;
};

export const fakeFriendsList: friendItem[] = [
  {user: {id: 1, name: 'john Doe', avatar: Avatar}, isOnline: true},
  {user: {id: 2, name: 'john Sina'}, isOnline: false},
  {user: {id: 3, name: 'john Man', avatar: Avatar2}, isOnline: true},
];
