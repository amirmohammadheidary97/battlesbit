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
const WalletPage = lazy(() => import('@/components/pages/Wallet'));
const StorePage = lazy(() => import('@/components/pages/Store'));
const LeaderboardPage = lazy(() => import('@/components/pages/Leaderboard'));
const AchievementPage = lazy(() => import('@/components/pages/Achievements'));
const UserDetailsPage = lazy(() => import('@/components/pages/UserDetails'));

export {
  AchievementPage,
  ChallengesPage,
  HomePage,
  LeaderboardPage,
  LiveChallengePage,
  LoginPage,
  MakeMatchPage,
  MatchLoadingPage,
  OtpPage,
  StorePage,
  UserDetailsPage,
  WalletPage,
};
