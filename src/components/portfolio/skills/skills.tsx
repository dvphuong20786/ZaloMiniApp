import { useAtomValue } from "jotai";
import React from "react";
import { Avatar, Box, Text } from "zmp-ui";
import "./skills.scss"; 
import { userState } from "@/state";

import RabbitMQ from "/src/assets/skill/RabbitMQ.svg";
import AndroidStudio from "/src/assets/skill/Android-Studio.svg";
import Android from "/src/assets/skill/Android.svg";

import Docker from "/src/assets/skill/Docker.svg";
import Dart from "/src/assets/skill/Dart.svg";
import Flutter from "/src/assets/skill/Flutter.svg";

import Jenkins from "/src/assets/skill/Jenkins.svg";
import Oracle from "/src/assets/skill/Oracle.svg";
import MySQL from "/src/assets/skill/MySQL.svg";

import MongoDB from "/src/assets/skill/icon-mongodb.svg";
import SQLServer from "/src/assets/skill/Microsoft-SQL-Server.svg";
import PostgreSQL from "/src/assets/skill/icon-postgresql.svg";

import Git from "/src/assets/skill/icon-git.svg";
import PHP from "/src/assets/skill/PHP.svg";
import NetCore from "/src/assets/skill/icon-NET-core.svg";

import AWS from "/src/assets/skill/AWS.svg";
import Postman from "/src/assets/skill/Postman.svg";
import Microservices from "/src/assets/skill/microservice-icon.png";

import Figma from "/src/assets/skill/icon-figma.svg";
import GitHub from "/src/assets/skill/GitHub.svg";
import Socket from "/src/assets/skill/icon-socket.svg";

import CCSharp from "/src/assets/skill/C-CSharp.svg";
import jQuery from "/src/assets/skill/jQuery.svg";
import HTML5 from "/src/assets/skill/HTML5.svg";

import iconsass from "/src/assets/skill/icon-sass.svg";
import nodejs from "/src/assets/skill/icon-nodejs.svg";
import Angular from "/src/assets/skill/Angular.svg";

import react from "/src/assets/skill/icon-react.svg";
import Typescript from "/src/assets/skill/icon-typescript0.svg";
import Javascript from "/src/assets/skill/icon-javscript.svg";




type PropsSkills  = { 
  cssClass?: string;
}

const Skills  : React.FunctionComponent<PropsSkills> = ({ cssClass = "skills-me" }) => {
 
  return (
    <Box flex >
      {/* <div className={`about ${cssClass}`}> */}
      <div className={`skills ${cssClass}`}>
        <div className="container">
          <div className="row">
            <div className="row2">
              <div className="tag">
                <div className="skills2">Skills</div>
              </div>
            </div>
            <div className="row2">
              <div className="subheading">
                The skills, tools and technologies I am really good at:
              </div>
            </div>
          </div>
          <div className="row3">
            <div className="grid">
              <div className="row-1">
                <div className="tech">
                  <img className="icon-javscript" src={Javascript} /> 
                  <div className="javascript">Javascript</div>
                </div>
                <div className="tech">
                  <img className="icon-typescript" src={Typescript} />
                  <div className="typescript">Typescript</div>
                </div>
                <div className="tech"> 
                  <img className="icon-typescript" src={react} />
                  <div className="react">React</div>
                </div>
              </div>
              <div className="row-2">
                <div className="tech2"> 
                  <img className="icon-typescript" src={Angular} />
                  <div className="next-js">Angular</div>
                </div>
                <div className="tech2">
                  <img className="icon-typescript" src={nodejs} /> 
                  <div className="node-js">Node.js</div>
                </div>
                <div className="tech2"> 
                  <img className="icon-typescript" src={iconsass} /> 
                  <div className="sass-scss">Sass/Scss</div>
                </div>
              </div>
              <div className="row-3"> 
                <div className="tech2"> 
                  <img className="icon-typescript" src={HTML5} /> 
                  <div className="socket-io">HTML5</div>
                </div>
                <div className="tech"> 
                  <img className="icon-typescript" src={jQuery} /> 
                  <div className="postgre-sql">jQuery</div>
                </div>
                <div className="tech2">
                  <img className="icon-typescript" src={CCSharp} /> 
                  <div className="C-CSharp">C#(CSharp)</div>
                </div> 
              </div>
              <div className="row-3"> 
                <div className="tech2"> 
                  <img className="icon-typescript" src={Socket} /> 
                  <div className="socket-io">Socket.io</div>
                </div>
                <div className="tech2"> 
                  <img className="icon-typescript" src={GitHub} /> 
                  <div className="socket-io">GitHub</div>
                </div> 
                <div className="tech">
                  <img className="icon-typescript" src={Figma} />
                  <div className="figma">Figma</div>
                </div> 
              </div>
              <div className="row-4">
                <div className="tech"> 
                  <img className="icon-typescript" src={AWS} /> 
                  <div className="mongo-db">AWS</div>
                </div>
                <div className="tech"> 
                  <img className="icon-typescript" src={Postman} /> 
                  <div className="sass-scss">Postman</div>
                </div>
                <div className="tech">
                  <img className="icon-typescript" src={Microservices} />  
                  <div className="tailwindcss">Microservices</div>
                </div>
              </div>
               
              <div className="row-6">
                <div className="tech">
                  <img className="icon-typescript" src={Git} />
                  <div className="git">Git</div>
                </div>
                <div className="tech">
                  <img className="icon-typescript" src={PHP} />
                  <div className="cypress">PHP</div>
                </div>
                <div className="tech">
                  <img className="icon-typescript" src={NetCore} />
                  <div className="git">.NetCore</div>
                </div> 
              </div>
              <div className="row-6"> 
                <div className="tech"> 
                  <img className="icon-typescript" src={PostgreSQL} /> 
                  <div className="postgre-sql">PostgreSQL</div>
                </div>
                <div className="tech">
                  <img className="icon-typescript" src={SQLServer} />
                  <div className="MicrosoftSQLServer">SQLServer</div>
                </div>
                <div className="tech2">
                  <img className="icon-typescript" src={MongoDB} /> 
                  <div className="mongo-db">MongoDB</div>
                </div>
              </div>
              <div className="row-6"> 
                <div className="tech"> 
                  <img className="icon-typescript" src={MySQL} /> 
                  <div className="postgre-sql">MySQL</div>
                </div>
                <div className="tech">
                  <img className="icon-typescript" src={Oracle} />
                  <div className="MicrosoftSQLServer">Oracle</div>
                </div> 
                <div className="tech">
                  <img className="icon-typescript" src={Jenkins} />
                  <div className="storybook">Jenkins</div>
                </div>
              </div>
              <div className="row-6">
                <div className="tech">
                  <img className="icon-typescript" src={Flutter} />
                  <div className="git">Flutter</div>
                </div>
                <div className="tech">
                  <img className="icon-typescript" src={Dart} />
                  <div className="git">Dart</div>
                </div>
                <div className="tech">
                  <img className="icon-typescript" src={Docker} />
                  <div className="MicrosoftSQLServer">Docker</div>
                </div>
              </div>
              <div className="row-6">
                <div className="tech">
                  <img className="icon-typescript" src={Android} />
                  <div className="git">Android</div>
                </div>
                <div className="tech">
                  <img className="icon-typescript" src={AndroidStudio} />
                  <div className="AndroidStudio">AndroidStudio</div>
                </div> 
                <div className="tech"> 
                  <img className="icon-typescript" src={RabbitMQ} />
                  <div className="AndroidStudio">RabbitMQ</div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>

    </Box>
  );
};

export default Skills;

 
 