import React from "react";

export default (props) => (
  <div>
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  </div>
);
