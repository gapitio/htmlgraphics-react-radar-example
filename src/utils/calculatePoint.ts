function calculatePoint(
  pointNr: number,
  {
    length = customProperties.radar.length,
    points = customProperties.radar.points,
    center = customProperties.radar.center,
  } = {}
): { x: number; y: number } {
  return {
    x:
      -Math.sin((360 / points) * pointNr * (Math.PI / 180)) * length + center.x,
    y:
      -Math.cos((360 / points) * pointNr * (Math.PI / 180)) * length + center.y,
  };
}

export { calculatePoint };
