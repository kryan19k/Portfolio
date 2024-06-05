import { useEffect, useRef } from "react";

const Popup = ({ close, content }) => {
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [close]);

  return (
    <div className="aali_tm_modalbox opened" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <div className="box_inner" ref={popupRef} style={{ position: 'relative', margin: 'auto', top: '10%', width: '80%', maxWidth: '800px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
        <div className="close" onClick={close} style={{ fontSize: '36px', position: 'absolute', top: '-20px', right: '-20px', cursor: 'pointer', zIndex: 1000 }}>
          <a href="#">×</a>
        </div>
        <div className="popup_content">
          <h3>{content.name}</h3>
          <iframe
            width="100%"
            height="500"
            src={content.src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={content.name}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Popup;
