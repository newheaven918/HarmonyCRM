import React, { useState } from "react";
import PropTypes from "prop-types";
import { DatePicker as AntdDatePicker } from "antd";
import InlineSVG from "react-inlinesvg";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import he_IL from "antd/locale/he_IL";
import dayjs from "dayjs";
import "dayjs/locale/he";

dayjs.locale("he");

import planImg from "../../../assets/icons/master/calendar.svg";
import useViewportWidth from "../../../hooks/useViewportWidth";

const DatePicker = ({ pl, pr, py }) => {
  const [isHover, setHover] = useState(false);
  const direction = useSelector((state) => state.app.direction);
  const viewPortWidth = useViewportWidth();
  const toggleCollapse = useSelector((state) => state.app.toggleCollapsed);

  return (
    <div className="picker" style={{ position: "relative" }}>
      <ConfigProvider direction={direction} locale={he_IL}>
        <AntdDatePicker
          getPopupContainer={(trigger) => trigger.parentNode}
          style={{
            paddingLeft: `${pl}px`,
            paddingRight: `${pr}px`,
            paddingTop: `${py}px`,
            paddingBottom: `${py}px`,
            caretColor:
              viewPortWidth < 1236 && !toggleCollapse ? "transparent" : "black",
          }}
          className="picker-main"
          placeholder="23/12/2023"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          suffixIcon={
            <InlineSVG
              src={planImg}
              className={`${isHover && "stroke-[#0075FF]"}`}
            />
          }
        />
      </ConfigProvider>
    </div>
  );
};

DatePicker.propTypes = {
  pl: PropTypes.number,
  pr: PropTypes.number,
  py: PropTypes.number,
};

DatePicker.defaultProps = {
  pl: 10,
  pr: 15,
  py: 10,
};

export default DatePicker;
