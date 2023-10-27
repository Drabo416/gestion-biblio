import { Box, Button, Typography } from "@mui/material";
import HeaderComponent from "../component/header.component";
import { colors } from "../theme/color.theme";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRequest } from "../Rethinktecture/hook/fetch-data.hook";
import { GET_RESOURCE_REQUEST } from "../Rethinktecture/Store/reducers/action";
import { RouteName } from "../constant/route.constant";

export default function LivrePage() {
  const [livre, setLivre] = useState({});
  const { id } = useParams();
  const { fetchData } = useRequest();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const { data, error } = await fetchData({
        type: GET_RESOURCE_REQUEST,
        uri: `livre/${id}`,
      });
      if (error.code == -1) {
        setLivre(data);
      } else {
        // alert("Une erreur s'est produite, veuillez réessayer");
      }
    })();
  }, [fetchData]);
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
          {livre?.titre}
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <Box
            sx={{
              backgroundImage: `url(${livre.imageUrl})`,
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
              {livre.description}
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
              <Typography>Auteur: {livre.auteur}</Typography>
              <Typography>Catégorie: {livre.categorie?.label}</Typography>
              <Typography>
                Disponible:{" "}
                {livre.exemplaire?.findIndex(
                  (item) => item.disponilbe == true
                ) == -1
                  ? "Non"
                  : "Oui"}
              </Typography>
            </Box>
            <Box
              display={"flex"}
              width={"80%"}
              mx={"auto"}
              mt={5}
              justifyContent={"space-between"}
            >
              <Button onClick={() => navigate(RouteName.index)}>Retour</Button>
              <Button
                href="https://international.scholarvox.com/"
                target="_blank"
              >
                Bibliographie num.
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
