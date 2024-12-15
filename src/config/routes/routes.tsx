import {Suspense} from 'react';
import type {RouteObject} from 'react-router';
import {createBrowserRouter} from 'react-router-dom';

import {
  AchievementPage,
  ChallengesPage,
  HomePage,
  LeaderboardPage,
  LiveChallengePage,
  LoginPage,
  MakeMatchPage,
  MatchLoadingPage,
  OtpPage,
  ProfilePage,
  StorePage,
  UserDetailsPage,
  WalletPage,
} from './lazy-pages';
import {PrivateOutlet} from './PrivateOutlet';

import {WithBottomLNavbarLayout} from '@/components/organisms/layouts/WithBottomNavbarLayout/WithBottomNavbarLayout';
import {AchievementsTemplate} from '@/components/templates/Achievement';
import {LeaderBoardTemplate} from '@/components/templates/LeaderBoard/LeaderBoardTemplate';
import ProfileSkeleton from '@/components/templates/Profile/ProfileSkeleton';
import {StoreTemplate} from '@/components/templates/Store';
import {UserDetailsSkeleton} from '@/components/templates/UserDetails';

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
          {
            path: '/profile',
            element: (
              <Suspense fallback={<ProfileSkeleton />}>
                <ProfilePage />
              </Suspense>
            ),
          },
          {
            path: '/leader-board',
            element: (
              <Suspense fallback={<LeaderBoardTemplate />}>
                <LeaderboardPage />
              </Suspense>
            ),
          },
          {
            path: '/user-details',
            element: (
              <Suspense fallback={<UserDetailsSkeleton />}>
                <UserDetailsPage />
              </Suspense>
            ),
          },
          {
            path: '/store',
            element: (
              <Suspense fallback={<StoreTemplate />}>
                <StorePage />
              </Suspense>
            ),
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
        element: <MatchLoadingPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routeObjects);
