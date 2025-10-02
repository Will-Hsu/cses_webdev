import { SxProps, Theme } from '@mui/material/styles';

/* ---------- Gradient border tokens & helpers ---------- */

export const GRADIENT = 'linear-gradient(90deg, #FACC15, #22D3EE, #A855F7)'; // yellow → teal → violet

/** Generic mixin you can spread into any sx */
export const makeGradientBorder = (
  opts?: { radius?: number | string; thickness?: number | string }
): SxProps<Theme> => {
  const radius = 1;
  const thickness = opts?.thickness ?? '3px';
  return {
    p: thickness,
    borderRadius: radius,
    background: GRADIENT,
  };
};

/** For images: outer wrapper (shows the gradient) */
export const gradientImgWrapper: SxProps<Theme> = {
  display: 'inline-block',
  ...makeGradientBorder({ radius: 0, thickness: '3px' }),
};

/** For images: the actual <img> (sits inside the wrapper) */
export const gradientImg: SxProps<Theme> = {
  display: 'block',
  borderRadius: 0,
  maxWidth: '100%',
  height: 'auto',
  backgroundColor: 'white',
};

/** Full-bleed section band with gradient border (e.g., “What is CSES?”) */
export const fullBleedGradientSection: SxProps<Theme> = {
  position: 'relative',
  mx: 'calc(50% - 50vw)',
  width: '100vw',
  ...makeGradientBorder({ radius: 8, thickness: '3px' }),
  '& > .section-surface': {
    borderRadius: 0,
    overflow: 'hidden',
    position: 'relative',
  },
};

export const aboutImageSize: SxProps<Theme> = {
  width: { xs: 280, sm: 360, md: 420 },
};

