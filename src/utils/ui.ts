import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Helper to pass to LSP tailwind-language-server classFunctions settings to make it recognize & autocomplete tailwind classes
 * @description IMPORTANT: LSP needs to be configured to recognize tw()
 * settings.tailwindCSS.classFunctions = ["tw"]
 * @see https://github.com/tailwindlabs/tailwindcss-intellisense#tailwindcssclassattributes
 * @usage const className = tw\`bg-red-500`
 */
export function tw(strings: TemplateStringsArray, ...values: unknown[]): string {
  return strings.reduce((result, str, i) => result + str + (values[i] || ''), '');
}
