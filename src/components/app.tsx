import React from "react";
import {
  AnimationRoutes,
  App,
  Route,
  SnackbarProvider,
  ZMPRouter,
} from "zmp-ui";

import About from "@/pages/about";
import Form from "@/pages/form";
import HomePage from "@/pages/index";
import User from "@/pages/user"; 
import NavigationLeft from "./navigation-left/navigation-left";

const MyApp = () => {
  return (
    <App> 
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes> 
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/form" element={<Form></Form>}></Route>
            <Route path="/user" element={<User></User>}></Route>
            <Route path="/menu-left" element={<NavigationLeft></NavigationLeft>}></Route>
            
          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};
export default MyApp;
