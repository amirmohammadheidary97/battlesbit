type MatchResult = 'win' | 'lose';

type LastGames = {mine: MatchResult[]; opponent: MatchResult[]};

type Achivements = {mine: number; opponent: number};

type ChallengerDetailsType = {lastGames: LastGames; achivements: Achivements};

export const challengerDetails: ChallengerDetailsType = {
  lastGames: {
    mine: ['win', 'lose', 'win', 'win', 'lose', 'win'],
    opponent: ['lose', 'lose', 'win', 'win', 'win', 'lose'],
  },
  achivements: {
    mine: 6,
    opponent: 5,
  },
};
