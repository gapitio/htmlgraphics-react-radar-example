import React, { Component } from "react";
import { calculatePoint } from "../../utils/calculatePoint";

interface Props {
  color: string;
}

class Dots extends Component<Props> {
  render(): JSX.Element {
    return (
      <g id="Dots">
        {Array(customProperties.radar.points - 1)
          .fill(null)
          .map((_, i) => {
            const { x, y } = calculatePoint(i + 1);
            return (
              <g key={`dot-${i}`}>
                <g>
                  <rect
                    x={x - 6}
                    y={y - 6}
                    width="12"
                    height="12"
                    rx="3"
                    fill="#607D8B"
                    strokeWidth="0.2"
                  />
                  <rect
                    x={x - 5}
                    y={y - 5}
                    width="10"
                    height="10"
                    rx="2"
                    fill={this.props.color}
                  />
                </g>
              </g>
            );
          })}
      </g>
    );
  }
}

export default Dots;
