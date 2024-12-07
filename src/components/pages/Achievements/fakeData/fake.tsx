export type TAchieve = {
  id: number;
  title: string;
  desc: string;
  isSelected?: boolean;
  isLocked: boolean;
  image?: string;
};

export type TInProgressAchieves = {
  title: string;
  desc: string;
  progress: number;
  total: number;
};
export type TChallengeCard = TInProgressAchieves & {
  caption: string;
  time: string;
};

export const MyAchievements: TAchieve[] = [
  {
    id: 1,
    title: 'Predator1',
    desc: 'win 20 games in row',
    isSelected: false,
    isLocked: false,
  },
  {
    id: 2,
    title: 'Predator2',
    desc: 'win 20 games in row',
    isSelected: true,
    isLocked: false,
  },
  {
    id: 3,
    title: 'Predator3',
    desc: 'win 20 games in row',
    isSelected: true,
    isLocked: false,
  },
  {
    id: 4,
    title: 'Predator4',
    desc: 'win 20 games in row',
    isLocked: false,
    isSelected: false,
  },
  {
    id: 5,
    title: 'Predator5',
    desc: 'win 20 games in row',
    isLocked: false,
    isSelected: false,
  },
  {
    id: 6,
    title: 'Predator6',
    desc: 'win 20 games in row',
    isLocked: false,
    isSelected: false,
  },
  {
    id: 7,
    title: 'Predator7',
    desc: 'win 20 games in row',
    isLocked: false,
    isSelected: false,
  },
  {
    id: 8,
    title: 'Predator8',
    desc: 'win 20 games in row',
    isLocked: false,
    isSelected: false,
  },
];

export const AllAchievements: TAchieve[] = [
  {
    id: 1,
    title: 'Predator1',
    desc: 'win 20 games in row',
    isLocked: false,
    isSelected: false,
  },
  {
    id: 2,
    title: 'Predator2',
    desc: 'win 20 games in row',
    isSelected: true,
    isLocked: false,
  },
  {
    id: 3,
    title: 'Predator3',
    desc: 'win 20 games in row',
    isSelected: true,
    isLocked: false,
  },
  {
    id: 4,
    title: 'Predator4',
    desc: 'win 20 games in row',
    isLocked: false,
    isSelected: false,
  },
  {
    id: 5,
    title: 'Predator5',
    desc: 'win 20 games in row',
    isLocked: false,
    isSelected: false,
  },
  {
    id: 6,
    title: 'Predator6',
    desc: 'win 20 games in row',
    isLocked: false,
    isSelected: false,
  },
  {
    id: 7,
    title: 'Predator7',
    desc: 'win 20 games in row',
    isLocked: false,
    isSelected: false,
  },
  {
    id: 8,
    title: 'Predator8',
    desc: 'win 20 games in row',
    isLocked: false,
    isSelected: false,
  },
  {id: 9, title: 'Predator9', desc: 'win 20 games in row', isLocked: true},
  {id: 10, title: 'Predator10', desc: 'win 20 games in row', isLocked: true},
  {id: 11, title: 'Predator11', desc: 'win 20 games in row', isLocked: true},
  {id: 12, title: 'Predator12', desc: 'win 20 games in row', isLocked: true},
  {id: 13, title: 'Predator13', desc: 'win 20 games in row', isLocked: true},
];

export const InProggressAchievement: TInProgressAchieves[] = [
  {title: 'Predator', progress: 4, total: 20, desc: 'win 20 games in a row'},
  {title: 'Predator', progress: 4, total: 15, desc: 'win 20 games in a row'},
];

export const ChallengesCards: TChallengeCard[] = [
  {
    title: 'Predator',
    desc: 'win 25 games in row',
    caption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi omnis vel qui molestiae soluta mollitia laboriosam vitae ut hic quas',
    progress: 20,
    total: 25,
    time: '10:25:06',
  },
  {
    title: 'Predator2',
    desc: 'win 20 games in row',
    caption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi omnis vel qui molestiae soluta mollitia laboriosam vitae ut hic quas',
    progress: 10,
    total: 20,
    time: '04:55:10',
  },
  {
    title: 'Predator3',
    desc: 'win 20 games in row',
    caption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi omnis vel qui molestiae soluta mollitia laboriosam vitae ut hic quas',
    progress: 2,
    total: 10,
    time: '11:42:09',
  },
  {
    title: 'Predator4',
    desc: 'win 20 games in row',
    caption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi omnis vel qui molestiae soluta mollitia laboriosam vitae ut hic quas',
    progress: 1,
    total: 25,
    time: '50:11:22',
  },
];
