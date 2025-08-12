import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function EventManagement() {
  const events = [
    {
      img: "/assert/eventsimg/event1.jpeg",
      title: "Ribbon Cutting Ceremony",
      desc: "Grand openings made memorable with elegance and prestige.",
    },
    {
      img: "/assert/eventsimg/event2.jpeg",
      title: "College Events",
      desc: "Vibrant celebrations to inspire and energize students.",
    },
    {
      img: "/assert/eventsimg/event3.jpeg",
      title: "Guest Speeches",
      desc: "Influential voices creating lasting impact through powerful talks.",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
        gap: 3,
        p: 4,
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f8f8f8",
      }}
    >
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          style={{
            background: "#fff",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <Box
            component="img"
            src={event.img}
            alt={event.title}
            sx={{
              width: "100%",
              height: "240px",
              objectFit: "cover",
            }}
          />
          <Box sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#222" }}>
              {event.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>
              {event.desc}
            </Typography>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
}
