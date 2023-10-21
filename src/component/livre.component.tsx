import { Box, Typography } from "@mui/material";

export default function LivreComponent() {
  return (
    <Box width={250} my={2} mx={1} borderRadius={2}>
      <Box
        sx={{
          backgroundImage:
            "url(https://cdn.franceloisirs.ch/2735154-1733319-thickbox/l-art-subtil-de-s-en-foutre.jpg)",
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
          Lorem ipsum, dolor
        </Typography>
        <Typography ml={1}>Auteur: Lorem lorem</Typography>
        <Typography ml={1}>Date de sortie: 20-10-2023</Typography>
        <Typography ml={1}>Categorie: Lorem lorem</Typography>
      </Box>
    </Box>
  );
}
