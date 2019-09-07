export class Foo {
  constructor(private taco: string) {}

  foo() {
    const out: string = this.taco || 'there';
    return `Hello ${out}`;
  }
}