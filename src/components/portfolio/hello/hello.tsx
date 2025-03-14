import { useAtomValue } from "jotai";
import React from "react";
import { Avatar, Box, Text } from "zmp-ui";
import "./hello.scss"; 
import { userState } from "@/state";
import meavata from "/src/assets/images/me-avata.png";
import Iconlocation from "/src/assets/images/Icon-location.svg";
import Iconavailable from "/src/assets/images/Icon-available.svg"; 
import IconButton from "/src/assets/images/Icon Button.svg";
import IconButton2 from "/src/assets/images/Icon Button2.svg";
import IconButton3 from "/src/assets/images/Icon Button3.svg";

type PropsHello  = { 
  cssClass?: string;
}

const Hello  : React.FunctionComponent<PropsHello> = ({ cssClass = "hello-me" }) => {
 
  return (
    <Box flex>
    <div className={`hero ${cssClass}`}>
      <div className="container">
        <div className="column">
          <div className="pic-container">
            <div className="overlap-group">
              <div className="background" /> 
                <img src={meavata} className="pic"></img> 
            </div>
          </div>
        </div>

        <div className="div">
          <div className="div-2">
            <div className="text">Hi, I’m Phương 👋</div>

            <p className="text-wrapper">
              I&#39;m a full stack developer (.Net Core & Angular.js) with a
              focus on creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>

          <div className="div-2">
            <div className="location">  
              <img src={Iconlocation} className="icon-button-instance"></img>
              <div className="text-2">Ha Noi, Viet Nam</div>
            </div>

            <div className="hire"> 
              <img src={Iconavailable} className="icon-button-instance"></img> 
              <div className="text-2">Available for new projects</div>
            </div>
          </div>

          <div className="actions">
            <div className="links"> 
              <img src={IconButton} className="icon-button-instance"></img>
              <img src={IconButton2} className="icon-button-instance"></img>
              <img src={IconButton3} className="icon-button-instance"></img> 
            </div>
          </div>
        </div>
      </div>
    </div>
    </Box>
  );
};

export default Hello;

 
 