import createSeries from "./create-series";

function randomValue({ min = 0, max = 1 }): number {
  return Math.random() * (max - min) + min;
}

function updateData(): void {
  window.data = {
    state: LoadingState.Done,
    series: [
      createSeries("inside-monday", randomValue({ min: -30, max: 40 })),
      createSeries("inside-tuesday", randomValue({ min: -30, max: 40 })),
      createSeries("inside-wednesday", randomValue({ min: -30, max: 40 })),
      createSeries("inside-thursday", randomValue({ min: -30, max: 40 })),
      createSeries("inside-friday", randomValue({ min: -30, max: 40 })),
      createSeries("inside-saturday", randomValue({ min: -30, max: 40 })),
      createSeries("inside-sunday", randomValue({ min: -30, max: 40 })),
      createSeries("outside-monday", randomValue({ min: -30, max: 40 })),
      createSeries("outside-tuesday", randomValue({ min: -30, max: 40 })),
      createSeries("outside-wednesday", randomValue({ min: -30, max: 40 })),
      createSeries("outside-thursday", randomValue({ min: -30, max: 40 })),
      createSeries("outside-friday", randomValue({ min: -30, max: 40 })),
      createSeries("outside-saturday", randomValue({ min: -30, max: 40 })),
      createSeries("outside-sunday", randomValue({ min: -30, max: 40 })),
    ],
  };
}

export { updateData };
