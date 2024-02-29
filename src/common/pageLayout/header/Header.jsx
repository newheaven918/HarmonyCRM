import React, { useState } from "react";
import { Button, Input } from "antd";
import InlineSVG from "react-inlinesvg";
import PropTypes from "prop-types";
import Table from "../../../components/table/Table";
import Theme from "./theme/Theme";

import searchImg from "../../../assets/icons/search.svg";
import userImg from "../../../assets/icons/user.svg";
import downImg from "../../../assets/icons/down.svg";
import AvatarImg1 from "../../../assets/images/avatar1.png";
import AvatarImg2 from "../../../assets/images/avatar2.png";
import AvatarImg3 from "../../../assets/images/avatar3.png";
import AvatarImg4 from "../../../assets/images/avatar4.png";
import useViewportWidth from "../../../hooks/useViewportWidth";
import { useSelector } from "react-redux";
import originalLogo from "../../../assets/icons/logo-original.svg";
import suggestedLogo from "../../../assets/icons/logo-suggested.svg";
import mondayLogo from "../../../assets/icons/logo-monday.svg";
import dynamicsLogo from "../../../assets/icons/logo-dynamics.svg";

const styles = {
  original: {
    color: "#5FBCFF",
    icon: originalLogo,
  },
  suggested: {
    color: "#70c6dd",
    icon: suggestedLogo,
  },
  monday: {
    color: "#01c776",
    icon: mondayLogo,
  },
  dynamics: {
    color: "#3594dd",
    icon: dynamicsLogo,
  },
};

const columns1 = [
  {
    key: "name",
    dataIndex: "name",
    title: "שם",
    width: "33.3%",
    render: (name, record) => (
      <div className="name">
        <img src={record.icon} />
        <div>{name}</div>
      </div>
    ),
  },
  {
    key: "district",
    dataIndex: "district",
    title: "מחוז",
    width: "33.3%",
  },
  {
    key: "city",
    dataIndex: "city",
    title: "עיר",
    width: "33.3%",
  },
];

const data1 = [
  {
    key: 1,
    name: "שאמייר מלמד",
    district: "צפון",
    city: "חיפה",
    icon: AvatarImg1,
  },
  {
    key: 2,
    name: "ירון שאיוני",
    district: "דרום",
    city: "באר שבע",
    icon: AvatarImg2,
  },
];

const columns2 = [
  {
    key: "name",
    dataIndex: "name",
    title: "שם",
    width: "33.3%",
    render: (name, record) => (
      <div className="name">
        <img src={record.icon} />
        <div>{name}</div>
      </div>
    ),
  },
  {
    key: "district",
    dataIndex: "district",
    title: "מחוז",
    width: "33.3%",
  },
  {
    key: "role",
    dataIndex: "role",
    title: "תפקיד",
    width: "33.3%",
  },
];

const data2 = [
  {
    key: 1,
    name: "חזי נבאשאווילי",
    district: "מרכז",
    role: "מנהל אזור",
    icon: AvatarImg3,
  },
  {
    key: 2,
    name: "שאבי סילברמן",
    district: "צפון",
    role: "רכז",
    icon: AvatarImg4,
  },
];

const columns3 = [
  {
    key: "name",
    dataIndex: "name",
    title: "שם",
    width: "18%",
    render: (name, record) => (
      <div className="name">
        <img src={record.icon} />
        <div>{name}</div>
      </div>
    ),
  },
  {
    key: "district",
    dataIndex: "district",
    title: "מחוז",
    width: "16%",
  },
  {
    key: "city",
    dataIndex: "city",
    title: "עיר",
    width: "16%",
  },
  {
    key: "id",
    dataIndex: "id",
    title: "ת.ז",
    width: "16%",
  },
  {
    key: "email",
    dataIndex: "email",
    title: "דוא”ל",
    width: "18%",
  },
  {
    key: "phone",
    dataIndex: "phone",
    title: "טלפון",
    width: "16%",
  },
];

const data3 = [
  {
    key: 1,
    name: "שאמייר מלמד",
    district: "צפון",
    city: "חיפה",
    id: "509451871",
    email: "shmulik@netvision.net.il",
    phone: "054- 23562842",
    icon: AvatarImg1,
  },
  {
    key: 2,
    name: "ירון שאיוני",
    district: "דרום",
    city: "באר שבע",
    id: "509451871",
    email: "mimo56@yahoo.com",
    phone: "054- 21653632",
    icon: AvatarImg2,
  },
];

