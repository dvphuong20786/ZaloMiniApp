import { useAtomValue } from "jotai";
import React from "react";
import { Avatar, Box, Text } from "zmp-ui";
import "./footer.scss"; 
import { userState } from "@/state";

import copy from "/src/assets/images/copy.svg";

type PropsFooter  = { 
  cssClass?: string;
}

const Footer  : React.FunctionComponent<PropsFooter> = ({ cssClass = "footer-me" }) => {
 
  return (
    <Box flex >
      {/* <div className={`about ${cssClass}`}> */}
      <div className={`footer ${cssClass}`} >
        <div className="container">
          <div className="footer-note">
            <img className="icon" src={copy} />
            <div className="text"> 
                <span className="text-span">2025 |</span>
                <span className="text-span">Designed</span>
                <span className="text-span">and</span>
                <span className="text-span">coded</span>
                <span className="text-span">with</span>
                <span className="text-span">❤</span>
                <span className="text-span">️️ by D.V.Phuong</span> 
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Footer;

 
 