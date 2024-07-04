import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const currencyFormat = (amount: number, currency: string, options?: Intl.NumberFormatOptions) => new Intl.NumberFormat("en", {
  style: "currency",
  currency,
  ...options
}).format(amount)