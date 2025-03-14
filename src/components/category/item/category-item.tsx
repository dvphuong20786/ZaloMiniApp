import { useAtomValue } from "jotai";
import React from "react";
import { Avatar, Box, Text } from "zmp-ui";
import "./category-item.scss";

import { userState } from "@/state";

type PropsCategoryItem  = { 
  cardImage?: string;
}

const CategoryItem  : React.FunctionComponent<PropsCategoryItem> = ({ cardImage = "card-image.png" }) => {
 
  return (
    <Box flex className="category-item ">
      <div className={`card`}>
      <div className="card-content">
        <img className="card-image" alt="Card image" src={cardImage} />

        <div className="card-information">
          <div className="card-description">Chairs</div>

          <div className="card-title">Office Collection</div>
        </div>
      </div>
    </div>
    </Box>
  );
};

export default CategoryItem;

 
 