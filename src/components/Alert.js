import React from "react";

export default function Alert(props) {
//   const capitalize = (word) => {
//     let msg = word.toLowerCase();
//     return msg.charAt(0).toUpperCase() + msg.slice(1);
//   };
  return (
    <>
      {props.alert && (
        
        <div
          className={`alert alert-${props.alert.type} d-flex align-items-center`}
          role="alert"
        >
          <div>{props.alert.msg}</div>
        </div>
      )}
    </>
    //${props.alert.icon}
  );
}
