import React, { Component } from "react";

class Caption extends Component<{ color: string }> {
  render(): JSX.Element {
    return (
      <g id="Caption">
        <text
          id="Monday"
          fill={this.props.color}
          fontFamily="Open Sans"
          fontSize="16"
          letterSpacing="0.44px"
        >
          <tspan x="285" y="103.207">
            Monday
          </tspan>
        </text>
        <text
          id="Tuesday"
          fill={this.props.color}
          fontFamily="Open Sans"
          fontSize="16"
          letterSpacing="0.44px"
        >
          <tspan x="490" y="185.207">
            Tuesday
          </tspan>
        </text>
        <text
          id="Wednesday"
          fill={this.props.color}
          fontFamily="Open Sans"
          fontSize="16"
          letterSpacing="0.44px"
        >
          <tspan x="560" y="407.207">
            Wednesday
          </tspan>
        </text>
        <text
          id="Saturday"
          fill={this.props.color}
          fontFamily="Open Sans"
          fontSize="16"
          letterSpacing="0.44px"
        >
          <tspan x="-0.00437164" y="407.207">
            Saturday
          </tspan>
        </text>
        <text
          id="Saturday_2"
          fill={this.props.color}
          fontFamily="Open Sans"
          fontSize="16"
          letterSpacing="0.44px"
        >
          <tspan x="82.1413" y="185.207">
            Sunday
          </tspan>
        </text>
        <text
          id="Thursday"
          fill={this.props.color}
          fontFamily="Open Sans"
          fontSize="16"
          letterSpacing="0.44px"
        >
          <tspan x="410" y="592.207">
            Thursday
          </tspan>
        </text>
        <text
          id="Friday"
          fill={this.props.color}
          fontFamily="Open Sans"
          fontSize="16"
          letterSpacing="0.44px"
        >
          <tspan x="169.735" y="592.207">
            Friday
          </tspan>
        </text>
      </g>
    );
  }
}

export default Caption;
