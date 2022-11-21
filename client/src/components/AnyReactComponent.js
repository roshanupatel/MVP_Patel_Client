import React from "react";

const AnyReactComponent = (props) => {

  return (
    <div style ={{
      display: "flex", backgroundColor: "powderblue", alignContent: "center", justifyContent: "space-between"
    }}>
      {!props.$hover ?
        (<div style={{
          backgroundColor: "orange", color: "red", flex: 1 }}>{props.descrip}</div>) :
        (<div style={{
          backgroundColor: "powderblue", color: "powerblue" }}>{props.descrip} HOVERING!</div>)}
    </div>
  );
};

export default AnyReactComponent;