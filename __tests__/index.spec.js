import { expect, vi } from "vitest";
import { getters, mutations, actions } from "../src/store";

describe("mutations", () => {
  describe("when committing ADD_PRODUCT", () => {
    it("adds the product in data to the cart", () => {
      const state = { cart: [] };
      const data = { id: 1, name: "arroz", price: 20 };

      mutations.ADD_PRODUCT(state, data);

      expect(state.cart).toEqual([{ id: 1, name: "arroz", price: 20 }]);
    });
  });

  describe("when committing REMOVE_PRODUCT", () => {
    it("removes the product in data from cart", () => {
      const state = {
        cart: [
          { id: 1, name: "arroz", price: 20 },
          { id: 2, name: "feijão", price: 15 },
        ],
      };

      mutations.REMOVE_PRODUCT(state, 1);

      expect(state.cart).toEqual([{ id: 2, name: "feijão", price: 15 }]);
    });
  });
});

describe("getters", () => {
  describe("when the products are added to the cart", () => {
    it("show the total price", () => {
      const state = {
        cart: [
          { id: 1, name: "arroz", price: 20 },
          { id: 2, name: "feijão", price: 15 },
        ],
      };

      const result = getters.totalCart(state);

      expect(result).toEqual(35);
    });
  });
});

describe("actions", () => {
  const product = { id: 2, name: "feijão", price: 15 };
  const commit = vi.fn();

  describe("when the ADD_PRODUCT action is activated", () => {
    it("dispatches the mutation ADD_PRODUCT with the value of product", () => {
      actions.ADD_PRODUCT({ commit }, product);

      expect(commit).toHaveBeenCalledWith("ADD_PRODUCT", product);
    });
  });

  describe("when the REMOVE_PRODUCT action is activated", () => {
    it("dispatches the mutation REMOVE_PRODUCT with the value of product", () => {
      actions.REMOVE_PRODUCT({ commit }, product.id);

      //verificar se esse teste é realmente suficiente
      expect(commit).toHaveBeenCalledWith("REMOVE_PRODUCT", product.id);
    });
  });
});
