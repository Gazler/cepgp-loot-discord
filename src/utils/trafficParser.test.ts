import traffic from "output.json";
import parse from "./trafficParser";

it("parses the traffic", () => {
  const parsed = parse(traffic);
  const last = parsed[parsed.length - 1];
  expect(last.name).toBe("Molten Core");
  expect(last.bosses[0].name).toBe("Lucifron");
  expect(last.bosses[0].loot[0].receiver).toBe("Calory");
});
