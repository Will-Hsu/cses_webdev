import React, { useState, useEffect } from "react";
import { Box, Grid, Button, Typography, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { ArrowBackIosNewRounded, ArrowForwardIosRounded } from "@mui/icons-material";
import axios from "axios";
import EventCard from "./EventCard";
import { positions } from "@mui/system";

const categories = ["General", "Dev", "Open Source", "Innovate"];

const categoryColors: Record<string, string> = {
    General: "#EBB111",
    Dev: "#5DF0C4",
    "Open Source": "#64C3E3",
    Innovate: "#725DF0",
};

interface Event {
    calendar_link: string;
    description: string;
    end_time: string;
    instagram_link: string;
    location: string;
    start_time: string;
    title: string;
    _id: string;
    event_type: string;
}

const EventsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
    const [pastEvents, setPastEvents] = useState<Event[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const [upcomingRes, pastRes] = await Promise.all([
                    axios.get<Event[]>(`${process.env.REACT_APP_BACKEND_URL}/api/v1/events?type=upcoming`),
                    axios.get<Event[]>(`${process.env.REACT_APP_BACKEND_URL}/api/v1/events?type=past`),
                ]);

                const sortedUpcoming = upcomingRes.data.sort(
                    (a, b) =>
                        new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
                );
                const sortedPast = pastRes.data.sort(
                    (a, b) =>
                        new Date(b.start_time).getTime() - new Date(a.start_time).getTime()
                );

                setUpcomingEvents(sortedUpcoming);
                setPastEvents(sortedPast);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []);

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));

    const VISIBLE_COUNT = isXs ? 1 : isSm ? 2 : isMd ? 3 : 4;

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? Math.max(filteredUpcomingEvents.length - VISIBLE_COUNT, 0) : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev >= Math.max(filteredUpcomingEvents.length - VISIBLE_COUNT, 0) ? 0 : prev + 1
        );
    };

    const filteredUpcomingEvents = selectedCategory
        ? upcomingEvents.filter((event: any) => event.event_type === selectedCategory)
        : upcomingEvents;

    const filteredPastEvents = selectedCategory
        ? pastEvents.filter((event: any) => event.event_type === selectedCategory)
        : pastEvents;

    let visibleEvents: Event[] = [];
    if (filteredUpcomingEvents.length <= VISIBLE_COUNT) {
        visibleEvents = filteredUpcomingEvents;
    } else {
        visibleEvents = filteredUpcomingEvents.slice(currentIndex, currentIndex + VISIBLE_COUNT);

        if (visibleEvents.length < VISIBLE_COUNT) {
            const wrapCount = VISIBLE_COUNT - visibleEvents.length;
            visibleEvents = visibleEvents.concat(filteredUpcomingEvents.slice(0, wrapCount));
        }
    }

    const [pastIndex, setPastIndex] = useState(0);

    const pastCols = isXs ? 1 : isSm ? 2 : isMd ? 3 : 4;
    const pastRows = 3;
    const pastPerPage = pastCols * pastRows;

    const paginatedPastEvents = [];
    for (let i = 0; i < filteredPastEvents.length; i += pastPerPage) {
        paginatedPastEvents.push(filteredPastEvents.slice(i, i + pastPerPage));
    }

    const handlePastPrev = () => {
        setPastIndex((prev) => (prev === 0 ? paginatedPastEvents.length - 1 : prev - 1));
    };

    const handlePastNext = () => {
        setPastIndex((prev) => (prev === paginatedPastEvents.length - 1 ? 0 : prev + 1));
    };

    return (
        <Box
            sx={{
                mt: 18,
                mb: 18,
                maxWidth: "1400px",
                mx: "auto",
                px: { xs: 2, sm: 3, md: 4, lg: 5 },
            }}
        >
            <Typography
                variant="h3"
                align="center"
                fontWeight="bold"
                sx={{
                    mb: { xs: 2, md: 3 },
                    color: "white",
                    fontSize: { sm: "40px", md: "55px", lg: "65px" }
                }}
            >
                Events
            </Typography>

            {/* Category Buttons */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: { xs: 1.5, sm: 3, md: 4, lg: 6 },
                    flexWrap: "wrap",
                    mb: { xs: 4, md: 6 },
                    mt: { xs: 4, md: 6 },
                }}
            >
                {categories.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    const color = categoryColors[cat];
                    return (
                        <Button
                            key={cat}
                            onClick={() => setSelectedCategory(isSelected ? null : cat)}
                            variant={isSelected ? "contained" : "outlined"}
                            sx={{
                                minWidth: { xs: "100px", sm: "140px", md: "180px", lg: "220px" },
                                py: { xs: 0.8, sm: 1, md: 1.2 },
                                borderRadius: 2,
                                textTransform: "none",
                                fontWeight: "bold",
                                fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1.1rem", lg: "1.3rem" },
                                borderColor: color,
                                borderWidth: 2,
                                color: isSelected ? "white" : color,
                                bgcolor: isSelected ? color : "transparent",
                                "&:hover": {
                                    borderWidth: 2,
                                    bgcolor: isSelected ? color : "rgba(255,255,255,0.1)",
                                },
                            }}
                        >
                            {cat}
                        </Button>
                    );
                })}
            </Box>

            {/* Upcoming Events */}
            <Box sx={{ textAlign: "center", mb: { xs: 12, md: 20 }, mt: { xs: 6, md: 8 } }}>
                {filteredUpcomingEvents.length > 0 ? (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            position: "relative",
                        }}
                    >
                        {filteredUpcomingEvents.length > VISIBLE_COUNT && (
                            <IconButton
                                disableRipple
                                onClick={handlePrev}
                                sx={{
                                    color: "white",
                                    flexShrink: 0,
                                    "&:hover": { color: "rgba(255,255,255,0.5)" },
                                    mr: { xs: 1, lg: 2 }
                                }}
                            >
                                <ArrowBackIosNewRounded sx={{ fontSize: { sm: 28, md: 32 } }} />
                            </IconButton>
                        )}
                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                justifyContent: "center",
                                overflow: "hidden",
                                minWidth: 0,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: { xs: 2, sm: 2.5, md: 3, lg: 3.5 },
                                    flexWrap: "nowrap",
                                    width: "100%",
                                    alignItems: { xs: "center", lg: "stretch" },
                                    position: "relative"
                                }}
                            >
                                {visibleEvents.map((event) => (
                                    <Box
                                        key={event._id}
                                        sx={{
                                            flex: {
                                                xs: "0 0 100%",
                                                sm: "0 0 auto",
                                                md: "0 0 auto",
                                                lg: "0 0 auto"
                                            },
                                            width: {
                                                xs: "85%",
                                                sm: "calc((100% - 20px) / 2)",
                                                md: "calc((100% - 48px) / 3)",
                                                lg: "calc((100% - 84px) / 4)"
                                            },
                                            display: "flex",
                                        }}
                                    >
                                        <EventCard
                                            title={event.title}
                                            startDate={event.start_time}
                                            endDate={event.end_time}
                                            location={event.location}
                                            calendar_link={event.calendar_link}
                                            description={event.description}
                                            instagram_link={event.instagram_link}
                                            _id={event._id}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                        {filteredUpcomingEvents.length > VISIBLE_COUNT && (
                            <IconButton
                                disableRipple
                                onClick={handleNext}
                                sx={{
                                    color: "white",
                                    flexShrink: 0,
                                    "&:hover": { color: "rgba(255,255,255,0.5)" },
                                    ml: { xs: 0, lg: 2 }
                                }}
                            >
                                <ArrowForwardIosRounded sx={{ fontSize: { sm: 28, md: 32 } }} />
                            </IconButton>
                        )}
                    </Box>
                ) : (
                    <Typography
                        sx={{
                            color: "white",
                            mt: 2,
                            fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" }
                        }}
                        align="center"
                    >
                        No upcoming events.
                    </Typography>
                )}
            </Box>

            {/* Past Events */}
            <Box sx={{ textAlign: "center" }}>
                <Typography
                    variant="h3"
                    align="center"
                    fontWeight="bold"
                    sx={{
                        mb: { xs: 6, md: 8 },
                        color: "white",
                        fontSize: { sm: "40px", md: "55px", lg: "65px" }
                    }}
                >
                    Past Events
                </Typography>

                {filteredPastEvents.length > 0 ? (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            position: "relative",
                        }}
                    >
                        {paginatedPastEvents.length > 1 && (
                            <IconButton
                                disableRipple
                                onClick={handlePastPrev}
                                sx={{
                                    color: "white",
                                    flexShrink: 0,
                                    "&:hover": { color: "rgba(255,255,255,0.5)" },
                                }}
                            >
                                <ArrowBackIosNewRounded sx={{ fontSize: { sm: 28, md: 32 } }} />
                            </IconButton>
                        )}

                        <Box sx={{ flex: 1, minWidth: 0, px: { xs: 1, sm: 0 } }}>
                            <Grid container spacing={{ xs: 2, sm: 2, md: 2.5 }} justifyContent="center" alignItems="stretch">
                                {paginatedPastEvents[pastIndex].map((event) => (
                                    <Grid
                                        item
                                        key={event._id}
                                        xs={12}
                                        sm={6}
                                        md={4}
                                        lg={3}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <EventCard
                                            title={event.title}
                                            startDate={event.start_time}
                                            endDate={event.end_time}
                                            location={event.location}
                                            calendar_link={event.calendar_link}
                                            description={event.description}
                                            instagram_link={event.instagram_link}
                                            _id={event._id}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                        {paginatedPastEvents.length > 1 && (
                            <IconButton
                                disableRipple
                                onClick={handlePastNext}
                                sx={{
                                    color: "white",
                                    flexShrink: 0,
                                    "&:hover": { color: "rgba(255,255,255,0.5)" },
                                }}
                            >
                                <ArrowForwardIosRounded sx={{ fontSize: { sm: 28, md: 32 } }} />
                            </IconButton>
                        )}
                    </Box>
                ) : (
                    <Typography
                        sx={{
                            color: "white",
                            mt: { xs: 6, md: 8 },
                            mb: { xs: 6, md: 8 },
                            fontSize: { sm: "1.5rem", md: "1.5rem", lg: "1.5rem" }
                        }}
                        align="center"
                    >
                        No past events.
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default EventsPage;