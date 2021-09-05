import { getPerson } from "lib/getPerson";

describe("getPerson", () => {
  it("should return sum of 2 numbers", () => {
    const result = getPerson("bob", 10);
    expect(result).toEqual({
      name: "bob",
      age: 10,
      description: "bob is 10 years old",
    });
  });
});