const columns4 = [
  {
    key: "name",
    dataIndex: "name",
    title: "שם",
    width: "50%",
  },
  {
    key: "description",
    dataIndex: "description",
    title: "תיאור",
    width: "50%",
  },
];

const data4 = [
  {
    key: 1,
    name: "שאלון מוטיבציה",
    description: "שאלון יכולת חמשת הצירים",
  },
  {
    key: 2,
    name: "שאלון התמדה",
    description: "שאלון יכולת חמשת הצירים",
  },
];

const Header = ({ collapsed, setCollapsed }) => {
  const [showChangeTheme, setShowChangeTheme] = useState(false);
  const [isDropVisible, setDropVisible] = useState("invisible");
  const [isSearchVisible, setSearchVisible] = useState("invisible");
  const [isHover, setHover] = useState(false);
  const viewportWidth = useViewportWidth();
  const theme = useSelector((state) => state.app.theme);

  return (
    <>
      {(isDropVisible !== "invisible" ||
        isSearchVisible !== "invisible" ||
        showChangeTheme) && (
        <div
          className="header-invisible-div"
          onClick={() => {
            setSearchVisible("invisible");
            setDropVisible("invisible");
            setShowChangeTheme(false);
          }}
        ></div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
          borderBottom: "1px solid #bb91ff",
        }}
      >
        {collapsed && (
          <div
            className="logo"
            style={{ visibility: collapsed ? "visible" : "hidden" }}
          >
            <InlineSVG
              src={styles[theme].icon}
              onClick={() => setCollapsed()}
            />
          </div>
        )}
        <div className="header">
          <div
            style={{
              width: "calc(40% - 106px)",
              minWidth: "70px",
              position: "relative",
            }}
          >
            <Button
              className="header-select"
              onClick={() => {
                setDropVisible("visible");
                setSearchVisible("invisible");
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <InlineSVG
                  src={userImg}
                  style={{
                    stroke: isHover && "#0075FF",
                  }}
                />
                {viewportWidth > 1100 && "חיפוש מקבל שירות..."}
              </div>
              <InlineSVG src={downImg} />
            </Button>
            {isDropVisible == "visible" && (
              <div className="header-select-modal">
                <Input
                  className="modal-button"
                  suffix={<InlineSVG src={searchImg} />}
                  placeholder="שא"
                />
                <div className="modal-table">
                  <div className="table">
                    <div
                      className="title"
                      style={{ backgroundColor: "#FFCD4C" }}
                    >
                      מקבל שירות
                    </div>
                    <div className="sm-table">
                      <Table columns={columns1} data={data1} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div style={{ width: "calc(60% - 106px)", position: "relative" }}>
            <Button
              className="header-search"
              style={
                viewportWidth < 480 && {
                  justifyContent: "center",
                  width: "50px",
                  padding: "5px",
                }
              }
              onClick={() => {
                setSearchVisible("visible");
                setDropVisible("invisible");
              }}
            >
              {viewportWidth > 480 && (
                <div className="header-search-text">
                  {viewportWidth > 560 && "חיפוש כללי..."}
                </div>
              )}
              <InlineSVG src={searchImg} />
            </Button>
            {isSearchVisible == "visible" && (
              <div className="header-search-modal">
                <Input
                  className="modal-button"
                  suffix={<InlineSVG src={searchImg} />}
                  placeholder="שא"
                />
                <div className="modal-table">
                  <div className="table">
                    <div
                      className="title"
                      style={{ backgroundColor: "#BBE3FF" }}
                    >
                      עובד
                    </div>
                    <div className="sm-table">
                      <Table columns={columns2} data={data2} />
                    </div>
                  </div>
                  <div className="table">
                    <div
                      className="title"
                      style={{ backgroundColor: "#FFCD4C" }}
                    >
                      מקבל שירות
                    </div>
                    <div className="sm-table">
                      <Table columns={columns3} data={data3} />
                    </div>
                  </div>
                  <div className="table">
                    <div
                      className="title"
                      style={{ backgroundColor: "#ADE055" }}
                    >
                      שאלון
                    </div>
                    <div className="sm-table">
                      <Table columns={columns4} data={data4} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Theme
            showChangeTheme={showChangeTheme}
            setShowChangeTheme={setShowChangeTheme}
          />
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};

export default Header;
