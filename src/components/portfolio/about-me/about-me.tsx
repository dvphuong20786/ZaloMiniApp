import { useAtomValue } from "jotai";
import React from "react";
import { Box, } from "zmp-ui";
import "./about-me.scss"; 
import { userState } from "@/state";
import mework from "/src/assets/images/me-work.png";

type PropsAboutMe  = { 
  cssClass?: string;
}

const AboutMe  : React.FunctionComponent<PropsAboutMe> = ({ cssClass = "about-me" }) => {
 
  return (
    <Box flex>
     <div className={`about ${cssClass}`}>
      <div className="container">
        <div className="div">
          <div className="row">
            <div className="tag-instance" >
              <div className="tag-text">About me</div>
            </div>
          </div>
        </div>

        <div className="row-2">
          <div className="column">
            <div className="pic-container">
              <div className="overlap-group">
                <div className="background" />
                <img src={mework} className="pic"></img> 
              </div>
            </div>
          </div>

          <div className="column-2">
            <p className="text">Curious about me? Here you have it:</p>

            <div className="div">
              <p className="p">
                <span className="text-wrapper">I&#39;m a passionate, </span>

                <a
                  href="https://www.figma.com/@shahsagarm"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="span">self-proclaimed designer</span>
                </a>

                <span className="text-wrapper">
                  {" "}
                  who specializes in full stack development (.Net Core & Angular.js). I am very enthusiastic about bringing the technical
                  and visual aspects of digital products to life. User
                  experience, pixel perfect design, and writing clear, readable,
                  highly performant code matters to me.
                </span>
              </p>

              <p className="text-2">
                I began my journey as a web developer in 2015, and since then,
                I&#39;ve continued to grow and evolve as a developer, taking on
                new challenges and learning the latest technologies along the
                way. Now, in my early thirties, 7 years after starting my web
                development journey, I&#39;m building cutting-edge web
                applications using modern technologies such as Figma, Angular.js,
                TypeScript, React.js, .Net Core, Sql Server and much more.
              </p>

              <p className="text-2">
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>

              <p className="text-3">
                <span className="text-wrapper">
                  When I&#39;m not in full-on developer mode, you can find me
                  hovering around on twitter or on vietnam hacker, witnessing the
                  journey of early startups or enjoying some free time. You can
                  follow me on{" "}
                </span>

                <a
                  href="https://twitter.com/shahsagarm"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="span">Twitter</span>
                </a>

                <span className="text-wrapper">
                  {" "}
                  where I share tech-related bites and build in public, or you
                  can follow me on{" "}
                </span>

                <a
                  href="https://github.com/shahsagarm"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="span">GitHub</span>
                </a>

                <span className="text-wrapper">.</span>
              </p>

              <p className="text-4">Finally, some quick bits about me.</p>

              <div className="checklist">
                <div className="column-3">
                  <div className="text-5">B.E. in Computer Engineering</div>

                  <div className="text-2">Full time freelancer</div>
                </div>

                <div className="column-3">
                  <div className="text-5">Avid learner</div>

                  <div className="text-2">Aspiring indie hacker</div>
                </div>
              </div>

              <p className="text-2">
                One last thing, I&#39;m available for freelance work, so feel
                free to reach out and say hello! I promise I don&#39;t bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Box>
  );
};

export default AboutMe;

 
 