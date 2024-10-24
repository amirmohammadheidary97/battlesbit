import {lazy} from 'react';

const LoginPage = lazy(() => import('@/components/pages/auth/Login'));
const OtpPage = lazy(() => import('@/components/pages/auth/Otp'));
const HomePage = lazy(() => import('@/components/pages/Home'));
const ChallengesPage = lazy(() => import('@/components/pages/Challenges'));
const MakeMatchPage = lazy(() => import('@/components/pages/MakeMatch'));
const LiveChallengePage = lazy(
  () => import('@/components/pages/LiveChallenge'),
);
const MatchLoadingPage = lazy(() => import('@/components/pages/MatchLoading'));

export {
  ChallengesPage,
  HomePage,
  LiveChallengePage,
  LoginPage,
  MakeMatchPage,
  MatchLoadingPage,
  OtpPage,
};
