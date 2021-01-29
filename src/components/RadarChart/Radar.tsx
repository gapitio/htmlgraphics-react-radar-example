import React, { Component } from "react";
import { calculatePoint } from "../../utils/calculatePoint";

interface Props {
  colors: { primary: string; secondary: string };
  values: unknown[];
}

class Radar extends Component<Props> {
  calculateLength(value: unknown): number {
    const { maxAllowed, minAllowed, max, min } = customProperties.radar;

    if (value == null) {
      return minAllowed;
    } else {
      const length =
        ((maxAllowed - minAllowed) * (Number(value) - min)) / (max - min) +
        minAllowed;

      return Math.min(maxAllowed, Math.max(minAllowed, length));
    }
  }

  getPath(): string {
    const path = this.props.values
      .map((value, i) => {
        const length = this.calculateLength(value);
        const { x, y } = calculatePoint(i, { length: length });
        return `${x} ${y}`;
      })
      .join(" ");

    return `M${path}Z`;
  }

  render(): JSX.Element {
    if (this.props.values) {
      return (
        <g>
          <path
            d={this.getPath()}
            fill={this.props.colors.primary}
            opacity="0.24"
          />
          <path
            d={this.getPath()}
            stroke={this.props.colors.primary}
            strokeWidth="2"
          />
          <g>
            {this.props.values.map((value, i) => {
              const length = this.calculateLength(value);
              const { x, y } = calculatePoint(i, { length: length });
              return (
                <rect
                  key={`radar-point-${i}`}
                  x={x - 4.5}
                  y={y - 4.5}
                  width="9"
                  height="9"
                  rx="4.5"
                  fill={this.props.colors.primary}
                  stroke={this.props.colors.secondary}
                />
              );
            })}
          </g>
        </g>
      );
    } else {
      return <g></g>;
    }
  }
}

export default Radar;
