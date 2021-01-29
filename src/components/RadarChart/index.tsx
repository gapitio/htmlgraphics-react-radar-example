import React, { Component } from "react";
import Caption from "./Caption";
import Dots from "./Dots";
import Legend from "./Legend";
import Numbers from "./Numbers";
import Radar from "./Radar";
import Web from "./Web";

interface Props {
  values: unknown[][];
}

// Template used: https://www.figma.com/file/EnRso0NMf4hwxQSoy0QLDi/Figma-Charts-UI-kit---Radar-template-(Community)?node-id=1%3A6033
class RadarChart extends Component<Props> {
  colorTheme = {
    light: {
      text: "#607D8B",
      web: "#CFD8DC",
      numbers: {
        text: "#263238",
        background: "#fff",
      },
      dots: "#fff",
    },
    dark: {
      text: "#94A3B3",
      web: "#607080",
      numbers: {
        text: "#fff",
        background: "#020203",
      },
      dots: "#020203",
    },
  };

  render(): JSX.Element {
    const colors = theme.isDark ? this.colorTheme.dark : this.colorTheme.light;
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 651 677"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Rays"
          d="M140 212.5L315 351.5M315 351.5V128.5M315 351.5L490 212.5M315 351.5L533 402M315 351.5L412 553.5M315 351.5L218 553M315 351.5L97 402"
          stroke={colors.web}
        />
        <Web color={colors.web}></Web>
        <Numbers colors={colors.numbers}></Numbers>
        <Dots color={colors.dots}></Dots>
        <Radar
          values={this.props.values[0]}
          colors={{
            primary: "#E289F2",
            secondary: colors.numbers.background,
          }}
        ></Radar>
        <Radar
          values={this.props.values[1]}
          colors={{
            primary: "#2DB6F5",
            secondary: colors.numbers.background,
          }}
        ></Radar>
        <Caption color={colors.text}></Caption>
        <Legend></Legend>
        <text
          id="Temperature"
          fill={colors.text}
          fontFamily="Open Sans"
          fontSize="24"
          letterSpacing="0.44px"
        >
          <tspan x="15" y="21.3105">
            Temperature &#xb0;C
          </tspan>
        </text>
      </svg>
    );
  }
}

export default RadarChart;
