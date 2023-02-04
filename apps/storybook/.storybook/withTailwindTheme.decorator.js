
import { useEffect } from 'react';

export const DEFAULT_THEME = 'disable-tailwind';

export const withTailwindStatus = (Story, context) => {
  const { tailwindStatus } = context.globals;

  useEffect(() => {
    // const htmlTag = document.documentElement;
    const tag = document.getElementById("tailwind-css-style-link")

    if (tailwindStatus === 'enable-tailwind' && tag === null) {
        document.head.innerHTML += `<link id="tailwind-css-style-link" href="/tailwind.css" rel="stylesheet" />`;
    } else if ((tailwindStatus === DEFAULT_THEME || tailwindStatus === undefined) && tag !== null) {
        tag.remove()
    }
  }, [tailwindStatus]);

  return Story()
};