export function randomIntBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomByte(): number {
  return Math.floor(Math.random() * 256);
}

export function randomColor(...colors: string[]): string {
  if (colors.length > 1) {
    return colors[randomIntBetween(0, colors.length - 1)];
  }
  return `rgb(${randomByte()},${randomByte()},${randomByte()})`;
}
