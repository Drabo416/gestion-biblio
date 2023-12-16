import { Box, Button, Input, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { RouteName } from "../constant/route.constant";

export default function HeaderComponent() {
  const navigate = useNavigate();
  return (
    <Box width={"100%"} display={"flex"} alignItems={"center"} height={60}>
      <Button onClick={() => navigate(RouteName.index)} variant="link">
        Accueil
      </Button>
      <Button
        href="https://international.scholarvox.com/"
        target="_blank"
        variant="link"
      >
        Bibliothème numéirique
      </Button>
      <Box ml={"auto"} mr={5}>
        <Input
          startAdornment={<SearchIcon></SearchIcon>}
          placeholder="Rechercher"
        ></Input>
      </Box>
    </Box>
  );
}
