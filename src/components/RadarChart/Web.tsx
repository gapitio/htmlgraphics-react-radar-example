import React, { Component } from "react";

class Web extends Component<{ color: string }> {
  render(): JSX.Element {
    return (
      <g id="Web">
        <g id="Radar Scale 7">
          <path
            id="Radar Scale"
            d="M290.415 332.394L315 320.555L339.585 332.394L345.657 358.997L328.643 380.331H301.357L284.343 358.997L290.415 332.394Z"
            stroke={this.props.color}
          />
        </g>
        <g id="Radar Scale 7_2">
          <path
            id="Radar Scale_2"
            d="M265.397 312.443L315 288.555L364.603 312.443L376.854 366.118L342.528 409.162H287.472L253.146 366.118L265.397 312.443Z"
            stroke={this.props.color}
          />
        </g>
        <g id="Radar Scale 7_3">
          <path
            id="Radar Scale_3"
            d="M240.378 292.491L315 256.555L389.622 292.491L408.052 373.239L356.412 437.993H273.588L221.948 373.239L240.378 292.491Z"
            stroke={this.props.color}
          />
        </g>
        <g id="Radar Scale 7_4">
          <path
            id="Radar Scale_4"
            d="M215.359 272.539L315 224.555L414.641 272.539L439.25 380.359L370.296 466.824H259.704L190.75 380.359L215.359 272.539Z"
            stroke={this.props.color}
          />
        </g>
        <g id="Radar Scale 7_5">
          <path
            id="Radar Scale_5"
            d="M190.341 252.588L315 192.555L439.659 252.588L470.447 387.48L384.181 495.655H245.819L159.553 387.48L190.341 252.588Z"
            stroke={this.props.color}
          />
        </g>
        <g id="Radar Scale 7_6">
          <path
            id="Radar Scale_6"
            d="M165.322 232.636L315 160.555L464.678 232.636L501.645 394.6L398.065 524.486H231.935L128.355 394.601L165.322 232.636Z"
            stroke={this.props.color}
          />
        </g>
        <g id="Radar Scale 7_7">
          <path
            id="Radar Scale_7"
            d="M140.304 212.684L315 128.555L489.696 212.684L532.843 401.721L411.949 553.317H218.051L97.1572 401.721L140.304 212.684Z"
            stroke={this.props.color}
          />
        </g>
      </g>
    );
  }
}

export default Web;
