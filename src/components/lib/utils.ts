import { PRODUCT_SHOWCASE_HEAD } from "@/extensions/constants";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function exploreHandler() {
  const productShowcase = document.getElementById("product-showcase");
  if (productShowcase) {
    const heading = productShowcase.querySelector("h2");
    if (heading) {
      const headingRect = heading.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop + (PRODUCT_SHOWCASE_HEAD - 20);
      const targetPosition = scrollTop + headingRect.top;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    } else {
      productShowcase.scrollIntoView({ behavior: "smooth" });
    }
  }
}
