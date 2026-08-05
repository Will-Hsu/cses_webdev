// Team members shown in the "Meet the Team!" section on the Home page.
// Edit this file to update the people displayed — no other code changes needed.
import { EventCategory } from '../../utils/types';
import Sithu from '../../images/meettheteamImages/sithu.jpg';
import Yashil from '../../images/meettheteamImages/yashil vora.jpg';
import Mishka from '../../images/meettheteamImages/mishka.jpeg';
import Angelina from '../../images/meettheteamImages/angelina yee.jpg';
import Shreya from '../../images/meettheteamImages/shreya gupta.jpg';
import Michael from '../../images/meettheteamImages/michael he.png';
import Pranav_Soma from '../../images/meettheteamImages/Pranav_Soma.jpeg';
import Nikitha_Maderamitla from '../../images/meettheteamImages/Nikitha_Maderamitla.jpg';
import Hillary_Chang from '../../images/meettheteamImages/Hillary_Chang.webp';
import Aditya_Kakarla from '../../images/meettheteamImages/Aditya_Kakarla.jpg';
import Steven_Shi from '../../images/meettheteamImages/Steven_Shi.jpg';
import Bhavik_Chandna from '../../images/meettheteamImages/Bhavik_Chandna.jpg';
import Aryamun_Das from '../../images/meettheteamImages/Ryan_Das.jpeg';
import Lucas_Hlaing from '../../images/meettheteamImages/Lucas_Hiaing.jpeg';
import Yash_Ravipati from '../../images/meettheteamImages/Yash_Ravipati.jpg';
import Jake from '../../images/meettheteamImages/jake villaseno.jpeg';

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  community: EventCategory;
}

export const TEAM_MEMBERS: TeamMember[] = [
  // General
  { name: 'Pranav Soma', role: 'President', photo: Pranav_Soma, community: 'General' },
  { name: 'Michael He', role: 'VP External', photo: Michael, community: 'General' },
  { name: 'Sithu Soe', role: 'VP Operations', photo: Sithu, community: 'General' },
  { name: 'Lucas Hlaing', role: 'Finance Director', photo: Lucas_Hlaing, community: 'General' },
  { name: 'Angelina Yee', role: 'Marketing Chair', photo: Angelina, community: 'General' },
  {
    name: 'Hillary Chang',
    role: 'Corporate Connections Director',
    photo: Hillary_Chang,
    community: 'General',
  },

  // Open-Source
  { name: 'Yashil Vora', role: 'President', photo: Yashil, community: 'Open-Source' },
  { name: 'Mishka Jethwani', role: 'VP Operations', photo: Mishka, community: 'Open-Source' },
  { name: 'Yash Ravipati', role: 'VP Tech', photo: Yash_Ravipati, community: 'Open-Source' },

  // Innovate
  { name: 'Pranav Soma', role: 'President', photo: Pranav_Soma, community: 'Innovate' },
  { name: 'Aryamun Das', role: 'Founder', photo: Aryamun_Das, community: 'Innovate' },
  {
    name: 'Nikitha Maderamitla',
    role: 'Internal Director',
    photo: Nikitha_Maderamitla,
    community: 'Innovate',
  },
  { name: 'Aditya Kakarla', role: 'External Director', photo: Aditya_Kakarla, community: 'Innovate' },
  { name: 'Bhavik Chandna', role: 'Project Lead', photo: Bhavik_Chandna, community: 'Innovate' },

  // Dev
  { name: 'Shreya Gupta', role: 'President', photo: Shreya, community: 'Dev' },
  { name: 'Steven Shi', role: 'VP Products', photo: Steven_Shi, community: 'Dev' },
  { name: 'Jake Villasenor', role: 'VP Design', photo: Jake, community: 'Dev' },
];
