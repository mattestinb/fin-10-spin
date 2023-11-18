
const { Triangle, Square, Circle } = require("./shapes.js");

// triangle color render test
describe("Triangle test", () => {
  test("a triangle with a pink background should render", () => {
    const shape = new Triangle();
    shape.setColor("pink");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="pink" />'
    );
  });
});

// square color render test
describe("Square test", () => {
  test("a square with an orange background should render", () => {
    const shape = new Square();
    shape.setColor("orange");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="orange" />'
    );
  });
});

// circle color render test
describe("Circle test", () => {
  test("test for a #ff0000(red) background", () => {
    const shape = new Circle();
    shape.setColor("#ff0000");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#ff0000" />'
    );
  });
});