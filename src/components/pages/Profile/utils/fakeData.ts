import userImg from '@/assets/img/bg/users/10.png';
import flagImg3 from '@/assets/img/icons/flag/chine.svg';
import flagImg1 from '@/assets/img/icons/flag/Group.svg';
import flagImg2 from '@/assets/img/icons/flag/iran.svg';
import UserInfoImg1 from '@/assets/img/icons/userInfo/_x32_.svg';
import UserInfoImg3 from '@/assets/img/icons/userInfo/2.svg';
import UserInfoImg5 from '@/assets/img/icons/userInfo/3.svg';
import UserInfoImg4 from '@/assets/img/icons/userInfo/Frame.svg';
import UserInfoImg2 from '@/assets/img/icons/userInfo/SVGRepo_iconCarrier.svg';
import type {User} from '@/types/models/user';

export const userInfoFakeData: User = {
  id: 1,
  name: 'Predator',
  avatar: userImg,
};

export const userInfoListFakeData = [
  {
    title: 'Change Account information',
    iconUrl: UserInfoImg1,
  },
  {
    title: 'Application Theme',
    iconUrl: UserInfoImg2,
  },
  {
    title: 'Change Language',
    iconUrl: UserInfoImg3,
  },
  {
    title: 'Support',
    iconUrl: UserInfoImg4,
  },
  {
    title: 'Logout',
    iconUrl: UserInfoImg5,
  },
];

export const languageListFakeData = [
  {
    title: 'English',
    id: 0,
    iconUrl: flagImg1,
  },
  {
    title: 'Persian',
    id: 1,
    iconUrl: flagImg2,
  },
  {
    title: 'Chinese',
    id: 2,
    iconUrl: flagImg3,
  },
];
