import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import incrementCount from "../redux/counter/counterAction";

const CounterButton = (props) => {
  return (
    <React.Fragment>
      <Button variant={"primary"} onClick={props.incrementCount}>
        Click Me
      </Button>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: () => dispatch(incrementCount()),
  };
};

export default connect(null, mapDispatchToProps)(CounterButton);
