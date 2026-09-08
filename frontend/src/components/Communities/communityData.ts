import { colors } from '../../theme';
import OpenSourceLogo from '../../images/ourCommunitiesImages/OpenSourceLogo.png';
import InnovateLogo from '../../images/ourCommunitiesImages/InnovateLogo.png';
import DevLogo from '../../images/ourCommunitiesImages/DevLogo.png';
// Shared with the Join Us page, which is where these graphics landed first.
import chainGraphic from '../../images/joinus/chain.png';
import lightbulbGraphic from '../../images/joinus/lightbulb.png';
import gearGraphic from '../../images/joinus/gear.png';

export type ProjectStatus = 'Active' | 'Pending';

export interface Project {
  name: string;
  description: string;
  // Both optional: the chip and the member line are only rendered once real
  // values are filled in, so nothing is invented on the page.
  status?: ProjectStatus;
  members?: number;
}

export type Side = 'left' | 'right';

export interface Community {
  key: string;
  name: string;
  path: string;
  accent: string;
  logo: string;
  // Full-page backdrop for this community, drawn behind all content.
  graphic: string;
  description: string;
  // Each page orients its copy, logo, and backdrop differently.
  copySide: Side;
  logoSide: Side;
  graphicSide: Side;
  projects: Project[];
}

export const COMMUNITIES: Community[] = [
  {
    key: 'open-source',
    name: 'Open-Source',
    path: '/opensourcecommunity',
    accent: colors.lightBlue,
    logo: OpenSourceLogo,
    graphic: chainGraphic,
    description:
      'Contribute to meaningful open-source projects and learn collaborative development practices. Work with Git workflows, code review, and team collaboration in a supportive environment.',
    copySide: 'left',
    logoSide: 'right',
    graphicSide: 'right',
    projects: [
      {
        name: 'TritonScript',
        description:
          'An open-source, community-driven forum for UCSD students to collaboratively share class notes, study guides, and learning materials.',
      },
      {
        name: 'TritonSpend',
        description:
          'Helps university students manage personal finances effectively through intuitive dashboards and expense tracking.',
      },
      {
        name: 'Low-Price Center',
        description:
          'Enables UCSD students to exchange and sell goods easily through a centralized marketplace.',
      },
      {
        name: 'Opportune',
        description:
          'Connects UCSD students and alumni to support job searches, internships, and career growth with analytics and social features.',
      },
    ],
  },
  {
    key: 'innovate',
    name: 'Innovate',
    path: '/innovatecommunity',
    accent: colors.purple,
    logo: InnovateLogo,
    graphic: lightbulbGraphic,
    description:
      'Turn your ideas into reality through hackathons, prototyping, and entrepreneurial ventures. Learn design thinking, rapid prototyping, and how to bring innovative solutions to life.',
    copySide: 'right',
    logoSide: 'left',
    graphicSide: 'left',
    projects: [
      {
        name: 'ORCA',
        description:
          'An AI-based music production platform that streamlines arrangement, transcription, and sheet music digitization using deep learning models.',
      },
      {
        name: 'THIA',
        description:
          'An AI-driven therapy system delivering personalized, emotionally responsive mental health support using fine-tuned LLMs, memory tracking, and a lifelike 3D avatar.',
      },
      {
        name: 'SPYRE',
        description:
          'An accessible coding platform that translates spoken language into executable code, empowering individuals with physical disabilities to write software by voice.',
      },
      {
        name: 'Skin Lesion',
        description:
          'A CNN-based diagnostic tool for classifying skin lesions in dermoscopic images to support early skin cancer detection.',
      },
      {
        name: 'Virtual Try On',
        description:
          'A virtual try-on system using webcam input and generative models to render real-time, motion-aware garment fits with user-uploaded clothing.',
      },
    ],
  },
  {
    key: 'dev',
    name: 'Dev',
    path: '/devcommunity',
    accent: colors.mint,
    logo: DevLogo,
    graphic: gearGraphic,
    description:
      'Build industry-ready skills through workshops, projects, and professional development. Get career guidance, connect with mentors, and prepare for success in the tech industry.',
    copySide: 'left',
    logoSide: 'right',
    graphicSide: 'right',
    projects: [
      {
        name: 'WebClicker++',
        description:
          'A mobile-friendly classroom response system for creating courses, deploying timed questions, tracking attendance, and viewing analytics. Widely used in CSE courses at UC San Diego.',
      },
      {
        name: 'Lakewood Heating and AC',
        description:
          'A website revamp modernizing the company’s online presence, showcasing HVAC services, success stories, integrated reviews, and a custom admin portal for staff.',
      },
      {
        name: 'Paesani MBX',
        description:
          'A platform showcasing the MBX software, a C++ library that lets molecular dynamics drivers simulate chemical systems, with tutorials, contributor profiles, and publications.',
      },
    ],
  },
];

export const getCommunity = (key: string) =>
  COMMUNITIES.find((community) => community.key === key) ?? COMMUNITIES[0];
