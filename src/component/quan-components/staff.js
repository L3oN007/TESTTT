import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./staff.css";

function Staff() {
  const [notificationList, setNotificationList] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(
        "https://65e4119b3070132b3b242651.mockapi.io/api/InteriorDesignArticle/IDACustomerSubmit"
      );
      setNotificationList(response.data);
      console.log('setNotificationList',response.data[0].Id);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <h1>Staff Dashboard</h1>
      <div>
        {notificationList.map((notification) => (
          <div key={notification.id} className="notification">
            <h3>Thông báo mới:</h3>
            <p>
              <strong>Id:</strong> {notification.Id}
            </p>
            <p>
              <strong>Tên khách hàng:</strong> {notification.customerName}
            </p>
            <p>
              <strong>Địa chỉ dự án:</strong> {notification.projectAddress}
            </p>
            <Link to={`/Báo_Giá`}>
              <button>Chi tiết</button>
            </Link>
          </div>
        ))}
      </div>
      <button className="scrollToTopBtn" onClick={scrollToTop}>
        <span className="arrow-up"></span>
      </button>
    </div>
  );
}

export default Staff;
