import {useEffect, useState} from 'react';

import ChallengerFoundComponent from './ChallengerFound/ChallengerFoundComponent';
import ChallengerDetails from './ChallengersDetails/ChallengerDetails';

const BeforeBeginMatchStage = () => {
  const [titleStartToFade, setTitleStartToFade] = useState<Boolean>(false);
  const [detailsStartToShow, setDetailsStartToShow] = useState<Boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setTitleStartToFade(true);
    }, 500);
  }, []);
  return (
    <>
      <ChallengerFoundComponent
        setDetailsStartToShow={setDetailsStartToShow}
        fadeOutStart={titleStartToFade}
      />
      {detailsStartToShow && <ChallengerDetails />}
    </>
  );
};

export default BeforeBeginMatchStage;
