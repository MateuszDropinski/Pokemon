import {css} from 'styled-components';

const sizes = {
    xs:576,
    sm:992,
    md:1200,
    lg:1500
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {});