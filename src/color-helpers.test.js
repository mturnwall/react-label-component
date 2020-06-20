import { isHexColor } from './color-helpers.js';

describe('Color Helper Functions', () => {
    it('Color is a hex value', () => {
        expect(isHexColor('#000')).toBe(true);
    });
});
