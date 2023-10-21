import { Box, Button, Input, TextField } from "@mui/material";
import { colors } from "../theme/color.theme";
import SearchIcon from "@mui/icons-material/Search";

export default function HeaderComponent() {
  return (
    <Box width={"100%"} display={"flex"} alignItems={"center"} height={60}>
      <Button variant="link">Accueil</Button>
      <Button variant="link">Bibliothème numéirique</Button>
      <Box ml={"auto"} mr={5}>
        <Input
          startAdornment={<SearchIcon></SearchIcon>}
          placeholder="Rechercher"
        ></Input>
      </Box>
    </Box>
  );
}
