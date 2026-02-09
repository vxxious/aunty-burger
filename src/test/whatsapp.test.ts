import { describe, it, expect } from "vitest";
import { formatPrice, buildWhatsAppMessage, buildWhatsAppUrl } from "@/utils/whatsapp";
import type { CartItem } from "@/context/CartContext";

const mockCartItems: CartItem[] = [
  {
    id: "regular-cheese-burger",
    name: "Regular Cheese Burger",
    description: "Classic burger with melted cheese, fresh toppings and signature sauce",
    price: 4000,
    category: "burgers",
    quantity: 2,
  },
  {
    id: "wings-5pcs",
    name: "Chicken Wings (Pack of 5)",
    description: "Five pieces of signature glazed chicken wings",
    price: 3000,
    category: "wings",
    quantity: 1,
  },
];

describe("formatPrice", () => {
  it("formats price in Nigerian Naira", () => {
    expect(formatPrice(1500)).toContain("1,500");
  });

  it("handles zero price", () => {
    expect(formatPrice(0)).toContain("0");
  });

  it("formats large prices correctly", () => {
    expect(formatPrice(17000)).toContain("17,000");
  });
});

describe("buildWhatsAppMessage", () => {
  it("builds a message with all items", () => {
    const total = 11000; // (4000 * 2) + (3000 * 1)
    const message = buildWhatsAppMessage(mockCartItems, total);

    expect(message).toContain("Order from Aunty Burgers");
    expect(message).toContain("Regular Cheese Burger x2");
    expect(message).toContain("Chicken Wings (Pack of 5) x1");
    expect(message).toContain("8,000"); // 4000 * 2
    expect(message).toContain("3,000"); // 3000 * 1
    expect(message).toContain("11,000"); // total
  });

  it("includes customer detail placeholders", () => {
    const message = buildWhatsAppMessage(mockCartItems, 11000);

    expect(message).toContain("Name:");
    expect(message).toContain("Phone:");
    expect(message).toContain("Address:");
    expect(message).toContain("Payment Option");
    expect(message).toContain("Notes");
  });

  it("handles empty cart", () => {
    const message = buildWhatsAppMessage([], 0);

    expect(message).toContain("Order from Aunty Burgers");
    expect(message).toContain("Total:");
  });
});

describe("buildWhatsAppUrl", () => {
  it("builds a valid WhatsApp URL", () => {
    const url = buildWhatsAppUrl(mockCartItems, 11000);

    expect(url).toContain("https://wa.me/");
    expect(url).toContain("?text=");
  });

  it("URL encodes the message", () => {
    const url = buildWhatsAppUrl(mockCartItems, 11000);

    // URL should be encoded (no raw spaces, newlines, etc.)
    expect(url).not.toContain("\n");
    expect(url).toContain("%0A"); // encoded newline
  });

  it("includes the business number", () => {
    const url = buildWhatsAppUrl(mockCartItems, 11000);

    expect(url).toContain("2349124502743");
  });
});
