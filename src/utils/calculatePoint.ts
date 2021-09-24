function calculatePoint(
  pointNr: number,
  {
    length = customProperties.radar.length,
    points = customProperties.radar.points,
    center = customProperties.radar.center,
  } = {}
): { x: number; y: number } {
  const point = pointNr === 0 ? 0 : 7 - pointNr;
  return {
    x: -Math.sin((360 / points) * point * (Math.PI / 180)) * length + center.x,
    y: -Math.cos((360 / points) * point * (Math.PI / 180)) * length + center.y,
  };
}

export { calculatePoint };
