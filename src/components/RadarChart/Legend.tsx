import React, { Component } from "react";

class Legend extends Component {
  render(): JSX.Element {
    return (
      <g id="Legend">
        <rect
          id="Rectangle 6"
          x="169.5"
          y="656.5"
          width="16"
          height="16"
          fill="#C0E1F2"
          stroke="#2DB6F5"
        />
        <rect
          id="Rectangle 7"
          x="274.5"
          y="656.5"
          width="16"
          height="16"
          fill="#ECD7F1"
          stroke="#E289F2"
        />
        <text
          id="Outside"
          fill="#607D8B"
          fontFamily="Open Sans"
          fontSize="14"
          letterSpacing="0.44px"
        >
          <tspan x="193.227" y="670.431">
            Outside
          </tspan>
        </text>
        <text
          id="Inside"
          fill="#607D8B"
          fontFamily="Open Sans"
          fontSize="14"
          letterSpacing="0.44px"
        >
          <tspan x="300.616" y="670.431">
            Inside
          </tspan>
        </text>
      </g>
    );
  }
}

export default Legend;
