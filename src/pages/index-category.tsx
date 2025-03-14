import React, { Suspense } from "react";
import { Icon, List, Page, useNavigate } from "zmp-ui";

import UserCard from "@/components/user-card"; 
import Category from "@/components/category/category";

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <Page className="page">
      <Category cardImage="/src/assets/images/Card Image.png"  />
      <Suspense>
        <div className="section-container">
          <UserCard />
        </div>
      </Suspense>
      <div className="section-container">
        <List>
          <List.Item
            onClick={() => navigate("/about")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>About</div>
          </List.Item>
          <List.Item
            onClick={() => navigate("/user")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>User</div>
          </List.Item>
        </List>
      </div>
    </Page>
  );
};

export default HomePage;
