import React from "react";

export const Like = (props) => {
  return (
    <i
      onClick={props.onClick}
      className={
        props.liked === true
          ? "fa fa-heart cursor-pointer"
          : "fa fa-heart-o cursor-pointer"
      }
    ></i>
  );
};
