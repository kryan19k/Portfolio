import { useEffect, useState } from "react";
import {
  camera,
  cameraDark,
  msg,
  pen,
  penDark,
  user,
  userDark,
  web,
  webDark,
} from "../svgImage";
import ModalBox from "./ModalBox";

const Service = ({ dark }) => {
  const [modal, setModal] = useState(0);
  const hidden = (value) => (value === modal ? "" : "service_hidden_details");
  useEffect(() => {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  }, []);
  return (
    <div className="aali_tm_section" id="service">
      <div className="aali_tm_service">
        <div className="container">
          <div className="service_list">
            <ul>
              <li className="simple wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner">
                  <div
                    className="aali_tm_main_title"
                    data-text-align="left"
                    data-color="dark"
                  >
                    <span>What I Do</span>
                    <h3>My Services</h3>
                    <p>
                    I offer high-quality Web3 services to help you innovate
                      and grow your business. My goal is to provide top-notch
                      solutions that meet your needs and exceed your
                      expectations.
                    </p>
                  </div>
                </div>
              </li>
              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? cameraDark : camera}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="Service"
                    />
                  </span>
                  <div className="title">
                    <h3>NFT Minting Dapp</h3>
                    <span className="price">
                      Starts from <span>$149</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                    Create and deploy custom NFT minting dApp and nft smart tcontract tailored to
                      your needs. Enable users to mint their unique tokens with
                      ease and security.{" "}
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(1)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/mint1.png"
                    alt="aali image"
                  />
                </div>
                <div className={hidden(1)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/mint1.png"
                        />
                      </div>
                      <div className="main_title">
                        <h3>NFT Minting Dapp</h3>
                        <span className="price">
                          Starts from <span>$149</span>
                        </span>
                      </div>
                      <div className="descriptions">
                      <p>
                          Create and deploy custom NFT minting dApps tailored to
                          your needs. Enable users to mint their unique tokens
                          with ease and security.
                        </p>
                        <p>
                          Our NFT minting dApps provide a seamless and
                          user-friendly experience, ensuring that your users can
                          mint their NFTs without any hassle.
                        </p>
                        <p>
                          With robust security measures and cutting-edge
                          technology, our NFT minting dApps are designed to
                          protect your assets and provide a reliable minting
                          solution.
                        </p>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? webDark : web}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>NFT or Token Landing Page</h3>
                    <span className="price">
                      Starts from <span>$299</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                    Transform your digital assets with a custom NFT or Token Landing Page
                    designed to captivate and convert.
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(2)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/mint1.png"
                    alt="aali image"
                  />
                </div>
                <div className={hidden(2)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="aali image" />
                        <div
                          className="main"
                          data-img-url="img/landing.png"
                        />
                      </div>
                      <div className="main_title">
                        <h3>NFT Or Token Landing Page</h3>
                        <span className="price">
                          Starts from <span>$299</span>
                        </span>
                      </div>
                      <div className="descriptions">
                      <p>
                      Transform your digital assets with a custom NFT or Token Landing Page
                      designed to captivate and convert. With my expertise in web design, I
                      create visually stunning, highly functional landing pages that showcase
                      your NFTs or tokens in the best possible light.
                    </p>
                    <p>
                      From seamless integration with blockchain technology to user-friendly
                      interfaces, I ensure that every landing page not only looks great but
                      also delivers a smooth and secure experience for your users. Whether
                      you're launching a new NFT collection or promoting a unique token, my
                      landing pages are tailored to meet your specific needs and goals.
                    </p>
                    <p>
                      With a passion for innovation and a commitment to excellence, I'll help
                      you stand out in the competitive world of digital assets. Enhance your
                      online presence and boost engagement with a professional, custom-designed
                      NFT or Token Landing Page.
                    </p>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? penDark : pen}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Staking Dapp</h3>
                    <span className="price">
                      Starts from <span>$499</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                    I will develop a custom staking dApp that allow users to stake
                      their tokens and earn rewards. Enhance your DeFi projects
                      with secure and efficient staking solutions.
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(3)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/2.jpg"
                    alt="aali image"
                  />
                </div>
                <div className={hidden(3)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="aali image" />
                        <div
                          className="main"
                          data-img-url="img/staking.png"
                        />
                      </div>
                      <div className="main_title">
                        <h3>Staking Dapp</h3>
                        <span className="price">
                          Starts from <span>$499</span>
                        </span>
                      </div>
                      <div className="descriptions">
                      <p>
                          i will Develop a custom staking dApp that allow users to stake
                          their tokens or NFTs and earn rewards. Enhance your DeFi
                          projects with secure and efficient staking solutions.
                        </p>
                        <p>
                          Our staking dApps are built with advanced security
                          features to ensure the safety of staked assets while
                          providing a user-friendly interface.
                        </p>
                        <p>
                          With customizable staking parameters, you can tailor
                          the staking experience to meet your specific project
                          requirements and reward structures.
                        </p>
                       
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? userDark : user}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Graphics & Logos</h3>
                    <span className="price">
                      Starts from <span>$79</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                    Create stunning graphics and logos that represent your
                      brand identity. Our design services ensure a professional
                      and unique look for your business.{" "}
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(4)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/logos.png"
                    alt="aali image"
                  />
                </div>
                <div className={hidden(4)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="aali image" />
                        <div
                          className="main"
                          data-img-url="img/logos.png"
                        />
                      </div>
                      <div className="main_title">
                        <h3>Graphics & Logos</h3>
                        <span className="price">
                          Starts from <span>$79</span>
                        </span>
                      </div>
                      <div className="descriptions">
                      <p>
                          Create stunning graphics and logos that represent your
                          brand identity. Our design services ensure a
                          professional and unique look for your business.
                        </p>
                        <p>
                          We work closely with you to understand your vision and
                          deliver designs that capture the essence of your
                          brand.
                        </p>
                        <p>
                          Our graphics and logos are crafted with attention to
                          detail and creativity, making sure your brand stands
                          out in the market.
                        </p>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li
                className="simple text wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="inner_text">
                      <h3>Do You Want Something Different? I can create any kind of custom webpage for you</h3>
                    </div>
                    <div className="aali_tm_button border">
                      <a className="anchor" href="#contact">
                        <span>MSG Me {msg}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <span
          className="square_left moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
        <span
          className="square_right moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Service;
