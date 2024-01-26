import React from "react";
import moment from "moment";
import Timer from "./components/Timer.jsx";
import HamburgerIcon from "../../components/icon/HamburgerIcon";
import CloseIcon from "../../components/icon/CloseIcon";

import "./styles.scss";

const WelcomePage = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const weddingDate = moment("2024-03-08T09:00:00+07:00").utcOffset(7);

  const scrollTo = (className) => {
    const element = document.getElementsByClassName(className)[0];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setShowMenu(false);
  };

  return (
    <div className="welcome-page">
      <div className="content">
        <div className={`header ${showMenu ? "show-menu" : "hidden-menu"}`}>
          <ul className="menu-list">
            <li className="menu-item" onClick={() => scrollTo("welcome-page")}>
              TRANG CHỦ
            </li>
            <li className="menu-item" onClick={() => scrollTo("story-page")}>
              CÂU CHUYỆN
            </li>
            <li className="menu-item" onClick={() => scrollTo("image-slider")}>
              ẢNH CƯỚI
            </li>
            <li
              className="menu-item"
              onClick={() => scrollTo("wedding-detail")}
            >
              HÔN LỄ
            </li>
            <li className="menu-item" onClick={() => scrollTo("map-page")}>
              CHỈ DẪN
            </li>
            <li
              className="menu-item"
              onClick={() => scrollTo("thank-you-wrapper")}
            >
              LỜI CẢM ƠN
            </li>
          </ul>
          <button className="button-hide" onClick={() => setShowMenu(false)}>
            <CloseIcon />
          </button>
        </div>
        {!showMenu && (
          <button className="button-show" onClick={() => setShowMenu(true)}>
            <HamburgerIcon />
          </button>
        )}
        <div className="information-section">
          <h1>Việt Trinh & Vĩnh Phúc</h1>
          <p id="time-and-place">
            {weddingDate.format("HH:mm DD/MM/yyyy")}
            <br />
            Ấp Bình Long, xã Thanh Bình, huyện Chợ Gạo, tỉnh Tiền Giang
          </p>
          <Timer futureMoment={weddingDate} />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
