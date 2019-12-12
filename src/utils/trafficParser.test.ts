import traffic from "output.json";
import parse from "./trafficParser";

it("parses the traffic", () => {
  const parsed = parse(traffic);
  const first = parsed[0];
  expect(first.name).toBe("Molten Core");
  expect(first.bosses[0].name).toBe("Lucifron");
  expect(first.bosses[0].loot[0].receiver).toBe("Calory");
});
