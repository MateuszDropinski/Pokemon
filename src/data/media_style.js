import {css} from 'styled-components';

const sizes = {
    md:1000,
    lg:1200,
    hd:1900
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {});