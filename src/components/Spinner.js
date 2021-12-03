import React from "react";

const Spinner = () => (
  <div className="flex">
    <div className="flex-grow w-16 h-16"></div>
    <div className="flex-shrink w-64 mt-24">
      <div className="flex justify-center">
        <svg
          className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"
          viewBox="0 0 24 24"
        ></svg>
      </div>
    </div>
    <div className="flex-grow w-16 h-16"></div>
  </div>
);

export default Spinner;
