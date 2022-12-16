import {
  getters,
  mutations,
  actions,
} from "../src/store/modules/counter/counter";
import { beforeEach, expect, vi } from "vitest";

describe("counter", () => {
  describe("getters", () => {
    describe("when getter countSquared has value 2", () => {
      it("show the count squared with value 2", () => {
        const countSquaredGetter = { "countSquared/function": 2 };

        const result = getters.showCountSquared(null, countSquaredGetter);

        expect(result).toEqual(2);
      });
    });
  });

  describe("mutations", () => {
    describe("when committing INCREASE_COUNTER", () => {
      it("sums a randomNumber to the counterNumber", () => {
        const state = { countNumber: 0 };
        const randomNumber = 5;

        mutations.INCREASE_COUNTER(state, randomNumber);

        expect(state.countNumber).toEqual(5);
      });
    });

    describe("when committing DECREASE_COUNTER", () => {
      it("decreases a randomNumber from counterNumber", () => {
        const state = { countNumber: 10 };
        const randomNumber = 5;

        mutations.DECREASE_COUNTER(state, randomNumber);

        expect(state.countNumber).toEqual(5);
      });
    });
  });

  describe("actions", () => {
    beforeEach(() => vi.clearAllMocks);

    vi.mock("axios", () => ({
      default: {
        get: () => ({ data: { randomNumber: 5 } }),
      },
    }));

    const commit = vi.fn();

    describe("when the INCREASE_COUNTER action is activated", () => {
      it("dispatches the mutation INCREASE_COUNTER with the value of API", async () => {
        await actions.INCREASE_COUNTER({ commit });

        expect(commit).toBeCalledTimes(1);
        expect(commit).toHaveBeenCalledWith("INCREASE_COUNTER", {
          randomNumber: 5,
        });
      });
    });

    describe("when the DECREASE_COUNTER action is activated", () => {
      it("dispatches the mutation DECREASE_COUNTER with the value of API", async () => {
        await actions.DECREASE_COUNTER({ commit });

        expect(commit).toBeCalledTimes(1);
        expect(commit).toHaveBeenCalledWith("DECREASE_COUNTER", {
          randomNumber: 5,
        });
      });
    });
  });
});

describe("color code", () => {
  describe("when the input is changed for value red", () => {
    it("change colorCode for this value", () => {
      const state = { colorCode: "blue" };
      const newValue = "red";

      mutations.SET_COLOR_CODE(state, newValue);

      expect(state.colorCode).toEqual(newValue);
    });
  });
});
