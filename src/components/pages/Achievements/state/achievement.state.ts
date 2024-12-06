import {create} from 'zustand';

import type {TAchieve, TInProgressAchieves} from '../fakeData/fake';
import {AllAchievements, MyAchievements} from '../fakeData/fake';

import {createSelectors} from '@/config/zustand/selectorGenerator';

type State = {
  myAchievements: TAchieve[];
  allAchievements: TAchieve[];
  selectedAchieves: TAchieve[];
  inProressAchieves: TInProgressAchieves[];
};

type Action = {
  setAllAchievements: (items: TAchieve[]) => void;
  setMyAcheivements: (items: TAchieve[]) => void;
  setSelectedAchieves: (item: TAchieve) => void;
  setInProgressAchieves: (items: TInProgressAchieves[]) => void;
};

const state = create<State & Action>(set => ({
  selectedAchieves: MyAchievements.filter(ach => ach.isSelected === true) ?? [],
  allAchievements: [],
  myAchievements: [],
  inProressAchieves: [],
  setAllAchievements: achieves => set(() => ({allAchievements: achieves})),
  setMyAcheivements: achieves => set(() => ({myAchievements: achieves})),
  setInProgressAchieves: achieves => set(()=> ({inProressAchieves: achieves})),
  setSelectedAchieves: achieve =>
    set(state => {
      const myAch = [...state.myAchievements];
      // const selectedAch = [...state.selectedAchieves];
      const item = myAch.findIndex(
        ach => ach.id === achieve.id && ach.isSelected === true,
      );

      if (item > -1) {
        // Toggle `isSelected` to false if it exists
        myAch[item].isSelected = false;
      } else {
        // Check if the selected count is under 3
        const selectedCount = myAch.filter(
          ach => ach.isSelected === true,
        ).length;
        if (selectedCount < 3) {
          // Add the achievement by toggling `isSelected` to true
          const x = myAch.findIndex(ach => ach.id === achieve.id);
          if (x > -1) {
            myAch[x].isSelected = true;
          }
          console.log(myAch[item]);

          // myAch[item].isSelected = true;
        } else {
          // Return if limit is reached
          return state;
        }
      }

      return {myAchievements: myAch};
    }),
}));

export const useAchievementState = createSelectors(state);
