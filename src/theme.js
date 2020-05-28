import { colorAdjust } from './color-helpers';

const baseColors = {
    ash: '#8b969e',
    barney: '#bf32a4',
    black: '#000',
    crimson: '#ee0612',
    electric: '#008ee2',
    fire: '#fc5e13',
    licorice: '#2d3b45',
    oxford: '#394b58',
    porcelain: '#f5f5f5',
    shamrock: '#00ac18',
    tiara: '#c7cdd1',
    violet: '#66189d',
    white: '#fff',
};

const statusColors = {
    primary: baseColors.oxford,
    info: baseColors.electric,
    success: baseColors.shamrock,
    warning: baseColors.fire,
    error: baseColors.crimson,
};

const label = {
    base: {
        borderRadius: '100px',
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.5px',
        lineHeight: '1.25',
        padding: '2px 8px',
        textTransform: 'uppercase',
        border: '1px solid transparent',
        width: 'max-content',
    },
    primary: {
        subtle: {
            background: baseColors.porcelain,
            border: statusColors.primary,
            color: statusColors.primary,
        },
        bold: {
            background: baseColors.ash,
            color: baseColors.white,
        },
    },
    info: {
        subtle: {
            background: colorAdjust(statusColors.info, { lightness: 51 }),
            border: statusColors.info,
            color: statusColors.info,
        },
        bold: {
            background: statusColors.info,
            color: baseColors.white,
        },
    },
    success: {
        subtle: {
            background: colorAdjust(statusColors.success, { lightness: 63 }),
            border: statusColors.success,
            color: statusColors.success,
        },
        bold: {
            background: statusColors.success,
            color: baseColors.white,
        },
    },
    warning: {
        subtle: {
            background: colorAdjust(statusColors.warning, { lightness: 43 }),
            border: statusColors.warning,
            color: statusColors.warning,
        },
        bold: {
            background: statusColors.warning,
            color: baseColors.white,
        },
    },
    error: {
        subtle: {
            background: colorAdjust(statusColors.error, { lightness: 49 }),
            border: statusColors.error,
            color: statusColors.error,
        },
        bold: {
            background: statusColors.error,
            color: baseColors.white,
        },
    },
};

const theme = {
    baseColors,
    label,
    statusColors,
};

export { theme };
