import { Box, Button, Typography } from "@mui/material";
import HeaderComponent from "../component/header.component";
import { colors } from "../theme/color.theme";

export default function LivrePage() {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
    >
      <HeaderComponent></HeaderComponent>

      <Box my={10} flex={1}>
        <Typography
          textAlign={"center"}
          fontSize={16}
          fontWeight={"bold"}
          mb={3}
        >
          TITRE DU LIVRE
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <Box
            sx={{
              backgroundImage:
                "url(https://cdn.franceloisirs.ch/2735154-1733319-thickbox/l-art-subtil-de-s-en-foutre.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: 500,
              width: 300,
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
            }}
          ></Box>
          <Box>
            <Box
              //   bgcolor={colors.black[100]}
              ml={5}
              fontSize={18}
              width={600}
              px={2}
              py={2}
              mt={5}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
              odit repellat, nihil distinctio officiis maiores ipsa, delectus
              blanditiis explicabo voluptatibus saepe nam dolorum eius maxime
              porro nemo adipisci nobis quo.
            </Box>
            <Box
              bgcolor={colors.black[100]}
              ml={5}
              fontSize={18}
              width={600}
              px={2}
              py={2}
              borderRadius={5}
              mt={5}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
              odit repellat, nihil distinctio officiis maiores ipsa, delectus
              blanditiis explicabo voluptatibus saepe nam dolorum eius maxime
              porro nemo adipisci nobis quo.
            </Box>
            <Box
              display={"flex"}
              width={"80%"}
              mx={"auto"}
              mt={5}
              justifyContent={"space-between"}
            >
              <Button>Retour</Button>
              <Button>Bibliographie num.</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
