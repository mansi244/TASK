import React from "react";
import { connect } from "react-redux";

const DisplayCount = (props) => {
  const createCard = () => {
    return (
      <div
        style={{
          height: "40%",
          width: "20vw",
          backgroundColor: "lightblue",
          boxShadow: "5px 10px gray",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Times New Roman, Times, serif",
            fontSize: "15vh",
          }}
        >
          {props.count}
        </p>
      </div>
    );
  };

  return <React.Fragment>{createCard()}</React.Fragment>;
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps, null)(DisplayCount);
