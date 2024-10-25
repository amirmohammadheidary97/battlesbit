import type {RouteObject} from 'react-router';
import {createBrowserRouter} from 'react-router-dom';

import {
  ChallengesPage,
  HomePage,
  LiveChallengePage,
  LoginPage,
  MakeMatchPage,
  MatchLoadingPage,
  OtpPage,
  WalletPage,
} from './lazy-pages';
import {PrivateOutlet} from './PrivateOutlet';

import {WithBottomLNavbarLayout} from '@/components/organisms/layouts/WithBottomNavbarLayout/WithBottomNavbarLayout';

const routeObjects: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/otp',
    element: <OtpPage />,
  },
  {
    path: '/',
    element: <PrivateOutlet />,
    children: [
      {
        path: '/',
        element: <WithBottomLNavbarLayout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '/challenges',
            element: <ChallengesPage />,
          },
          {
            path: '/live-challenge',
            element: <LiveChallengePage />,
          },
          {
            path: '/wallet',
            element: <WalletPage />,
          },
        ],
      },
      {
        path: '/makematch',
        element: <MakeMatchPage />,
      },
      {
        path: '/matchloading',
        element: <MatchLoadingPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routeObjects);
