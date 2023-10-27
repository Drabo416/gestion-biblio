import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouteName } from "../constant/route.constant";

export default function LivreComponent({ data }) {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(`${RouteName.livre}/${data.id}`)}
      width={250}
      my={2}
      sx={{ cursor: "pointer" }}
      mx={1}
      borderRadius={2}
    >
      <Box
        sx={{
          backgroundImage: `url(${data.imageUrl?.trim()})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: 300,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
          mx: "auto",
        }}
      ></Box>
      <Box
        boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}
        zIndex={2}
        py={2}
        bgcolor={"white"}
        my={3}
      >
        <Typography mt={2} ml={1} fontSize={18} fontWeight={"bold"}>
          {data?.titre}
        </Typography>
        <Typography ml={1}>Auteur: {data?.auteur}</Typography>
        <Typography ml={1}>
          Disponible:{" "}
          {data.exemplaire?.findIndex((item) => item.disponilbe == true) == -1
            ? "Non"
            : "Oui"}
        </Typography>
      </Box>
    </Box>
  );
}
