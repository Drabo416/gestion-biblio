import { Box, Typography } from "@mui/material";
import home from "../assets/home.jpg";
import LivreComponent from "../component/livre.component";
import HeaderComponent from "../component/header.component";
import { colors } from "../theme/color.theme";
import { useEffect } from "react";
import { useRequest } from "../Rethinktecture/hook/fetch-data.hook";
import { GET_RESOURCE_REQUEST } from "../Rethinktecture/Store/reducers/action";
import { ReducerEnum } from "../enum/reducer.enum";
import { useSelector } from "react-redux";
export default function HomePage() {
  const { fetchData } = useRequest();
  const categorie = useSelector((state: any) => state.categorie);
  useEffect(() => {
    fetchData({
      type: GET_RESOURCE_REQUEST,
      uri: "categorie",
      stateName: ReducerEnum.Categorie,
    });
  }, [fetchData]);
  return (
    <Box width={"100%"}>
      <HeaderComponent></HeaderComponent>
      <Box mt={5} ml={5} display={"flex"} alignItems={"center"}>
        <Typography fontSize={20} fontWeight={"bold"}>
          BIENVENUE DANS VOTRE BILIOTHEQUE
        </Typography>
        <Box py={3} bgcolor={colors.black[100]} ml={5} width={"60%"}>
          <Typography mx={5}>
            La plateforme de la bibliothèque physique de l'Esatic permet de voir
            la disponibilité des livres dans la bibliothèque. Nous avons, peut
            rechercher un livre par titre, auteur ou sujet. Si le livre est
            disponible.
          </Typography>
        </Box>
      </Box>
      {categorie?.data?.map((item) => (
        <Box>
          <Box
            width={"90%"}
            py={2}
            bgcolor={colors.primary[500]}
            mx={"auto"}
            mt={5}
          >
            <Typography color={"white"} fontSize={16} ml={3}>
              {item.label}
            </Typography>
          </Box>
          <Box
            justifyContent={"center"}
            display={"flex"}
            flexWrap={"wrap"}
            mx={"auto"}
            mt={5}
          >
            {item?.livre?.map((item2) => (
              <LivreComponent key={item2.id} data={item2}></LivreComponent>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
