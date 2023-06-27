import React, { useContext, useEffect, useMemo } from "react";
import { Grid } from "@mui/material";

import Context from "@/context/Search/context";
import { useAppDispatch, useAppSelector } from "@/state/hooks/hooks";
import { fetchItemsList } from "@/state/catalogSlice/catalogActions";
import { IItem } from "@/api/types";
import ErrorModal from "@/components/ErrorModal/ErrorModal";
import CardComponent from "@/components/Card/CardComponent";
import { styleGridContainer, styleGridItem } from "@/pages/Catalog/styles";

const Catalog: React.FC = () => {
  const list = useAppSelector((state): IItem[] => state.catalog.items);
  const context = useContext(Context);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItemsList());
  }, [dispatch]);

  const filteredList = useMemo(
    () =>
      list?.filter(({ name }) => name.toLowerCase().includes(context?.value)),
    [list, context?.value]
  );

  return (
    <>
      {filteredList && (
        <Grid container sx={styleGridContainer} spacing={{ xs: 2 }}>
          {filteredList.map(({ id, name, like, picture, price }) => {
            return (
              <Grid
                sx={styleGridItem}
                item
                xs={6}
                sm={4}
                md={3}
                lg={2}
                key={id}
              >
                <CardComponent
                  id={id}
                  name={name}
                  like={like}
                  picture={picture.path}
                  alt={picture.alt}
                  price={price.value}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
      <ErrorModal />
    </>
  );
};

export default Catalog;
