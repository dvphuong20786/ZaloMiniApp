import { useAtomValue } from "jotai";
import React from "react";
import { Avatar, Box, Text } from "zmp-ui";
import "./contact.scss"; 
import { userState } from "@/state";
import mail from "/src/assets/images/mail.svg";
import copytext from "/src/assets/images/copy-text.svg";
import Iconphone from "/src/assets/images/Icon-phone.svg";
import llgit from "/src/assets/images/ll-git.svg";
import lltt from "/src/assets/images/ll-tt.svg";
import llfigma from "/src/assets/images/ll-figma.svg";
import llfb from "/src/assets/images/ll-fb.svg";



type PropsContact  = { 
  cssClass?: string;
}

const Contact  : React.FunctionComponent<PropsContact> = ({ cssClass = "contact-me" }) => {
 
  return (
    <Box flex >
      {/* <div className={`about ${cssClass}`}> */}
      <div className="contact-me">
        <div className="container">
          <div className="row">
            <div className="row2">
              <div className="tag">
                <div className="text">Get in touch</div>
              </div>
            </div>
            <div className="row2">
              <div className="text2">
                What’s next? Feel free to reach out to me if you&#039;re looking for a
                developer, have a query, or simply want to connect.
              </div>
            </div>
          </div>
          <div className="column">
            <div className="email">  
              <img className="icon" src={mail} /> 
              
              <div className="text3">dvphuong.dev@gmail.com</div>
              <div className="icon-button"> 
                <img className="icon2" src={copytext} /> 
              </div>
            </div> 
            <div className="phone"> 
              <img className="icon" src={Iconphone} />  
              <div className="text3">+84 855 550 200</div>
              <div className="icon-button">
              <img className="icon4" src={copytext} /> 
              </div>
            </div>
          </div>
          <div className="row3">
            <div className="social">
              <div className="text4">You may also find me on these platforms!</div>
              <div className="actions">
                <div className="links"> 
                  <img className="" src={llgit} /> 
                  <img className="" src={lltt} /> 
                  <img className="" src={llfigma} /> 
                  <img className="" src={llfb} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Box>
  );
};

export default Contact;

 
 