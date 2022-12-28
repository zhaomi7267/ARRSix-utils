export function random(min: number, max: number): number {
  console.log(111)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
