import type { CartItem } from "@/context/CartContext";
import { businessInfo } from "@/data/menuData";

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  notes?: string;
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const buildWhatsAppMessage = (
  items: CartItem[],
  total: number
): string => {
  const lines = items.map(
    (item, index) =>
      `${index + 1}. ${item.name} x${item.quantity} - ${formatPrice(
        item.price * item.quantity
      )}`
  );

  const message = [
    "*Order from Aunty Burgers*",
    "",
    "*Order Details:*",
    ...lines,
    "",
    `*Total: ${formatPrice(total)}*`,
    "",
    "*Please fill in your details:*",
    "Name: ",
    "Phone: ",
    "Address: ",
    "",
    "*Payment Option:*",
    "[ ] Cash on Delivery",
    "[ ] Card on Delivery",
    "[ ] Bank Transfer",
    "",
    "*Additional Notes:*",
    "",
  ].join("\n");

  return message;
};

export const buildWhatsAppMessageWithDetails = (
  items: CartItem[],
  total: number,
  customer: CustomerDetails
): string => {
  const itemLines = items.map(
    (item) => `${item.name} x${item.quantity}`
  );

  const message = [
    "*Order for Aunty Burger*",
    "",
    "*Order Summary*",
    ...itemLines,
    "",
    `*Total: ${formatPrice(total)}*`,
    "",
    "*Customer Details*",
    `Name: ${customer.name}`,
    `Phone: ${customer.phone}`,
    `Delivery Address: ${customer.address}`,
    "",
    "*Payment*",
    "Please send bank account details for transfer",
    "",
    customer.notes ? `*Additional Notes*\n${customer.notes}` : "",
  ].filter(Boolean).join("\n");

  return message;
};

export const buildWhatsAppUrl = (items: CartItem[], total: number): string => {
  const message = buildWhatsAppMessage(items, total);
  return `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
};

export const buildWhatsAppUrlWithDetails = (
  items: CartItem[],
  total: number,
  customer: CustomerDetails
): string => {
  const message = buildWhatsAppMessageWithDetails(items, total, customer);
  return `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
};

export const openWhatsAppOrder = (items: CartItem[], total: number): void => {
  const url = buildWhatsAppUrl(items, total);
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
    window.location.href = url;
  }
};
