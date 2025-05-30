import {useState} from 'react';

export const useChallenge = () => {
  const [selectedId, setSelectedId] = useState<number>(2);
  const [showAddFriend, setShowAddFrend] = useState<boolean>(false);

  const handleSelectedId = (id: number) => {
    setSelectedId(id);
  };

  const handleShowAddFriend = () => {
    setShowAddFrend(!showAddFriend);
  };

  return {
    selectedId,
    handleSelectedId,
    handleShowAddFriend,
    showAddFriend,
  };
};
