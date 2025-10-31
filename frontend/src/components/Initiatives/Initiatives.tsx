import React from "react"
import { Box, Grid, Typography } from "@mui/material";
import TechTalksIcon from "./images/techtalks.png";
import AIAIcon from "./images/ai.jpg";
import SoCalIcon from "./images/socal.jpg";
import OpenSourceIcon from "./images/opensource.png";
import ResearchJournalIcon from "./images/journal.png";

const initiatives = [
    {
      title: "Tech Talks",
      description:
        "Our multimedia outreach initiative, sharing CSES projects through blogs, interviews, and podcasts. By highlighting community-driven innovation, it inspires future computer scientists and showcases the real-world impact of student-led research and development.",
      icon: TechTalksIcon,
    },
    {
      title: "AI Alliance",
      description:
        "The alliance fosters collaboration among top AI talent. As founding board members of this nationwide university network, which includes Princeton, UPenn, MIT, Yale, Caltech, and Berkeley, we connect AI organizations with venture capitalists, industry leaders, and cutting edge companies.",
      icon: AIAIcon,
    },
    {
      title: "So-Cal Collective",
      description:
        "We are building a tri-university coalition with Bruin AI at UCLA and Gaucho AI at UCSB to foster a mission-aligned, community-driven network. Through shared research pods, industry-sponsored build projects, and co-hosted conferences and hackathons, the collective creates a platform for collaborative innovation.",
      icon: SoCalIcon,
    },
    {
      title: "Open-Source Cohorts",
      description:
        "OpenSource Cohorts is a quarterly workshop and project series teaching students the fundamentals of software development and essential tools like Git, all while contributing to real world open-source projects.",
      icon: OpenSourceIcon,
    },
    {
      title: "Research Journal",
      description:
        "Central to our CSES Innovate vision, this AI-focused journal is an open platform for undergraduate research. It features our work while giving all students a peer-reviewed venue to share ideas and drive technological progress.",
      icon: ResearchJournalIcon,
    },
  ];

const Initiatives = () => {
    return (
        <Box
        sx={{
            color: "white",
            p: 4,
            maxWidth: "1800px",
            mx: "auto",
            mt: 7,
            pt: 15,
        }}
        >
        <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 6, textAlign: "center", fontSize: 65}}
        >
            Initiatives
        </Typography>

        {initiatives.map((item, index) => (
            <Grid
            container
            spacing={2}
            alignItems="center"
            key={index}
            sx={{ mb: 6 }}
            >
            {/* Left Column: Title + Image */}
            <Grid
                item
                xs={12}
                sm={3}
                sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                mr: { sm: 3 }
                }}
            >
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, fontSize: 30 }}>
                {item.title}
                </Typography>

                <Box
                sx={{
                    width: 194,
                    height: 194,
                    borderRadius: "50%",
                    background:
                    "linear-gradient(180deg, #EBB111, #64C3E3, #5DF0C4, #725DF0)",
                    p: "6px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >
                <Box
                    sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    }}
                >
                    <Box
                    component="img"
                    src={item.icon}
                    alt={item.title}
                    sx={{
                        width: "85%",
                        height: "85%",
                        objectFit: "contain",
                    }}
                    />
                </Box>
                </Box>
            </Grid>

            {/* Right Column: Description */}
            <Grid
                item
                xs={12}
                sm={8}
                sx={{
                display: "flex",
                alignItems: "center",
                }}
            >
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.6, 
                    fontSize: {
                      xs: 20,
                      sm: 24,
                      md: 28,
                      lg: 30,
                    },
                    textAlign: {
                      xs: "center",
                      sm: "left",
                    },
                  }}
                >
                {item.description}
                </Typography>
            </Grid>
            </Grid>
        ))}
        </Box>
    );
};

export default Initiatives