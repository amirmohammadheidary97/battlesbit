import {Suspense} from 'react';
import type {RouteObject} from 'react-router';
import {createBrowserRouter} from 'react-router-dom';

import {
  AchievementPage,
  ChallengesPage,
  HomePage,
  LiveChallengePage,
  LoginPage,
  MakeMatchPage,
  MatchLoadingPage,
  OtpPage,
  StorePage,
  WalletPage,
} from './lazy-pages';
import {PrivateOutlet} from './PrivateOutlet';

import {WithBottomLNavbarLayout} from '@/components/organisms/layouts/WithBottomNavbarLayout/WithBottomNavbarLayout';
// templates
import {AchievementsTemplate} from '@/components/templates/Achievement';
import WalletTemplate from '@/components/templates/Wallet/WalletTemplate';

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
            element: (
              <Suspense fallback={<WalletTemplate />}>
                <WalletPage />
              </Suspense>
            ),
          },
          {
            path: '/store',
            element: <StorePage />,
          },
          {
            path: '/achievements',
            element: (
              <Suspense fallback={<AchievementsTemplate />}>
                <AchievementPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: '/makematch',
        element: <MakeMatchPage />,
      },
      {
        path: '/matchloading',
        element: (
          <Suspense fallback={<></>}>
            <MatchLoadingPage />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routeObjects);
