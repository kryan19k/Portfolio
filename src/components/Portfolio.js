import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import {
  fb,
  insta,
  maximize,
  soundcloud,
  text,
  twitter,
  vimeo,
  youtube,
} from "../svgImage";
import { aTagClick, dataImage } from "../utilits";
import ModalBox from "./ModalBox";
import Popup from "./Popup";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });
    }, 300);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    dataImage();
    aTagClick();
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  // popup
  const [video, setVideo] = useState(false);
  const [videoContent, setVideoContent] = useState({ name: "", src: "" });
  const showPopup = (name, src) => {
    setVideo(true);
    setVideoContent({ name, src });
  };
  // Modal Box
  const [modal, setModal] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      category: "detail",
      title: "ICO & Staking",
      client: "GigaChad",
      img: "img/mint2.png",
      date: "March 07, 2021",
    },
    {
      id: 2,
      category: "detail",
      title: "NFT Mint and Staking",
      client: "Dapper Dogs",
      img: "img/dapper.png",
      date: "April 12, 2021",
    },
    {
      id: 3,
      category: "detail",
      title: "Smart Headphone",
      client: "Soundcloud",
      img: "img/staking.png",
      date: "May 30, 2021",
    },
    {
      id: 4,
      category: "detail",
      title: "Hippie Sabotage",
      client: "Hippie",
      img: "img/landing.png",
      date: "June 15, 2021",
    },
    {
      id: 5,
      category: "detail",
      title: "Mockup Camera",
      client: "Mockup",
      img: "img/logos.png",
    
      date: "July 20, 2021",
    },
  ];

  return (
    <div className="aali_tm_section help" id="portfolio" style={{ marginTop: '100px', paddingTop: '50px' }}>
    {video && <Popup close={setVideo} content={videoContent} />}
    <div className="aali_tm_portfolio wow fadeInUp" data-wow-duration="1s">
      <div className="container">
        <div
          className="aali_tm_main_title"
          data-text-align="center"
          data-color="light"
        >
          <span>Selected works</span>
          <h3>Check my portfolio</h3>
        </div>
        <div className="portfolio_filter">
            <ul>
              <li>
                <a onClick={handleFilterKeyChange("*")} className="current">
                  All
                </a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("video")}>Videos</a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("detail")}>Details</a>
              </li>
            </ul>
          </div>
          <div className="portfolio_list">
            <ul className="gallery_zoom">
              {portfolioItems.map((item) => (
                <li
                  key={item.id}
                  className={`filter-item ${item.category}`}
                >
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="aali image" />
                      <div className="main" data-img-url={item.img} />
                    </div>
                    <div className="overlay" />
                    <div className="details">
                      <span>{item.client}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <a
                      className="aali_tm_full_link portfolio_popup"
                      href="#"
                      onClick={() => setModal(item.id)}
                    />
                    <div className={modal === item.id ? "" : "hidden_content"}>
                      <ModalBox close={setModal}>
                        <div className="popup_details">
                          <div className="top_image">
                            <img src="img/thumbs/4-2.jpg" alt="" />
                            <div className="main" data-img-url={item.img}></div>
                          </div>
                          <div className="portfolio_main_title">
                            <span>Detail</span>
                            <h3>{item.title}</h3>
                            <div></div>
                          </div>
                          <div className="main_details">
                            <div className="textbox">
                              <p>
                                We live in a world where we need to move quickly
                                and iterate on our ideas as flexibly as possible.
                                Building mockups strikes the ideal balance ease of
                                modification.
                              </p>
                              <p>
                                Mockups are useful both for the creative phase of
                                the project - for instance when {`you're`} trying
                                to figure out your user flows or the proper visual
                                hierarchy - and the production phase when they
                                will represent the target product.
                              </p>
                            </div>
                            <div className="detailbox">
                              <ul>
                                <li>
                                  <span className="first">Client</span>
                                  <span>{item.client}</span>
                                </li>
                                <li>
                                  <span className="first">Category</span>
                                  <span>
                                    <a href="#">Detail</a>
                                  </span>
                                </li>
                                <li>
                                  <span className="first">Date</span>
                                  <span>{item.date}</span>
                                </li>
                                <li>
                                  <span className="first">Share</span>
                                  <ul className="share">
                                    <li>
                                      <a href="#">{fb}</a>
                                    </li>
                                    <li>
                                      <a href="#">{twitter}</a>
                                    </li>
                                    <li>
                                      <a href="#">{insta}</a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="additional_images">
                            <ul>
                              <li>
                                <div className="list_inner">
                                  <div className="my_image">
                                    <img
                                      src="img/thumbs/4-2.jpg"
                                      alt="aali image"
                                    />
                                    <div
                                      className="main"
                                      data-img-url={item.img}
                                    />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </ModalBox>
                    </div>
                  </div>
                </li>
              ))}
              {/* Add a few example video items */}
              <li className="filter-item video">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div className="main" data-img-url="img/video1.png" />
                  </div>
                  <div className="overlay" />
                  <div className="details">
                    <span>Example Video</span>
                    <h3>Video Title</h3>
                  </div>
                  <a
                    className="aali_tm_full_link popup-youtube"
                    href="#"
                    onClick={() => showPopup("youtube", "7e90gBu4pas")}
                  />
                </div>
              </li>
              <li className="filter-item video">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div className="main" data-img-url="img/video2.png" />
                  </div>
                  <div className="overlay" />
                  <div className="details">
                    <span>Example Video</span>
                    <h3>Video Title 2</h3>
                  </div>
                  <a
                    className="aali_tm_full_link popup-youtube"
                    href="#"
                    onClick={() => showPopup("youtube", "7e90gBu4pas")}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
