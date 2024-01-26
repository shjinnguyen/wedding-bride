import React from "react";

import "./styles.scss";

const WeddingInfoDetailPage = () => {
  return (
    <div className="wedding-detail">
      <div className="envolop">
        <div className="title">LỄ VU QUY</div>
        <div className="time-and-place">
          <div className="time-block">
            <h3>Thời gian</h3>
            <p>09:00 08/03/2024</p>
          </div>
          <div className="place-block">
            <h3>Địa điểm</h3>
            <p>Ấp Bình Long, xã Thanh Bình, huyện Chợ Gạo, tỉnh Tiền Giang</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInfoDetailPage;
