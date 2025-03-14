import { useAtomValue } from "jotai";
import React from "react";
import { Avatar, Box, Text } from "zmp-ui";
import "./category.scss";

import { userState } from "@/state";
import CategoryItem from "./item/category-item";

type PropsCategory  = { 
  cardImage?: string;
}

const Category  : React.FunctionComponent<PropsCategory> = ({ cardImage = "card-image.png" }) => {
 
  return (
    <Box flex className="category categories-section">
      <div className="categories-section">
        <div className="frame">
          <div className="static-title">Categories</div>
        </div>

        <div className="grid-horizontal"> 
          <CategoryItem cardImage="/src/assets/images/Card Image-0.png" />
          <CategoryItem cardImage="/src/assets/images/Card Image-1.png" />
          <CategoryItem cardImage="/src/assets/images/Card Image-2.png" />
          <CategoryItem cardImage="/src/assets/images/Card Image-3.png" />
          <CategoryItem cardImage="/src/assets/images/Card Image-4.png" />
          <CategoryItem cardImage="/src/assets/images/Card Image-5.png" />
        </div>
      </div>
    </Box>
  );
};

export default Category;

 
 