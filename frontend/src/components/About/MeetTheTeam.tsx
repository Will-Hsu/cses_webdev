import React, { useMemo, useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { gradientImgWrapper, gradientImg } from "./styles";
import Sithu from '../../images/meettheteamImages/sithu.jpg';
import Yashil from '../../images/meettheteamImages/yashil vora.jpg';
import Mishka from '../../images/meettheteamImages/mishka.jpeg';
import Brian from '../../images/meettheteamImages/brian.jpg';
import Jake from '../../images/meettheteamImages/jake villaseno.jpeg';
import Angelina from '../../images/meettheteamImages/angelina yee.jpg';
import Ganesh from '../../images/meettheteamImages/ganesh kumarappan.jpg';
import Sardor from '../../images/meettheteamImages/sardor sobirov.jpg';
import Shreya from '../../images/meettheteamImages/shreya gupta.jpg';
import ShreyaN from '../../images/meettheteamImages/Shreya Nagunuri.png';
import Kevin from '../../images/meettheteamImages/kevin kim.jpeg';
import KevinW from '../../images/meettheteamImages/KevinWu.png';
import Sofia from '../../images/meettheteamImages/sofia nguyen.png';
import Michael from '../../images/meettheteamImages/michael he.png';
import Pranav_Soma from '../../images/meettheteamImages/Pranav_Soma.jpeg';
import Nikitha_Maderamitla from '../../images/meettheteamImages/Nikitha_Maderamitla.jpg';
import Aryen_Singhal from '../../images/meettheteamImages/Aryen_Singhal.jpg';
import Hillary_Chang from '../../images/meettheteamImages/Hillary_Chang.webp';
import Aditya_Kakarla from '../../images/meettheteamImages/Aditya_Kakarla.jpg';
import Chase_Peterson from '../../images/meettheteamImages/Chase_Peterson.jpg';
import Tia_Irani from '../../images/meettheteamImages/Tia_Irani.jpeg';
import Steven_Shi from '../../images/meettheteamImages/Steven_Shi.jpg';
import Vinod_Vairavaraj from '../../images/meettheteamImages/Vinod_Vairavaraj.png';
import Shree_Venkatesh from '../../images/meettheteamImages/Shree_Venkatesh.jpg';
import Bhavik_Chandna from '../../images/meettheteamImages/Bhavik_Chandna.jpg';
import Kevin_Sun from '../../images/meettheteamImages/Kevin_Sun.jpg';
import Aryamun_Das from '../../images/meettheteamImages/Ryan_Das.jpeg';
import Aditi_Bansal from '../../images/meettheteamImages/Aditi_Bansal.jpg';
import Lucas_Hlaing from '../../images/meettheteamImages/Lucas_Hiaing.jpeg';
import Yash_Ravipati from '../../images/meettheteamImages/Yash_Ravipati.jpg'

type Division = "general" | "dev" | "open-source" | "innovate";
type Member = {
  name: string;
  company: string;
  division: Division;
  linkedin?: string;
  email?: string;
  photo?: string;
};

const PLACEHOLDER_PHOTO = "https://placehold.co/400x400?text=Photo";

const TEAM: Member[] = [
  // General
  { name: "Pranav Soma", company: "President", division: "general", photo: Pranav_Soma },
  { name: "Michael He", company: "VP External", division: "general", photo: Michael },
  { name: "Sithu Soe", company: "VP Operations", division: "general", photo: Sithu },
  { name: "Lucas Hlaing", company: "Finance Director", division: "general", photo: Lucas_Hlaing },
  { name: "Angelina Yee", company: "Marketing Chair", division: "general", photo: Angelina },
  { name: "Hillary Chang", company: "Corporate Connections Director", division: "general", photo: Hillary_Chang },

  // Dev
  { name: "Shreya Gupta", company: "President", division: "dev", photo: Shreya },
  { name: "Steven Shi", company: "VP Products", division: "dev", photo: Steven_Shi },
  { name: "Jake Villasenor", company: "VP Design", division: "dev", photo: Jake },
  { name: "Sardor Sobirov", company: "Frontend Developer", division: "dev", photo: Sardor },
  { name: "Sithu Soe", company: "Frontend Developer", division: "dev", photo: Sithu },
  { name: "Kevin Wu", company: "Frontend Developer", division: "dev", photo: KevinW },
  { name: "Shreya Nagunuri", company: "Backend Developer", division: "dev", photo: ShreyaN },
  { name: "Brian Liu", company: "Backend Developer", division: "dev", photo: Brian },
  { name: "Ganesh Kumarappan", company: "Backend Developer", division: "dev", photo: Ganesh },

  // Open Source
  { name: "Yashil Vora", company: "President", division: "open-source", photo: Yashil },
  { name: "Mishka Jethwani", company: "VP Operations", division: "open-source", photo: Mishka },
  { name: "Yash Ravipati", company: "VP Tech", division: "open-source", photo: Yash_Ravipati },
  { name: "Aryen Singhal", company: "Engineering Manager", division: "open-source", photo: Aryen_Singhal },
  { name: "Chase Peterson", company: "Engineering Manager", division: "open-source", photo: Chase_Peterson },
  { name: "Shree Venkatesh", company: "Engineering Manager", division: "open-source", photo: Shree_Venkatesh },
  { name: "Kevin Sun", company: "Engineering Manager", division: "open-source", photo: Kevin_Sun },
  { name: "Kevin Kim", company: "Lead Software Engineer", division: "open-source", photo: Kevin },
  { name: "Sofia Nguyen", company: "UI/UX Designer", division: "open-source", photo: Sofia },
  { name: "Tia Irani", company: "UI/UX Designer", division: "open-source", photo: Tia_Irani },
  { name: "Aditi Bansal", company: "UI/UX Designer", division: "open-source", photo: Aditi_Bansal },
  { name: "Vinod Vairavaraj", company: "UI/UX Designer", division: "open-source", photo: Vinod_Vairavaraj },

  // Innovate
  { name: "Pranav Soma", company: "President", division: "innovate", photo: Pranav_Soma },
  { name: "Aryamun Das", company: "Founder", division: "innovate", photo: Aryamun_Das },
  { name: "Nikitha Maderamitla", company: "Internal Director", division: "innovate", photo: Nikitha_Maderamitla },
  { name: "Aditya Kakarla", company: "External Director", division: "innovate", photo: Aditya_Kakarla },
  { name: "Bhavik Chandna", company: "Project Lead", division: "innovate", photo: Bhavik_Chandna },
];

const DIVISIONS: { label: string; value: Division }[] = [
  { label: "General", value: "general" },
  { label: "Dev", value: "dev" },
  { label: "Open Source", value: "open-source" },
  { label: "Innovate", value: "innovate" },
];

const PAGE_SIZE = 8; // 3 x 2 grid

function TeamCard({ m }: { m: Member }) {
  return (
    <Box>
      {/* Gradient border wrapper */}
      <Box sx={gradientImgWrapper}>
        {/* Surface keeps square ratio and lets us overlay icons */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "1 / 1",
            overflow: "hidden",
            bgcolor: "rgba(255,255,255,0.04)",
            borderRadius: 0, // flat corners
          }}
        >
          <Box
            component="img"
            src={m.photo || PLACEHOLDER_PHOTO}
            alt={m.name}
            sx={{
              ...gradientImg,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Bottom-left: LinkedIn */}
          <IconButton
            size="small"
            component="a"
            href={m.linkedin || "#"}
            target={m.linkedin ? "_blank" : undefined}
            rel={m.linkedin ? "noopener noreferrer" : undefined}
            disabled={!m.linkedin}
            sx={{
              position: "absolute",
              left: 8,
              bottom: 8,
              bgcolor: "rgba(0,0,0,0.55)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.75)" },
            }}
            aria-label={`LinkedIn ${m.name}`}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>

          {/* Bottom-right: Email */}
          <IconButton
            size="small"
            component="a"
            href={m.email ? `mailto:${m.email}` : "#"}
            disabled={!m.email}
            sx={{
              position: "absolute",
              right: 8,
              bottom: 8,
              bgcolor: "rgba(0,0,0,0.55)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.75)" },
            }}
            aria-label={`Email ${m.name}`}
          >
            <EmailIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <Typography
        variant="subtitle1"
        sx={{ color: "white", textAlign: "center", mt: 1, fontWeight: 600 }}
      >
        {m.name}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "white", textAlign: "center", opacity: 0.9 }}
      >
        {m.company}
      </Typography>
    </Box>
  );
}

