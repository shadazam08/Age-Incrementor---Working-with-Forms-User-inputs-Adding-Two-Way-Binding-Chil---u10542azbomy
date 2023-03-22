import React from "react";

const Child = (props) => {
    const {age, incrementAge} = props;
    const handelClick = () => {
        incrementAge();
    }
    return (<div id="child">
                <p id="text">Today I am {age} Years of Age</p>
                <button id="button" onClick={handelClick}>
                Increment Age
      </button>
            </div>);
}

export default Child;
