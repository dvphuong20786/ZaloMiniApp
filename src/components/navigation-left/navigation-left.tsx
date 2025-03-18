import { useAtomValue } from "jotai";
import React, { useEffect, useState } from "react";
import { Box, } from "zmp-ui";
import "./navigation-left.scss"; 
import { Link, useNavigate } from 'react-router-dom';
import iconmenu from "/src/assets/icons/menu-more.svg";
import iconclose from "/src/assets/icons/menu-close.svg";
import Iconsax from "/src/assets/icons/Iconsax.svg";
import Iconsax1 from "/src/assets/icons/Iconsax-1.svg";
import Iconsax2 from "/src/assets/icons/Iconsax-2.svg";
import Iconsax3 from "/src/assets/icons/Iconsax-3.svg";
import Iconsax4 from "/src/assets/icons/Iconsax-4.svg";
import Iconsax5 from "/src/assets/icons/Iconsax-5.svg";
import Icondown from "/src/assets/icons/Icon-down.svg";
import Iconnext from "/src/assets/icons/Icon-next.svg";
import Iconline from "/src/assets/icons/line.svg"; 

import call from "/src/assets/icons/call.svg";
import mail from "/src/assets/icons/mail.svg";
import location from "/src/assets/icons/location.svg";
import warning from "/src/assets/icons/warning.svg";
import skills from "/src/assets/icons/skills.svg";
import experience from "/src/assets/icons/experience.svg";
import work from "/src/assets/icons/work.svg";
import IconlineDetail from "/src/assets/icons/line-detail.svg";

import meavata from "/src/assets/images/me-avata.png";
import Footer from "../footer/footer";
import Search from "/src/assets/icons/search-normal.svg";
import Notifications from "/src/assets/icons/Notifications.svg"; 


type PropsNavigationLeft  = { 
  cssClass?: string;
}

const NavigationLeft  : React.FunctionComponent<PropsNavigationLeft> = ({ cssClass = "navigation-left" }) => {
 
  // const Drawer = createDrawerNavigator();

  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const navigate = useNavigate();


  function switch_menu() {
      setShowMenu(!showMenu);
  }

  useEffect(() => {
      window.innerWidth > 600 ?
          setIsDesktop(true) : setIsDesktop(false);
  }, []);

  window.addEventListener('resize', () => {
      window.innerWidth > 600 ?
          setIsDesktop(true) : setIsDesktop(false);
  });

  return (
    <Box flex>
      <div className={`nav_bar ${cssClass}`}>
        <div className="card-menu">

          <div className="hellouser-warp">
             
            <img className="close-icon" onClick={() => navigate("/")}  src={iconclose} /> 
             
            <div className="hellouser">
              <div className="ellipse-450-warp">
                <img className="ellipse-450" src={meavata} />
              </div>
              <div className="frame-332">
                <div className="full-stack-developer">Sr. Full stack developer</div>
                <div className="inh-v-n-ph-ng">Dinh Van Phuong</div>
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
         
          <img className="line" src={Iconline} />
          <div className="lock-card active">
            <div className="lock-card-warp">
                <div className="frame-34494">
                  <img className="iconsax" src={Iconsax} />
                  <div className="assembly">About</div>
                </div>
                <img className="iconsax" src={Icondown} />
            </div>
            <div className="lock-card-detail">
              <div className="group-1171275880"> 
                <div className="frame-306">
                  <div className="frame-3062"> 
                    <div className="vuesax-bold-call">
                      <img className="vuesax-bold-call2" src={call}  />
                    </div>
                    <div className="_84-855-550-200">+84 855 550 200</div> 
                  </div>
                </div>
                <img className="line-94" src={IconlineDetail} />
              </div>
              <div className="group-1171275880"> 
                <div className="frame-306">
                  <div className="frame-3062"> 
                    <div className="vuesax-bold-call">
                      <img className="vuesax-bold-call2" src={mail} />
                    </div>
                    <div className="_84-855-550-200">dvphuong.dev@gmail.com</div> 
                  </div>
                </div>
                <img className="line-94" src={IconlineDetail} />
              </div>

              <div className="group-1171275880"> 
                <div className="frame-306">
                  <div className="frame-3062"> 
                    <div className="vuesax-bold-call">
                      <img className="vuesax-bold-call2" src={location} />
                    </div>
                    <div className="_84-855-550-200">Alley 465, Doi Can Street, Hanoi, Vietnam</div> 
                  </div>
                </div>
                <img className="line-94" src={IconlineDetail} />
              </div>

              <div className="group-1171275880"> 
                <div className="frame-306">
                  <div className="frame-3062"> 
                    <div className="vuesax-bold-call">
                      <img className="vuesax-bold-call2" src={warning} />
                    </div>
                    <div className="_84-855-550-200">Citizen Identity Card: 0300 8601 7526</div> 
                  </div>
                </div>
                {/* <img className="line-94" src={IconlineDetail} /> */}
              </div>
              
            </div>
          </div>
          <div className="lock-card">
            <div className="lock-card-warp">
              <div className="frame-34495">
                <img className="iconsax2" src={skills} />
                <div className="frame">Skills</div>
              </div>
              <img className="iconsax" src={Iconnext} /> 
            </div> 
          </div>
          <div className="lock-card">
            <div className="lock-card-warp">
              <div className="frame-34496">
                <img className="iconsax3" src={experience} />
                <div className="log-a">Experience</div>
              </div>
              <img className="iconsax" src={Iconnext} />
            </div>
          </div>
          <div className="lock-card">
            <div className="lock-card-warp">
              <div className="frame-34497">
                <img className="iconsax4" src={work} />
                <div className="painting">Work</div>
              </div>
              <img className="iconsax" src={Iconnext} />
            </div>
          </div>
          
        </div>
     
        <Footer  /> 
      </div> 
    </Box>
  );
};

export default NavigationLeft;

 
 
