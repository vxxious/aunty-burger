import burgerMain from "@/assets/burger-main.jpg";
import wings from "@/assets/wings.jpg";
import hotdogs from "@/assets/hotdogs.jpg";
import loadedFries from "@/assets/loaded-fries.jpg";
import miniBurger from "@/assets/mini-burger.jpg";
import platter from "@/assets/platter.jpg";
import burgerFries from "@/assets/burger-fries.jpg";
import heroBurger from "@/assets/hero-burger.jpg";

export const imageMap: Record<string, string> = {
  "burger-main": burgerMain,
  "wings": wings,
  "hotdogs": hotdogs,
  "loaded-fries": loadedFries,
  "mini-burger": miniBurger,
  "platter": platter,
  "burger-fries": burgerFries,
  "hero-burger": heroBurger,
};

export const getImage = (key: string): string => {
  return imageMap[key] || burgerMain;
};
