import React from 'react';
import styled from 'styled-components';
import { string, node, object, oneOf } from 'prop-types';

const ALLOWED_COLORS = ['primary', 'info', 'success', 'warning', 'error'];
const ALLOWED_TYPES = ['bold', 'subtle'];

const StyledDiv = styled.div`
    ${({ theme: { label } }) => {
        return Object.keys(label.base).map(key => ({
            [key]: label.base[key],
        }));
    }}
    ${({ theme: { label }, color, type }) => {
        if (color in label && type in label[color]) {
            return [
                `background-color: ${label[color][type].background};`,
                `border-color: ${label[color][type].border};`,
                `color: ${label[color][type].color};`,
            ];
        }
    }}
`;

const propTypes = {
    /** Determines the HTML element used to render the Label */
    as: string,
    /** The inner part of the Label, generally just a string */
    children: node.isRequired,
    /** The primary color scheme of the Label */
    color: oneOf(ALLOWED_COLORS),
    /** Use this to pass in a theme. It will override any global theme */
    theme: object,
    /** Determines if the Label is transparent (subtle) or filled (bold) */
    type: oneOf(ALLOWED_TYPES),
};

const defaultProps = {
    as: 'span',
    color: 'primary',
    theme: null,
    type: 'subtle',
};

const Label = ({ as, children, className, color, theme, type }) => {
    return (
        <StyledDiv
            className={className}
            as={as}
            color={color}
            theme={theme ? { label: theme } : null}
            type={type}
        >
            {children}
        </StyledDiv>
    );
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
export { Label };
