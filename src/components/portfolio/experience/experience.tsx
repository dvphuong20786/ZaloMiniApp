import { useAtomValue } from "jotai";
import React from "react";
import { Avatar, Box, Text } from "zmp-ui";
import "./experience.scss"; 
import { userState } from "@/state";
import logoupwork from "/src/assets/images/logo-upwork.svg";
import bubble from "/src/assets/images/bubble.svg";


type PropsExperience  = { 
  cssClass?: string;
}

const Experience  : React.FunctionComponent<PropsExperience> = ({ cssClass = "experience-me" }) => {
 
  return (
    <Box flex >
      {/* <div className={`about ${cssClass}`}> */}
      <div className={`experience ${cssClass}`} >
          <div className="container">
            <div className="row">
              <div className="row2">
                <div className="tag">
                  <div className="experience2">Experience</div>
                </div>
              </div>
              <div className="row2">
                <div className="subheading">
                  Here is a quick summary of my most recent experiences:
                </div>
              </div>
            </div>

            <div className="row3">
              <div className="row4">
                <div className="column"> 
                  <img className="" src={logoupwork} />  
                </div>
                <div className="column2">
                  <div className="text">Feb 2024 - Present</div>
                </div>
                <div className="column3">
                  <div className="text2">Sr. Fullstack Developer and Design</div>
                  <div className="column4">
                      <div className="text2-sub">NTSC – VnClound New Technology Solutions Software Company</div>
                        <div className="text">
                          Location: T6, 71 Tran Thai Tong, Dich Vong Hau, Cau Giay, Hanoi, Vietnam
                      </div> 
                      <div className="text">
                        Company Size: 70–100 employees
                      </div>
                  </div>
                      

                  <div className="text2-sub">Job Description</div> 
                  <div className="column4">

                    <div className="frame-1">  
                      <img className="" src={bubble} /> 
                      <div className="text">
                      Then, participate in the project, take online exams, create trial tests, and conduct both practice and official tests for employees.
                      </div>
                    </div>
                    <div className="frame-1"> 
                      <img className="" src={bubble} /> 
                      <div className="text">
                        Design: 1 person<br />
                        Frontend: 3–4 people<br />
                        Backend: 2 people<br />
                        Testing: 2 people<br />
                        Business Analyst (BA): 1 person
                      </div>
                    </div>
                    <div className="frame-1"> 
                      <img className="" src={bubble} /> 
                      <div className="text">
                        I participated in this project as the Frontend Team Leader. It was my first time working with React.js, so I built it from scratch, and since it was my initial exposure to React, the progress was a bit slow.
                        After the project ended, I returned to managing my previous projects, making revisions and further enhancements.
                      </div>
                    </div>  
                  </div>
   
                  <div className="text2-sub">Technical Stack</div>
                  <div className="column4">
                    <div className="frame-1">  
                        <img className="" src={bubble} /> 
                        <div className="text">Design: Figma</div>
                    </div> 
                    <div className="frame-1">  
                        <img className="" src={bubble} /> 
                        <div className="text">Frontend: Reactjs, Bootstrap, TypeScript, JavaScript</div>
                    </div>
                    <div className="frame-1">  
                        <img className="" src={bubble} /> 
                        <div className="text">Java</div>
                    </div>
                    <div className="frame-1">  
                        <img className="" src={bubble} /> 
                        <div className="text">Product: Website + Mobile</div>
                    </div> 
                  </div>


                  <div className="text2-sub">Job Description (Continued)</div> 
                  <div className="column4"> 
                    <div className="frame-1"> 
                      <img className="" src={bubble} /> 
                      <div className="text">
                        I returned to my previous projects and continued working on what I was familiar with: Angular, .NET Core, and SQL Server. 
                        I further developed the projects by using Docker for file and database storage, 
                        and Jenkins for management and automated deployment. 
                        I also worked on mobile app development, 
                        expanded the website system to international markets such as Thailand and Indonesia, 
                        developed a project on Zalo Mini App, 
                        and implemented many other tool functions.
                      </div>
                    </div>
                  </div>
   
                  <div className="column4">
                    <div className="text i">
                      <i>
                      "Because the project is copyrighted and under strict security measures, there is no preview available online. I apologize for not being able to show it here."
                      </i>
                    </div>
                  </div>
                </div>
         
                
              </div> 
            </div>



            <div className="row3">
              <div className="row4">
                <div className="column"> 
                  <img className="" src={logoupwork} />  
                </div>
                <div className="column2">
                  <div className="text">May 2023 - Feb 2024</div>
                </div>
                <div className="column3">
                  <div className="text2">Sr. Fullstack Developer and Design</div>
                  <div className="column4">
                      <div className="text2-sub">NTSC – VnClound New Technology Solutions Software Company</div>
                        <div className="text">
                          Location: T6, 71 Tran Thai Tong, Dich Vong Hau, Cau Giay, Hanoi, Vietnam
                      </div> 
                      <div className="text">
                        Company Size: 70–100 employees
                      </div>
                  </div>
                      

                  <div className="text2-sub">Project Overview</div>
                  <div className="column4">

                    <div className="frame-1">  
                      <img className="" src={bubble} /> 
                      <div className="text bold">Design Phase</div>
                    </div>
                    <div className="frame-1">  
                      <div className="space">&nbsp;</div>
                      <div className="text">
                      In the initial phase, I create designs directly using Figma. With prior design experience, 
                      I have a solid understanding of the business requirements.
                      </div>
                    </div>


                    <div className="frame-1">  
                      <img className="" src={bubble} /> 
                      <div className="text bold">Frontend Phase</div>
                    </div>
                    <div className="frame-1">  
                      <div className="space">&nbsp;</div>
                      <div className="text">
                      Next, I develop the website’s frontend—quickly converting Figma designs to code. I build key forms such as the home page, dashboard, request list, and signature form (using Syncfusion’s PDFViewer). 
                      I also support colleagues by developing the request creation form (which generates a set of documents for signing) and the request detail view.
                      </div>
                    </div>


                    <div className="frame-1">  
                      <img className="" src={bubble} /> 
                      <div className="text bold">Backend Phase</div>
                    </div>
                    <div className="frame-1">  
                      <div className="space">&nbsp;</div>
                      <div className="text">
                      On the backend, I develop APIs for sending emails and integrate with SignNow, 
                      while also providing support for updating the APIs that handle request creation and refreshing.
                      </div>
                    </div>

                    <div className="frame-1">  
                      <img className="" src={bubble} /> 
                      <div className="text bold">Completed Project</div>
                    </div>
                    <div className="frame-1">  
                      <div className="space">&nbsp;</div>
                      <div className="text">
                      The project involved detailed revisions and fixes for issues related to e-signatures.
                      </div>
                    </div>
                     
                  </div>
                  <div className="text2-sub">Technical Stack</div>
                  <div className="column4">
                    <div className="frame-1">  
                        <img className="" src={bubble} /> 
                        <div className="text">Design: Figma</div>
                    </div>
                    <div className="frame-1">  
                        <img className="" src={bubble} /> 
                        <div className="text">Framework: ASP.NET Zero</div>
                    </div>
                    <div className="frame-1">  
                        <img className="" src={bubble} /> 
                        <div className="text">Frontend: Angular 15, Bootstrap, Syncfusion, TypeScript, JavaScript</div>
                    </div>
                    <div className="frame-1">  
                        <img className="" src={bubble} /> 
                        <div className="text">Backend: .NET Core, SQL Server 2019</div>
                    </div>
                    <div className="frame-1">  
                        <img className="" src={bubble} /> 
                        <div className="text">Product: Website + Mobile</div>
                    </div>
                    <div className="frame-1">  
                        <img className="" src={bubble} /> 
                        <div className="text">Additionally, I use Figma and Photoshop to design and slice HTML for the main interface screens.</div>
                    </div>
                  </div>
                  
                  <div className="column4">
                    <div className="text i">
                      <i>
                      "Because the project is copyrighted and under strict security measures, there is no preview available online. I apologize for not being able to show it here."
                      </i>
                    </div> 
                  </div>
                </div>
                
              </div> 
            </div>

            <div className="row3">
              <div className="row4">
                <div className="column"> 
                  <img className="" src={logoupwork} />  
                </div>
                <div className="column2">
                  <div className="text">2021 - Apr 2024</div>
                </div>
                <div className="column3">
                  <div className="text2">Full Stack Developer</div>

                  <div className="column4">
                      <div className="text2-sub">NTSC – VnClound New Technology Solutions Software Company</div>
                        <div className="text">
                          Location: T6, 71 Tran Thai Tong, Dich Vong Hau, Cau Giay, Hanoi, Vietnam
                      </div> 
                      <div className="text">
                        Company Size: 70–100 employees
                      </div>

                  </div>
                      
                  <div className="text2-sub">Job Description</div> 
                  <div className="column4">

                    <div className="frame-1">  
                      <img className="" src={bubble} /> 
                      <div className="text">
                      I have worked on numerous projects managing factory systems, such as Toyotavn Phúc Yên, 
                      including web applications for tracking production progress, warehouse management, and location services.
                      </div>
                    </div>
                    <div className="frame-1"> 
                      <img className="" src={bubble} /> 
                      <div className="text">
                      These projects typically involved a core team of 2–3 people.
                      </div>
                    </div>
                    <div className="frame-1"> 
                      <img className="" src={bubble} /> 
                      <div className="text">
                      I developed a mobile app using Flutter v3.10 to manage the system and monitor the progress at each production station.
                      </div>
                    </div> 
                    <div className="frame-1"> 
                      <img className="" src={bubble} /> 
                      <div className="text">
                      I converted several MVC .NET projects to Angular and used SQL Server 2019 as the database.
                      </div>
                    </div>
                    <div className="frame-1"> 
                      <img className="" src={bubble} /> 
                      <div className="text">
                      I designed the main interface screens using Figma and then sliced the HTML accordingly.
                      </div>
                    </div>
                     
                  </div>
                  <div className="text2-sub">Job Description (Continued)</div> 
                  <div className="column4">
                      <div className="frame-1">  
                        <img className="" src={bubble} /> 
                        <div className="text">
                        I have been working with Angular since early 2021.
                        </div>
                      </div>

                      <div className="frame-1">  
                        <img className="" src={bubble} /> 
                        <div className="text">
                        Project Type: Web Application.
                        </div>
                      </div>

                      <div className="frame-1">  
                        <img className="" src={bubble} /> 
                        <div className="text">
                        Each project is handled by a core team of 2–3 members.
                        </div>
                      </div>

                      <div className="frame-1">  
                        <img className="" src={bubble} /> 
                        <div className="text">
                        Position: Fullstack Developer
                        </div>
                      </div>

                      <div className="frame-1">  
                        <img className="" src={bubble} /> 
                        <div className="text">
                        Framework: ASP.NET Zero
                        </div>
                      </div>

                      <div className="frame-1">  
                        <img className="" src={bubble} /> 
                        <div className="text">
                          Proficient in: Both frontend and backend development
                          <br></br>
                          Frontend: Angular 15, Bootstrap, Syncfusion, TypeScript, JavaScript
                          <br></br>
                          Backend: .NET Core, SQL Server 2019
                        </div>
                      </div>
                  </div>


                  <div className="column4">
                    <div className="text i">
                      <i>
                      "Because the project is copyrighted and under strict security measures, there is no preview available online. I apologize for not being able to show it here."
                      </i>
                    </div>
                  </div>
                </div>

                
              </div> 
            </div>


            <div className="row3">
              <div className="row4">
                <div className="column"> 
                  <img className="" src={logoupwork} />  
                </div>
                <div className="column2">
                  <div className="text">2015 - 2021</div>
                </div>
                <div className="column3">
                  <div className="text2">Full Stack Developer</div> 

                  <div className="column4">
                      <div className="text2-sub">NTSC – VnClound New Technology Solutions Software Company</div>
                        <div className="text">
                          Location: T6, 71 Tran Thai Tong, Dich Vong Hau, Cau Giay, Hanoi, Vietnam 
                      </div> 
                      <div className="text">
                        Company Size: 70–100 employees
                      </div> 
                  </div>
                    

                  
                  <div className="column4">
                    <div className="text2-sub">Job Description</div>
                    <div className="text">
                      Develop website applications to manage factory systems for Toyota VN.
                    </div>

                    <div className="text2-sub">Framework</div>
                    <div className="text">
                      .NET MVC, Sql Server 2012-2019
                    </div>

                    <div className="text2-sub">Proficient In</div>  
                    <div className="frame-1">  
                      <img className="" src={bubble} /> 
                      <div className="text">
                      Frontend: C#, jQuery, Bootstrap, JavaScript, HTML/CSS, Ajax, DevExpress, etc.
                      </div>
                    </div>
                    <div className="frame-1">  
                      <img className="" src={bubble} /> 
                      <div className="text">
                      Backend: SQL Server 2012-2019
                      </div>
                    </div>

                    <div className="text2-sub">Products/Projects</div>  
                    <div className="frame-1">  
                      <img className="" src={bubble} /> 
                      <div className="text">
                      Website application for managing the progress of the paint shop
                      </div>
                    </div>
                    <div className="frame-1">  
                      <img className="" src={bubble} /> 
                      <div className="text">
                      Website application for managing the welding shop
                      </div>
                    </div>
                    <div className="frame-1">  
                      <img className="" src={bubble} /> 
                      <div className="text">
                      Website application for managing the spare parts warehouse
                      </div>
                    </div>
                    <div className="frame-1">  
                      <img className="" src={bubble} /> 
                      <div className="text">
                      Website application for managing the unloading process, lot stacking, and dispatching products to various stations
                      </div>
                    </div>
                    <div className="frame-1">  
                      <img className="" src={bubble} /> 
                      <div className="text">
                      And various other projects...
                      </div>
                    </div> 
                  </div>
                </div>
              </div> 
            </div>


            <div className="row3">
              <div className="row4">
                <div className="column"> 
                  <img className="" src={logoupwork} />  
                </div>
                <div className="column2">
                  <div className="text">2010 - 2015</div>
                </div>
                <div className="column3">
                  <div className="text2">Full Stack Developer</div> 
                  <div className="column4">
                    <div className="text2-sub">Tri Nam Technology Company</div>
                    <div className="text">
                    Location: T4-5 96 Nguyen Khanh Toan, Quan Hoa, Cau Giay, Hanoi, Vietnam
                    Let me know if you need any further adjustments!
                      <div className="text i">
                        <i>
                        "It’s been so long; the company may have relocated."
                        </i>
                      </div>
                    </div> 
                    <div className="text">
                      Company Size: 50–70 employees
                    </div>
                  </div>
                  <div className="column4"> 
                    <div className="text2-sub">Job Description</div>
                    <div className="text">
                    Develop websites for e-commerce and news portals using the DotNetNuke framework. Proficient in C#, jQuery, CSS/HTML, Bootstrap, and SQL Server for the database.
                    </div> 

                    <div className="frame-1">  
                      <img className="" src={bubble} /> 
                      <div className="text">
                      The interfaces are sliced from Photoshop design files.
                      </div>
                    </div>
                    
                     
                  </div>
                </div>

                <div className="text i">
                  <i>
                  "It’s been a long time and I didn’t keep them. These were small business projects, and unfortunately, I cannot show them."
                  </i>
                </div>
              </div> 
            </div>
          </div>
        </div>

    </Box>
  );
};

export default Experience;

 
 