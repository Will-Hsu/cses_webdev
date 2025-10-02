import React from "react";
import { Typography, Box } from "@mui/material";

type EventCardProps = {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  calendar_link: string;
  description: string;
  instagram_link: string;
  _id: string;
};

const EventCard = ({
  title,
  startDate,
  endDate,
  location,
  calendar_link,
  description,
  instagram_link,
  _id,
}: EventCardProps) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const formattedDate = start.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const formattedTime = `${start.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  })} - ${end.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  })}`;

  return (
    <Box
      sx={{
        display: "inline-block",
        borderRadius: 6,
        p: "4px",
        background: "linear-gradient(45deg, orange, cyan, purple, blue)",
      }}
    >
      <Box
        sx={{
          minHeight: "20rem",
          width: "16rem",
          borderRadius: 6,
          bgcolor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: 3,
          p: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          fontSize={20}
          align="center"
          sx={{
            mb: 1,
            overflowWrap: "break-word",
            wordBreak: "break-word",
            fontSize: "25px"
          }}
        >
          {title}
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "18px" }}>
            {formattedDate} | {formattedTime}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "18px" }}>
            {location}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EventCard;