import {useEffect, useState} from 'react';

import ChallengerFoundComponent from './ChallengerFound/ChallengerFoundComponent';
import ChallengerDetails from './ChallengersDetails/ChallengerDetails';

import ChallengerDetailsSkeleton from '@/components/templates/MatchLoading/loadingStages/ChallengersDetailsSkeleton';

const BeforeBeginMatchStage = () => {
  const [titleStartToFade, setTitleStartToFade] = useState<Boolean>(false);
  const [detailsStartToShow, setDetailsStartToShow] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setTitleStartToFade(true);
    }, 500);
  }, []);
  useEffect(() => {
    if (detailsStartToShow) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [detailsStartToShow]);
  return (
    <>
      <ChallengerFoundComponent
        setDetailsStartToShow={setDetailsStartToShow}
        fadeOutStart={titleStartToFade}
      />
      {detailsStartToShow &&
        (loading ? <ChallengerDetailsSkeleton /> : <ChallengerDetails />)}
    </>
  );
};

export default BeforeBeginMatchStage;
