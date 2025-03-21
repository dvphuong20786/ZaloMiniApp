import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import NavigationLeft from "@/components/navigation-left/navigation-left";
import AboutMe from "@/components/portfolio/about-me/about-me";
import Contact from "@/components/portfolio/contact/contact";
import Experience from "@/components/portfolio/experience/experience";
import Hello from "@/components/portfolio/hello/hello";
import Skills from "@/components/portfolio/skills/skills"; 
import React, { Suspense } from "react";
import { Box, Page, useNavigate } from "zmp-ui";


const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return ( 
    <Page className="page"> 
      <Box flex className="content-right">
        <Box flex>
          <Header />
        </Box>
        <Box flex>
          <Hello /> 
        </Box>
        <Box flex> 
          <AboutMe  /> 
        </Box>
        <Box flex> 
          <Skills  /> 
        </Box>
        <Box flex> 
          <Experience  /> 
        </Box> 
        <Box flex> 
          <Contact  /> 
        </Box> 
        <Box flex> 
          <Footer  /> 
        </Box> 
      </Box>
         
        <div className="mn-right">
          <NavigationLeft />
        </div>
      </Page>
  );
};

export default HomePage;
 