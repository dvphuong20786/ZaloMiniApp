import { useAtomValue } from "jotai";
import React from "react";
import { Avatar, Box, Text } from "zmp-ui";
import "./header.scss"; 
import { userState } from "@/state";
import meavata from "/src/assets/images/me-avata.png"; 
import Search from "/src/assets/icons/search-normal.svg";
import Notifications from "/src/assets/icons/Notifications.svg"; 

type PropsHeader  = { 
  cssClass?: string;
}

const Header  : React.FunctionComponent<PropsHeader> = ({ cssClass = "header-me" }) => {
 
  return (
    <Box flex> 
      <div className={`frame-158 ${cssClass}`}>
      <div className="hellouser">
        <div className="ellipse-450-warp">
          <img className="ellipse-450" src={meavata} />
        </div>
        <div className="frame-332">
          <div className="full-stack-developer">Full stack developer</div>
          <div className="ho-ng-h-i">Đinh Văn Phương</div>
        </div>
      </div>
      <div className="frame-1171276122">
        <div className="frame-1171276126"> 
            <img className="search-normal" src={Search} /> 
        </div>
        <div className="group-1171275188">
          
          <img className="notifications" src={Notifications} /> 
          <div className="frame-155">
            <div className="_2">2</div>
          </div>
        </div>
      </div>
    </div>

    </Box>
  );
};

export default Header;

 
 