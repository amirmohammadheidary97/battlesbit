import {Suspense} from 'react';
import type {RouteObject} from 'react-router';
import {createBrowserRouter} from 'react-router-dom';

import {
  AchievementPage,
  ChallengeDetailPage,
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
import {ChallengesPageTemplate} from '@/components/templates/ChallengesPageTemplate';
import ChallengeDetailPageTemplate from '@/components/templates/ChallengesPageTemplate/ChallengeDetailPageTemplate';
import {HomePageTemplate} from '@/components/templates/HomePageTemplate';
import {LeaderBoardTemplate} from '@/components/templates/LeaderBoard/LeaderBoardTemplate';
import ProfileSkeleton from '@/components/templates/Profile/ProfileSkeleton';
import {StoreTemplate} from '@/components/templates/Store';

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
            element: (
              <Suspense fallback={<HomePageTemplate />}>
                <HomePage />
              </Suspense>
            ),
          },
          {
            path: '/challenges',
            element: (
              <Suspense fallback={<ChallengesPageTemplate />}>
                <ChallengesPage />
              </Suspense>
            ),
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
            element: <UserDetailsPage />,
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
        path: '/challenge-detail',
        element: (
          <Suspense fallback={<ChallengeDetailPageTemplate />}>
            <ChallengeDetailPage />
          </Suspense>
        ),
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
