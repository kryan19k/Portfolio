import { useEffect } from "react";
import { edu, exp } from "../svgImage";
import { jarallaxContent } from "../utilits";

const Resume = () => {
  useEffect(() => {
    jarallaxContent();
  }, []);

  return (
    <div className="aali_tm_section">
      <div className="aali_tm_resume">
        <div className="content">
          <div className="container">
            <div className="resume_in">
              <div
                className="aali_tm_main_title"
                data-text-align="left"
                data-color="dark"
              >
                <span>Know More</span>
                <h3>My Resume</h3>
                <p>
                  I enjoy every step of the design process, from discussion and
                  collaboration to concept and execution.
                </p>
              </div>
              <div className="content_inner">
                <ul>
                  <li className="wow fadeInLeft" data-wow-duration="1s">
                    <h3 className="main_title">
                      <span>Education</span>
                    </h3>
                    <ul className="list">
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Associate of Arts</h3>
                              <span>University of North Jacksonville</span>
                            </div>
                            <div className="right">
                              <span>2015 - 2017</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Studied a variety of subjects to gain a broad foundation in the arts and sciences, preparing for further education in software engineering.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Computer Science</h3>
                              <span>University of North Florida</span>
                            </div>
                            <div className="right">
                              <span>2017 - 2020</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Gained extensive knowledge and practical experience in software development, algorithms, data structures, and system design.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="wow fadeInRight" data-wow-duration="1s">
                    <h3 className="main_title">
                      <span>Experience</span>
                    </h3>
                    <ul className="list">
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Web3 Project Founder</h3>
                              <span>Cootie Finance</span>
                            </div>
                            <div className="right">
                              <span>2021 - Present</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Leading the development and implementation of decentralized finance projects, focusing on innovative solutions in the blockchain space.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Solidity Expert</h3>
                              <span>Karnage LLC</span>
                            </div>
                            <div className="right">
                              <span>2022 - 2024</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Developed and audited smart contracts, ensuring the security and efficiency of blockchain applications.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Developer Freelance</h3>
                              <span>Fiverr</span>
                            </div>
                            <div className="right">
                              <span>2023 - 2024</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Provided freelance development services, delivering high-quality software solutions tailored to client needs across various industries.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="media" data-background-style="video">
          {" "}
          {/* Background Styles: "video" and "image" // Also you can use any youtube, vimeo, and local videos */}
          <div
            className="video jarallax"
            data-speed={0}
            data-jarallax-video="https://vimeo.com/329671050"
          />
          <div
            className="image jarallax"
            data-speed={0}
            data-img-url="img/about/2.jpg"
          />
          <span
            className="square moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