export default function MeetTheTeam() {
  const [tab, setTab] = useState<Division>("general");
  const [page, setPage] = useState(0);

  useEffect(() => setPage(0), [tab]);

  const filtered = useMemo(() => TEAM.filter((t) => t.division === tab), [tab]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const start = page * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  const canPrev = page > 0;
  const canNext = page < pageCount - 1;

  return (
    <Container disableGutters sx={{marginTop: '10%'}}>
      <Typography
        component="h2"
        sx={{
          color: "white",
          textAlign: "center",
          fontFamily: "Chakra Petch",
          fontWeight: 700,
          fontSize: "clamp(28px, 6vw, 56px)",
          mb: 3,
        }}
      >
        Meet the Team
      </Typography>

      {/* Pill tabs */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
        <Box
          sx={{
            border: "2px solid rgba(82,229,231,0.8)",
            borderRadius: 9999,
            px: 1,
            overflow: "hidden",
            maxWidth: 760,
            width: "100%",
          }}
        >
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            variant="fullWidth"
            textColor="inherit"
            TabIndicatorProps={{ style: { display: "none" } }}
            sx={{
              "& .MuiTab-root": {
                color: "white",
                textTransform: "none",
                fontWeight: 600,
                minHeight: 44,
                borderRight: "1px solid rgba(82,229,231,0.35)",
              },
              "& .MuiTab-root:last-of-type": { borderRight: "none" },
              "& .Mui-selected": { background: "rgba(82,229,231,0.18)" },
            }}
          >
            {DIVISIONS.map((d) => (
              <Tab key={d.value} label={d.label} value={d.value} />
            ))}
          </Tabs>
        </Box>
      </Box>

      {/* Pager with arrows */}
      <Box sx={{ position: "relative", px: { xs: 0, md: 6 } }}>
        <IconButton
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={!canPrev}
          sx={{
            position: "absolute",
            left: { xs: -4, md: 0 },
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "rgba(0,0,0,0.4)",
            color: 'white',
            "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
          }}
          aria-label="Previous"
        >
          <ChevronLeftIcon />
        </IconButton>

        <IconButton
          onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
          disabled={!canNext}
          sx={{
            position: "absolute",
            right: { xs: -4, md: 0 },
            top: "40%",
            transform: "translateY(-50%)",
            bgcolor: "rgba(0,0,0,0.4)",
            color: 'white',
            "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
          }}
          aria-label="Next"
        >
          <ChevronRightIcon />
        </IconButton>

        <Grid container spacing={4} justifyContent="flex-start" alignItems="flex-start">
          {visible.map((m, i) => (
            <Grid item xs={6} sm={4} md={3} key={`${m.division}-${i}`}>
              <TeamCard m={m} />
            </Grid>
          ))}
          {visible.length < PAGE_SIZE &&
            Array.from({ length: PAGE_SIZE - visible.length }).map((_, i) => (
              <Grid item key={`spacer-${i}`} />
            ))}
        </Grid>
      </Box>

      <Box
    sx={{
      display: { xs: "flex", md: "none" }, // only show on mobile
      justifyContent: "center",
      gap: 2,
      mt: 2,
    }}
  >
    <IconButton
      onClick={() => setPage((p) => Math.max(0, p - 1))}
      disabled={!canPrev}
      sx={{
        bgcolor: "rgba(0,0,0,0.4)",
        color: "white",
        "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
        "&.Mui-disabled": { opacity: 0 },
      }}
      aria-label="Previous"
    >
      <ChevronLeftIcon />
    </IconButton>
    <IconButton
      onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
      disabled={!canNext}
      sx={{
        bgcolor: "rgba(0,0,0,0.4)",
        color: "white",
        "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
        "&.Mui-disabled": { opacity: 0 },
      }}
      aria-label="Next"
    >
      <ChevronRightIcon />
    </IconButton>
  </Box>
    </Container>
  );
}
