import { download } from "../svgImage";

const About = () => {
  return (
    <div className="aali_tm_section" id="about">
      <div className="aali_tm_about">
        <div className="about_inner">
          <div className="left">
            <div className="image">
              <img src="img/thumbs/45-49.jpg" alt="aali image" />
              <div className="main" data-img-url="img/kory1fit.png" />
              <span
                className="square moving_effect"
                data-direction="y"
                data-reverse="yes"
              />
              <span className="border">
                <span
                  className="in moving_effect"
                  data-direction="x"
                  data-reverse="yes"
                />
              </span>
            </div>
          </div>
          <div className="center">
            <div className="title wow fadeInUp" data-wow-duration="1s">
              <span className="small">About Me</span>
              <h3>
                {`I'm`} <span>Kory</span>
              </h3>
              <h3>
               A Web <span>Designer</span>
              </h3>
              <span className="subtitle">Based in Jacksonville,FL</span>
            </div>
            <div
              className="text wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              


            <p>
                Hi there! I'm Kory Ryan, a multifaceted developer and designer with a burning passion for all things tech and creative. My journey spans over two decades, during which I've mastered a diverse set of skills that make me your go-to expert for innovative and impactful projects.
            </p>
            <p>
                As a blockchain development specialist, I excel in Solidity, React, Next.js, WAGMI Ethers, and building both front-end and back-end solutions. My expertise in smart contracts and dApps ensures that I can deliver secure, efficient, and revolutionary blockchain applications tailored to your needs.
            </p>
            <p>
                But that's not all. I'm also a seasoned graphic designer and audio composer, adept at creating stunning visuals and immersive soundscapes. My experience extends to graphic videos and Unreal Engine game development, allowing me to bring a unique, interdisciplinary approach to every project.
            </p>
            <p>
                Whether you're looking to develop a cutting-edge Web3 application, design a captivating user interface, or create an engaging multimedia experience, I'm here to turn your vision into reality. Let's work together to build something extraordinary!
            </p>
            </div>
            <div
              className="aali_tm_button wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <a href="img/cv/1.jpg" download>
                <span>Download CV {download}</span>
              </a>
            </div>
          </div>
          <div className="right">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
