import React from "react";
import PropTypes from "prop-types";
import { Input as AntdInput } from "antd";

const Input = ({ placeholder }) => {
  return (
    <div className="input">
      <AntdInput
        allowClear
        type="text"
        placeholder={placeholder}
        className="input-main"
        style={{ paddingBottom: "0px", zIndex: "0", backgroundColor: "red" }}
        size="middle"
      />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: "הקלד...",
};

export default Input;
