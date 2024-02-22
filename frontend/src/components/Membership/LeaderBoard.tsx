import { Container, Grid, Typography, useMediaQuery } from '@mui/material';
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
  let width, height, rankColor;
  const isDesktop = useMediaQuery('(min-width: 1375px)');
  const isIpad = useMediaQuery('(min-width: 768px) and (max-width: 1375px)');
  switch (rank) {
    case 1:
      width = '175px';
      height = '175px';
      rankColor = '#F3C969';
      break;
    case 2:
      width = '175px';
      height = '175px';
      rankColor = '#A6A6A6';
      break;
    case 3:
      width = '175px';
      height = '175px';
      rankColor = '#9E7518';
      break;
    default:
      width = '175px';
      height = '175px';
      rankColor = '#9E7518';
  }
  if (isDesktop) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          variant="h5"
          sx={{ ...styles.leaderBoardRanking, color: rankColor }}
          gutterBottom
        >
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
  }
  if (isIpad) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          variant="h5"
          sx={{ ...styles.leaderBoardRanking, color: rankColor, fontSize: 'clamp(45px, 2vw, 60px)'}}
          gutterBottom
        >
          {rank}
        </Typography>

        <div
          style={{
            width:'85%',
            height:'auto',
            // borderRadius: '50%',
            // overflow: 'hidden',
            marginBottom: '8px',
          }}
        >
          <img
            src={profile}
            alt="Profile"
            width='100%'
            height='100%'
            style={{ objectFit: 'cover', borderRadius: '50%' }}
          />
        </div>

        <Typography sx={{...styles.rankingPoints, fontSize: 'clamp(15px, 2vw, 22px)'}} gutterBottom>
          {points} POINTS
        </Typography>

        <Typography sx={{...styles.rankingName, fontSize: 'clamp(15px, 2vw, 20px)'}} gutterBottom>
          {name}
        </Typography>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" sx={styles.leaderBoardMobileRanking} gutterBottom>
          {rank}
        </Typography>

        <div
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginBottom: '8px',
            marginRight: '1rem',
          }}
        >
          <img
            src={profile}
            alt="Profile"
            width="100%"
            height="100%"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={styles.rankingMobileName} gutterBottom>
            {name}
          </Typography>
          <Typography sx={styles.rankingMobilePoints} gutterBottom>
            {points} POINTS
          </Typography>
        </div>
      </div>
    );
  }
};

const LeaderBoard = ({ rankings, myPoint }: { rankings: Array<RankingProps>; myPoint: number }) => {
  const styles = membershipStyles();

  const isDesktop = useMediaQuery('(min-width: 1375px)');
  const isIpad = useMediaQuery('(min-width: 768px) and (max-width: 1375px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  const orderRankings = (rankings: Array<RankingProps>) => {
    if (isDesktop) {
      return (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '70px',
          }}
        >
          <div style={styles.leaderBoardBadge}>
            <Ranking
              rank={1}
              name={rankings[0].name}
              points={rankings[0].points}
              profilePicture={rankings[0].profilePicture}
            ></Ranking>
          </div>
          <div style={styles.leaderBoardBadge}>
            <Ranking
              rank={2}
              name={rankings[1].name}
              points={rankings[1].points}
              profilePicture={rankings[1].profilePicture}
            ></Ranking>
          </div>
          <div style={styles.leaderBoardBadge}>
            <Ranking
              rank={3}
              name={rankings[2].name}
              points={rankings[2].points}
              profilePicture={rankings[2].profilePicture}
            ></Ranking>
          </div>
          <div style={styles.leaderBoardBadge}>
            <Ranking
              rank={3}
              name={rankings[2].name}
              points={rankings[2].points}
              profilePicture={rankings[2].profilePicture}
            ></Ranking>
          </div>
        </div>
      );
    }

    if (isIpad) {
      return (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '35px',
          }}
        >
          <div style={styles.leaderBoardBadge}>
            <Ranking
              rank={1}
              name={rankings[0].name}
              points={rankings[0].points}
              profilePicture={rankings[0].profilePicture}
            ></Ranking>
          </div>
          <div style={styles.leaderBoardBadge}>
            <Ranking
              rank={2}
              name={rankings[1].name}
              points={rankings[1].points}
              profilePicture={rankings[1].profilePicture}
            ></Ranking>
          </div>
          <div style={styles.leaderBoardBadge}>
            <Ranking
              rank={3}
              name={rankings[2].name}
              points={rankings[2].points}
              profilePicture={rankings[2].profilePicture}
            ></Ranking>
          </div>
          <div style={styles.leaderBoardBadge}>
            <Ranking
              rank={3}
              name={rankings[2].name}
              points={rankings[2].points}
              profilePicture={rankings[2].profilePicture}
            ></Ranking>
          </div>
        </div>
      );
    }
    if (isMobile) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
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
