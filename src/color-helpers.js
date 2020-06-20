import { hex, rgb } from 'color-convert';

/**
 * Determine if a string is a hex color
 * @param {string} color - hex representation of a color
 * @returns {boolean}
 */
const isHexColor = color => /^#?(?:[a-f0-9]{3}){1,2}$/i.test(color);

/**
 * Take a color and add transparency to it
 * @param {string} color - color to convert
 * @param {number} alpha - transparency amount for the color
 * @returns {string} css `rgba()` string
 */
const rgba = (color, alpha = 1) => {
    const rgb = isHexColor(color) ? hex.rgb(color) : [color];
    return `rgba(${[rgb, alpha]})`;
};

/**
 *
 * @param {string} color color that needs to be adjusted
 * @param {Object} [options] - options to adjust the color
 * @param {number} [options.alpha=1] - add transparency to a color, 0-1
 * @param {number} [options.lightness=0] - percentage to lighten a color, negative numbers will darken the color
 */
const colorAdjust = (color, { alpha = 1, lightness = 0 } = {}) => {
    if (typeof color === 'undefined') {
        return false;
    }
    const [h, s, l] = isHexColor(color) ? hex.hsl(color) : rgb.hsl(color);
    if (alpha !== 1) {
        return rgba(color, alpha);
    }
    return `hsl(${h}, ${s}%, ${l + lightness}%)`;
};

export { colorAdjust, isHexColor };
