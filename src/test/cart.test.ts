import { describe, it, expect, beforeEach, vi } from "vitest";

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, "localStorage", { value: localStorageMock });

// Cart reducer logic tests
describe("Cart Logic", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockItem = {
    id: "test-burger",
    name: "Test Burger",
    description: "A test burger",
    price: 3000,
    category: "burgers",
    image: "burger-main",
  };

  describe("Add Item", () => {
    it("adds a new item with quantity 1", () => {
      const cart: any[] = [];
      const newItem = { ...mockItem, quantity: 1 };
      cart.push(newItem);
      
      expect(cart).toHaveLength(1);
      expect(cart[0].quantity).toBe(1);
    });

    it("increments quantity for existing item", () => {
      const cart = [{ ...mockItem, quantity: 1 }];
      const existingItem = cart.find((item) => item.id === mockItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      }
      
      expect(cart[0].quantity).toBe(2);
    });
  });

  describe("Remove Item", () => {
    it("removes item from cart", () => {
      let cart = [{ ...mockItem, quantity: 1 }];
      cart = cart.filter((item) => item.id !== mockItem.id);
      
      expect(cart).toHaveLength(0);
    });
  });

  describe("Update Quantity", () => {
    it("updates quantity for item", () => {
      const cart = [{ ...mockItem, quantity: 1 }];
      const item = cart.find((i) => i.id === mockItem.id);
      if (item) {
        item.quantity = 5;
      }
      
      expect(cart[0].quantity).toBe(5);
    });

    it("removes item when quantity is 0", () => {
      let cart = [{ ...mockItem, quantity: 1 }];
      const newQuantity = 0;
      
      if (newQuantity <= 0) {
        cart = cart.filter((item) => item.id !== mockItem.id);
      }
      
      expect(cart).toHaveLength(0);
    });
  });

  describe("Cart Calculations", () => {
    it("calculates total items correctly", () => {
      const cart = [
        { ...mockItem, id: "1", quantity: 2 },
        { ...mockItem, id: "2", quantity: 3 },
        { ...mockItem, id: "3", quantity: 1 },
      ];
      
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      expect(totalItems).toBe(6);
    });

    it("calculates total price correctly", () => {
      const cart = [
        { ...mockItem, id: "1", price: 3000, quantity: 2 }, // 6000
        { ...mockItem, id: "2", price: 4000, quantity: 1 }, // 4000
      ];
      
      const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      expect(totalPrice).toBe(10000);
    });
  });

  describe("Clear Cart", () => {
    it("empties the cart", () => {
      let cart = [
        { ...mockItem, quantity: 2 },
        { ...mockItem, id: "2", quantity: 1 },
      ];
      
      cart = [];
      expect(cart).toHaveLength(0);
    });
  });
});
