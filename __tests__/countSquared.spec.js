import { expect } from "vitest";
import { getters } from "../src/store/modules/counter/modules/countSquared";

describe("when countNumber is equal the 2", () => {
  it("getter count squared with 4", () => {
    const rootState = { countNumber: 2 };

    const result = getters.function(null, null, rootState);

    expect(result).toEqual(4);
  });
});
