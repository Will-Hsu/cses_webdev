import { Container, Typography } from '@mui/material';
import alertLogo from '../../images/events-attended-alert.svg';
import defaultPic from '../../images/profile.png';
import { membershipStyles } from './styles';

interface RankingProps {
  rank: number;
  name: string;
  points: number;
  profilePic?: string;
}

const Ranking = ({ rank, name, points, profilePic }: RankingProps) => {
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
  };

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

const LeaderBoard = () => {
  const styles = membershipStyles();

  return (
    <Container maxWidth="xl" sx={styles.leaderBoardBody}>
      <Typography sx={styles.eventsAttendedTitle}>LEADERBOARD</Typography>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '60px' }}>
        <img
          src={alertLogo}
          alt="Events Attended Alert"
          width="32"
          height="32"
          style={{ marginRight: '10px' }}
        />
        <Typography variant="subtitle1" sx={styles.eventsAttendText}>
          <i>You are 5 points behind THIRD PLACE!</i>
        </Typography>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '70px' }}>
        <Ranking rank={2} name="Jake S." points={55} />
        
        <Ranking rank={1} name="Sarah M." points={70} />
        
        <Ranking rank={3} name="Ivan C." points={50} />
      </div>

      {/* <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'center', alignItems: 'center', gap: '70px' }}
      >
        <Grid item>
          <Ranking rank={2} name="Jake S." points={55} profilePic={gloriaPic} />
        </Grid>

        <Grid item>
          <Ranking rank={1} name="Sarah M." points={70} />
        </Grid>

        <Grid item>
          <Ranking rank={3} name="Ivan C." points={50} />
        </Grid>
      </Grid> */}
    </Container>
  );
};

export default LeaderBoard;