export const aboutStyles = () => ({
  backgroundImage: { width: '100%' },
  bg1: {
    width: '100%',
    marginBottom: '10%',
    marginLeft: '-1%',
    scale: '103%',
    marginTop: '-10%',
    opacity: '0.6',
  },
  bg2: {
    transform: 'scaleX(-1) rotate(8deg)',
    margin: '15% 0%',
    position: 'absolute',
    top: '50%',
    scale: '110%',
    opacity: '0.6',
  },
  body: { width: {xs: '100%', sm: '100%', md: '100%'}, position: 'relative', top: '93px', marginBottom: '240px', },
  root: {
    position: 'relative',
  },
  button1: {
    color: 'white',
    fontSize: '21px',
    fontWeight: 500,
    fontFamily: 'Chakra Petch',
    marginLeft: { xs: '9%', sm: '1%', md: '-5%' },
    marginTop: { xs: '7%', sm: '5%', md: '3%' },
  },
  button2: {
    color: 'white',
    fontSize: '21px',
    fontWeight: 500,
    fontFamily: 'Chakra Petch',
    marginLeft: { xs: '9%', sm: '8%', md: '12%' },
    marginTop: { xs: '-72%', sm: '-9%', md: '-12%' },
  },
  titleTop: {
    color: 'white',
    fontSize: {
      xs: 'clamp(10px, 8vw, 31.5px)',
      sm: 'clamp(20px, 8vw, 45px)',
      md: 'clamp(20px, 8vw, 65px)',
    },
    fontFamily: 'Chakra Petch',
    marginLeft: { xs: '11%', sm: '38%', md: '48%' },
    marginTop: { xs: '8%', sm: '30%', md: '-25%' },
    fontWeight: 700,
    width: { xs: '300px', sm: '500px', md: '500px' },
  },
  subtitleTop: {
    color: 'white',
    fontSize: {
      xs: 'clamp(5px, 5vw, 15px)',
      sm: 'clamp(10px, 5vw, 19px)',
      md: 'clamp(10px, 5vw, 20px)',
    },
    fontFamily: 'Inter',
    marginLeft: { xs: '11%', sm: '38%', md: '48%' },
    marginTop: { xs: '8%', sm: '8%', md: '3%' },
    fontWeight: 400,
    width: { xs: '300px', sm: '350px', md: '430px' },
  },
  mainTitleTop: {
    color: 'white',
    fontSize: 'clamp(20px, 8vw, 65px)',
    fontFamily: 'Chakra Petch',
    textAlign: 'center',
    fontWeight: 700,
  },
  subheadingTop: {
    color: 'black',
    fontSize: 'clamp(9px, 3vw, 20px)',
    fontFamily: 'Chakra Petch',
    fontWeight: 500,
    margin: 0
  },
  communityCard: {
    display: 'flex',
    padding: '0 !important',
    backgroundColor: 'white',
    borderRadius: '10px'
  },
  communityCardImg: {
    width: '197.5px',
    height: 'auto',
    borderRadius: '10px 0 0 10px',
    borderColor: 'white',
    borderWidth: '1px',
    borderStyle: 'solid'
  },
  mainTitleMiddle: {
    color: 'white',
    fontSize: {
      xs: 'clamp(10px, 8vw, 31.5px)',
      sm: 'clamp(20px, 8vw, 48px)',
      md: 'clamp(20px, 8vw, 65px)',
    },
    fontFamily: 'Chakra Petch',
    marginTop: { xs: '25%', sm: '20%', md: '20%' },
    fontWeight: 700,
  },
  titleBottom1: {
    color: 'white',
    fontSize: {
      xs: 'clamp(20px, 8vw, 30px)',
      sm: 'clamp(20px, 8vw, 35px)',
      md: 'clamp(20px, 8vw, 48px)',
    },
    fontFamily: 'Inter',
    marginLeft: { xs: '11%', sm: '-20%', md: '-20%' },
    marginTop: { xs: '20%', sm: '25%', md: '50%' },
    fontWeight: 600,
  },
  subtitleBottom1: {
    color: 'white',
    fontSize: {
      xs: 'clamp(10px, 5vw, 15px)',
      sm: 'clamp(10px, 5vw, 18px)',
      md: 'clamp(10px, 5vw, 20px)',
    },
    fontFamily: 'Inter',
    marginLeft: { xs: '11%', sm: '-20%', md: '-20%' },
    marginTop: { xs: '8%', sm: '5%', md: '3%' },
    fontWeight: 400,
    width: { xs: '300px', sm: '350px', md: '573px' },
  },
  titleBottom2: {
    color: 'white',
    fontSize: {
      xs: 'clamp(20px, 8vw, 30px)',
      sm: 'clamp(20px, 8vw, 35px)',
      md: 'clamp(20px, 8vw, 48px)',
    },
    fontFamily: 'Inter',
    marginLeft: { xs: '11%', sm: '15%', md: '20%' },
    marginTop: { xs: '20%', sm: '35%', md: '30%' },
    fontWeight: 600,
  },
  subtitleBottom2: {
    color: 'white',
    fontSize: {
      xs: 'clamp(10px, 5vw, 15px)',
      sm: 'clamp(10px, 5vw, 18px)',
      md: 'clamp(10px, 5vw, 20px)',
    },
    fontFamily: 'Inter',
    marginLeft: { xs: '11%', sm: '15%', md: '20%' },
    marginTop: { xs: '8%', sm: '5%', md: '3%' },
    fontWeight: 400,
    width: { xs: '300px', sm: '350px', md: '573px' },
  },
  titleBottom3: {
    color: 'white',
    fontSize: {
      xs: 'clamp(20px, 8vw, 30px)',
      sm: 'clamp(20px, 8vw, 35px)',
      md: 'clamp(20px, 8vw, 48px)',
    },
    fontFamily: 'Inter',
    marginLeft: { xs: '11%', sm: '3%', md: '-5%' },
    marginTop: { xs: '13%', sm: '35%', md: '50%' },
    fontWeight: 600,
    width: { xs: '300px', sm: '500px', md: '573px' },
  },
  subtitleBottom3: {
    color: 'white',
    fontSize: {
      xs: 'clamp(10px, 5vw, 15px)',
      sm: 'clamp(10px, 5vw, 18px)',
      md: 'clamp(10px, 5vw, 20px)',
    },
    fontFamily: 'Inter',
    marginLeft: { xs: '11%', sm: '3%', md: '-5%' },
    marginTop: { xs: '8%', sm: '5%', md: '3%' },
    fontWeight: 400,
    width: { xs: '300px', sm: '350px', md: '573px' },
  },
  titleBottom4: {
    color: 'white',
    fontSize: {
      xs: 'clamp(20px, 8vw, 30px)',
      sm: 'clamp(20px, 8vw, 35px)',
      md: 'clamp(20px, 8vw, 48px)',
    },
    fontFamily: 'Inter',
    marginLeft: { xs: '11%', sm: '22%', md: '25%' },
    marginTop: { xs: '20%', sm: '40%', md: '35%' },
    width: { xs: '300px', sm: '350px', md: '573px' },
  },
  subtitleBottom4: {
    color: 'white',
    fontSize: {
      xs: 'clamp(10px, 5vw, 15px)',
      sm: 'clamp(10px, 5vw, 18px)',
      md: 'clamp(10px, 5vw, 20px)',
    },
    fontFamily: 'Inter',
    marginLeft: { xs: '11%', sm: '22%', md: '25%' },
    marginTop: { xs: '8%', sm: '5%', md: '3%' },
    fontWeight: 400,
    width: { xs: '300px', sm: '300px', md: '573px' },
  },
  mainTitleBottom: {
    color: 'white',
    fontSize: 'clamp(20px, 8vw, 65px)',
    fontFamily: 'Chakra Petch',
    marginTop: { xs: '28%', sm: '20%', md: '12%' },
    fontWeight: 700,
  },

});

