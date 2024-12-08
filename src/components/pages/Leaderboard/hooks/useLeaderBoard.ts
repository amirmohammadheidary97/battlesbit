/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';

import {leverageState} from '../state/leader-board.state';
import {getLeaderBoardUsersList, topPlayerFakeData} from '../utils/fakeData';

import type {TopPlayer} from '@/types/models/leaderboard';

type Option = {
  label: string;
  value: number;
};

export const options: [Option, Option] = [
  {
    label: 'Weekly',
    value: 1,
  },
  {
    label: 'monthly',
    value: 2,
  },
];

export const useLeaderBoard = () => {
  ///
  const {leaderBoardList, setLeaderBoardList} = leverageState();
  const [selectedOption, setSelectedOption] = useState<Option>();
  const [topPlayer, setTopPlayer] = useState<TopPlayer>();

  ///
  useEffect(() => {
    setTimeout(() => {
      setLeaderBoardList(getLeaderBoardUsersList);
      setSelectedOption(options[0]);
      setTopPlayer(topPlayerFakeData);
    }, 1500);
  }, []);
  ////
  return {
    leaderBoardList,
    setLeaderBoardList,
    setSelectedOption,
    selectedOption,
    options,
    topPlayer,
  };
};
