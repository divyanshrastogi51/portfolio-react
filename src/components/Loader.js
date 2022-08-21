import React from "react";
import { Audio } from "react-loader-spinner";

function Loader() {
  return (
    <div className="loader1">
      <Audio heigth="100" width="100" ariaLabel="loading" color="#f2711c" />
    </div>
  );
}

export default Loader;
