import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LivreComponent from "../livre.component";
import HomePage from "../../page/home.page";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addResource } from "../../Rethinktecture/Store/reducers/action";
import { ReducerEnum } from "../../enum/reducer.enum";
import { BaseUrl } from "../../api/base-url.api";
import LivrePage from "../../page/livre.page";

export default function MainComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addResource(ReducerEnum.RequestConfig, { baseUrl: BaseUrl }));
  }, []);
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/livre/:id" element={<LivrePage></LivrePage>}></Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
