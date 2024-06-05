import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import ModalBox from "./ModalBox";
import Popup from "./Popup";

const Portfolio = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [modalItem, setModalItem] = useState(null);
  const [video, setVideo] = useState(false);
  const [videoContent, setVideoContent] = useState({ name: "", src: "" });
  const modalRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });
    }, 300);
    return () => {
      if (isotope.current) isotope.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalItem(null);
      }
    };

    if (modalItem) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalItem]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const portfolioItems = [
    {
      id: 1,
      category: "detail",
      title: "ICO & Staking",
      client: "GigaChad",
      img: "img/giga.png",
      date: "March 07, 2024",
      link: "https://gigachad-sand.vercel.app/",
      description: "GigaChad Token is a revolutionary meme coin that embodies strength, resilience, and community power. With features like staking, security mechanisms, snapshot capabilities for voting rights, and a deflationary model, GigaChad aims to dominate the crypto world. The project roadmap includes launching NFTs, developing a GigaChad app wallet, and integrating PlayToEarn games. The GigaChad ecosystem prioritizes innovation and continuous improvement, ensuring robust security and governance. Join the financial revolution where the bold thrive and the community never backs down."
    },
    {
      id: 2,
      category: "detail",
      title: "Dapper NFT Mint and Staking",
      client: "Dapper Dogs",
      img: "img/dapper.png",
      date: "April 12, 2024",
      link: "https://dappers-chi.vercel.app/",
      description: "The Dapper Dogs NFT Collection offers a unique and engaging experience with its distinctive digital assets. This project features exclusive NFT minting and staking opportunities, providing a platform for users to own, trade, and stake their unique digital collectibles. With a focus on community engagement and rewarding participants, Dapper Dogs aims to revolutionize the NFT space with innovative features and user-centric design."
    },
    {
      id: 3,
      category: "detail",
      title: "Decentralized Exchange Swap",
      client: "AlchemySwap",
      img: "img/swap.png",
      date: "May 30, 2024",
      link: "https://alchemy-swap.vercel.app/en/swap",
      description: "AlchemySwap is a decentralized exchange platform that allows users to trade cryptocurrencies directly from their wallets in a secure and user-friendly environment. It offers features such as token swaps, liquidity provision, and yield farming. By integrating cutting-edge technology, AlchemySwap ensures fast and efficient transactions with minimal fees. Users can also benefit from staking and governance opportunities, contributing to the evolution and improvement of the platform."
    },
    {
      id: 4,
      category: "detail",
      title: "Cootie Finance",
      client: "Web3 Ecosystem",
      img: "img/landingpage.png",
      date: "June 15, 2021",
      link: "https://www.cootie.finance/",
      description: "Cootie Finance is a comprehensive Web3 ecosystem designed to integrate decentralized finance (DeFi) applications with user-friendly interfaces. The platform offers a suite of services including decentralized trading, yield farming, staking, and NFT utilities. With a focus on innovation and community engagement, Cootie Finance aims to provide secure and efficient financial solutions for its users, fostering the growth and adoption of decentralized technologies."
    },
    {
      id: 5,
      category: "detail",
      title: "NFT Rankings",
      client: "Raritys",
      img: "img/rankings.png",
      date: "July 20, 2021",
      link: "https://www.cootierankings.xyz/",
      description: "Cootie Rankings is an innovative platform that provides comprehensive metadata scores and rankings for NFTs. Focused on the Lil' Cooties collection, it offers detailed insights and sorting options to help users evaluate and track the performance and rarity of their digital assets. This tool is designed to empower the NFT community with transparent and accessible data, enhancing the overall experience for collectors and traders."
    }
  ];

  const videoItems = [
    {
      id: 6,
      category: "video",
      title: "Cootie Clash",
      img: "img/clash.png",
      link: "https://www.youtube.com/embed/6Ye89MKTDz4?si=ntYx3clC98ghncsT",
      description: "Cootie Clash intro."
    },
    {
      id: 7,
      category: "video",
      title: "Intro Videos",
      img: "img/canary.png",
      link: "https://www.youtube.com/embed/uADMrVaX_U0?si=IC2KqcN_9CA3UjTq",
      description: "Canary punks."
    },
    {
      id: 8,
      category: "video",
      title: "Intro Videos",
      img: "img/intro.png",
      link: "https://www.youtube.com/embed/LCg8MhLInYA?si=r3DCuHVZB5w4xWS4",
      description: "motion grapic logo."
    }
  ];

  const allItems = [...portfolioItems, ...videoItems];

  return (
    <div className="aali_tm_section help" id="portfolio">
      {video && <Popup close={() => setVideo(false)} content={videoContent} />}
      <div className="aali_tm_portfolio wow fadeInUp" data-wow-duration="1s">
        <div className="container">
          <div className="aali_tm_main_title" data-text-align="center" data-color="light">
            <span>Recent Selected works</span>
            <h3>Check my portfolio</h3>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li><a onClick={handleFilterKeyChange("*")} className={filterKey === "*" ? "current" : ""}>All</a></li>
              <li><a onClick={handleFilterKeyChange("video")} className={filterKey === "video" ? "current" : ""}>Videos</a></li>
              <li><a onClick={handleFilterKeyChange("detail")} className={filterKey === "detail" ? "current" : ""}>Details</a></li>
            </ul>
          </div>
          <div className="portfolio_list">
            <ul className="gallery_zoom">
              {allItems.map((item) => (
                <li key={item.id} className={`filter-item ${item.category}`}>
                  <div className="list_inner">
                    <div
                      className="image"
                      style={{ backgroundImage: `url(${item.img})` }}
                    />
                    <div className="overlay" />
                    <div className="details">
                      <span>{item.client}</span>
                      <h3>{item.title}</h3>
                    </div>
                    {item.category === "detail" ? (
                      <a
                        className="aali_tm_full_link portfolio_popup"
                        href="#"
                        onClick={() => setModalItem(item)}
                      />
                    ) : (
                      <a
                        className="aali_tm_full_link popup-video"
                        href="#"
                        onClick={() => {
                          setVideo(true);
                          setVideoContent({ name: item.title, src: item.link });
                        }}
                      />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {modalItem && (
  <div className={`aali_tm_modalbox opened`}>
    <div className="box_inner" ref={modalRef}>
      <div className="popup_details">
        <div className="top_image">
          <img src={modalItem.img} alt={modalItem.title} />
          <div className="main" style={{ backgroundImage: `url(${modalItem.img})` }}></div>
        </div>
        <div className="portfolio_main_title">
          <span>Detail</span>
          <h3>{modalItem.title}</h3>
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>{modalItem.description}</p>
          </div>
          <div className="detailbox">
            <ul>
             
              <li><span className="first">Link</span><span><a href={modalItem.link} target="_blank" rel="noopener noreferrer"> Visit Project</a></span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="close" onClick={() => setModalItem(null)}>
        <a href="#">×</a>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Portfolio;
