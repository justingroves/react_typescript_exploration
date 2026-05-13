import { it, expect, describe } from "vitest";
import { timesTwo, order, sum, subtract } from "../function";

it("Multiples by two", () => {
  expect(timesTwo(4)).toBe(8);
});

const menuItems = [
  {
    id: "1",
    name: "Tatted Up Turkey Burger",
    price: 19.5,
  },
  {
    id: "2",
    name: "Lobster Lollipops",
    price: 16.5,
  },
  {
    id: "3",
    name: "Motley Que Pulled Pork Sandwich",
    price: 21.5,
  },
  {
    id: "4",
    name: "Trash Can Nachos",
    price: 19.5,
  },
];

it("Build an order object", () => {
  const results = {
    orderItems: menuItems,
    total: 77,
  };
  expect(order(menuItems)).toEqual(results);
});

describe("Math functions", () => {
  it("Multiples by two", () => {
    expect(timesTwo(4)).toBe(8);
  });
  it("Add two numbers", () => {
    expect(sum(4, 2)).toBe(6);
  });
  it("Subtracts two numbers", () => {
    expect(subtract(4, 2)).toBe(2);
  });
});
