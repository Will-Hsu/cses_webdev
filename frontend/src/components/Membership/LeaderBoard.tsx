import { Container, Typography, useMediaQuery } from '@mui/material';
import alertLogo from '../../images/events-attended-alert.svg';
import defaultPic from '../../images/profile.png';
import { membershipStyles } from './styles';

interface RankingProps {
  rank: number;
  name: string;
  points: number;
  profilePicture?: string;
}

const Ranking = ({ rank, name, points, profilePicture: profilePic }: RankingProps) => {
  const styles = membershipStyles();
  const profile = profilePic || defaultPic;
  let width, height;
  switch (rank) {
    case 1:
      width = '280px';
      height = '280px';
      break;
    case 2:
      width = '230px';
      height = '230px';
      break;
    case 3:
      width = '180px';
      height = '180px';
      break;
    default:
      width = '230px';
      height = '230px';
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" sx={styles.leaderBoardRanking} gutterBottom>
        {rank}
      </Typography>

      <div
        style={{
          width,
          height,
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '8px',
        }}
      >
        <img
          src={profile}
          alt="Profile"
          width={width}
          height={height}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <Typography sx={styles.rankingPoints} gutterBottom>
        {points} POINTS
      </Typography>

      <Typography sx={styles.rankingName} gutterBottom>
        {name}
      </Typography>
    </div>
  );
};

const LeaderBoard = ({ rankings, myPoint }: { rankings: Array<RankingProps>; myPoint: number }) => {
  const styles = membershipStyles();

  const isDesktop = useMediaQuery('(min-width: 1161px)');
  const isIpad = useMediaQuery('(min-width: 768px) and (max-width: 1160px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  const orderRankings = (rankings: Array<RankingProps>) => {
    if (isDesktop) {
      return (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '70px',
          }}
        >
          <Ranking
            rank={2}
            name={rankings[1].name}
            points={rankings[1].points}
            profilePicture={rankings[1].profilePicture}
          />

          <Ranking
            rank={1}
            name={rankings[0].name}
            points={rankings[0].points}
            profilePicture={rankings[0].profilePicture}
          />

          <Ranking
            rank={3}
            name={rankings[2].name}
            points={rankings[2].points}
            profilePicture={rankings[2].profilePicture}
          />
        </div>
      );
    }

    if (isMobile || isIpad) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '70px',
          }}
        >
          <Ranking
            rank={1}
            name={rankings[0].name}
            points={rankings[0].points}
            profilePicture={rankings[0].profilePicture}
          />

          <Ranking
            rank={2}
            name={rankings[1].name}
            points={rankings[1].points}
            profilePicture={rankings[1].profilePicture}
          />

          <Ranking
            rank={3}
            name={rankings[2].name}
            points={rankings[2].points}
            profilePicture={rankings[2].profilePicture}
          />
        </div>
      );
    }
  };
  return (
    <Container maxWidth="xl" sx={styles.leaderBoardBody}>
      <Typography sx={styles.eventsAttendedTitle}>LEADERBOARD</Typography>

      {myPoint < rankings[2].points && (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '60px' }}>
          <img
            src={alertLogo}
            alt="Events Attended Alert"
            width="32"
            height="32"
            style={{ marginRight: '10px' }}
          />
          <Typography variant="subtitle1" sx={styles.eventsAttendText}>
            <i>You are {rankings[2].points - myPoint} points behind THIRD PLACE!</i>
          </Typography>
        </div>
      )}

      {orderRankings(rankings)}
    </Container>
  );
};

export default LeaderBoard;
