import {useState} from 'react';
import {Box, keyframes} from '@mui/material';

import InfoAboutPlayer from '../ChallengersDetails/components/infoAboutPlayer';

import avatar1 from '@/assets/img/icons/avatars/player1.png';
import avatar2 from '@/assets/img/icons/avatars/player2.png';
import {PlayerAvatar} from '@/components/atoms/PlayerAvatar';
import {useMakeMatchState} from '@/components/pages/MakeMatch/state/make-match.state';
import {flex} from '@/utils/flexHelper';

const PlayersPicturesBeforeMatch = () => {
  const [smashEnd, setSmashEnd] = useState<Boolean>(false);
  const {selectedFriend} = useMakeMatchState();
  const info = {
    yours: {name: 'you', level: 10, victoryRate: 87},
    opponent: {
      name: selectedFriend?.name.split(' ')[0] ?? 'someone',
      level: 9,
      victoryRate: 95,
    },
  };

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        perspective: '1000px',
        ...flex().astretch().nowrap().result,
        '.pictureContainer': {
          width: '50%',
          animation: `${smash} 0.6s cubic-bezier(0.55, 0, 1, 0.45) forwards`,
          '.player-avatar': {
            width: '104%',
            height: '100%',
            position: 'absolute',
            bottom: 0,
            transform: 'translateZ(1500px)',
          },
        },
      }}>
      {' '}
      <Box
        className="pictureContainer"
        onAnimationEnd={() => setSmashEnd(true)}
        sx={{
          left: 0,
        }}>
        <PlayerAvatar dir="ltr" img={avatar1} />
      </Box>
      <Box
        className="pictureContainer"
        sx={{
          direction: 'rtl',
          right: 0,
        }}>
        <PlayerAvatar dir="rtl" img={avatar2} />
      </Box>
      <InfoAboutPlayer
        challengersInfo={info}
        isSmashAnimationEnded={smashEnd}
      />
    </Box>
  );
};

export default PlayersPicturesBeforeMatch;

const smash = keyframes`
 
	0% {
		opacity: 0;
		transform: translateZ(800px);
	}

	38% {
		opacity: 1;
		transform: translateZ(0);
	}

	65% {
		transform: translateZ(50px);
	}

	72% {
		transform: translateZ(0);
	}

	81% {
		transform: translateZ(15px);
	}
	100% {
		transform: translateZ(0);
	}

`;
