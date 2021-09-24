/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import RadarChart from "./components/RadarChart/index";
import { getMetricValue } from "@gapit/grafana-metric";

interface State {
  values: unknown[][];
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      values: [],
    };

    this.onPanelUpdate = this.onPanelUpdate.bind(this);
  }

  componentDidMount() {
    htmlNode.addEventListener("panelupdate", this.onPanelUpdate);
  }

  componentWillUnmount() {
    htmlNode.removeEventListener("panelupdate", this.onPanelUpdate);
  }

  onPanelUpdate() {
    const values = customProperties.radar.data.map((data) =>
      data.metrics.map((metricName) =>
        getMetricValue(metricName, {
          showcase: customProperties.showcase,
          range: { min: -20, max: 40 },
          decimals: 1,
        })
      )
    );

    this.setState({ values: values });
  }

  render() {
    return <RadarChart values={this.state.values} />;
  }
}

ReactDOM.render(<App />, htmlNode.children[1]);
