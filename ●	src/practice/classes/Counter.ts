
export class Counter {
  value: number;

  constructor() {
    this.value = 0;
  }

  increment(): void {
    this.value += 1;
  }

  decrement(): void {
    this.value -= 1;
  }

  reset(): void {
    this.value = 0;
  }
}
