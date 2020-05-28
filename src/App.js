import React from 'react';
import './styles.css';
import styled, { ThemeProvider } from 'styled-components';
import { colorAdjust } from './color-helpers';
import { theme } from './theme';
import { Label } from './Label';

const label = {
    base: {
        borderRadius: '100px',
        fontSize: '20px',
        fontWeight: 600,
        letterSpacing: '0.5px',
        lineHeight: '1.25',
        padding: '0.5em 0.75em',
        width: 'max-content',
    },
    info: {
        subtle: {
            background: colorAdjust(theme.statusColors.info, { lightness: 51 }),
            color: theme.statusColors.info,
        },
        bold: {
            background: theme.statusColors.info,
            color: theme.baseColors.white,
        },
    },
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    justify-items: center;
`;
const Column = styled.div`
    display: grid;
    grid-gap: 10px;
    justify-items: center;
`;
const ColumnSubtle = styled(Column)`
    grid-column: 1 / 2;
    grid-template-rows: repeat(6, min-content);
`;
const ColumnBold = styled(Column)`
    grid-column: 2;
    grid-template-rows: repeat(6, min-content);
`;

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <h1>Portfolium Lozenges</h1>
                <Wrapper>
                    <ColumnSubtle>
                        <h2>Subtle</h2>
                        <Label>Primary</Label>
                        <Label color="info">Info</Label>
                        <Label color="success">Success</Label>
                        <Label color="warning">Warning</Label>
                        <Label color="error">Error</Label>
                    </ColumnSubtle>
                    <ColumnBold>
                        <h2>Bold</h2>
                        <Label type="bold">Primary</Label>
                        <Label color="info" type="bold">
                            Info
                        </Label>
                        <Label color="success" type="bold">
                            Success
                        </Label>
                        <Label color="warning" type="bold">
                            Warning
                        </Label>
                        <Label color="error" type="bold">
                            Error
                        </Label>
                    </ColumnBold>
                    <Column>
                        <h2>Theme as Prop</h2>
                        <span>
                            Passing in a theme instead of using global theme
                        </span>
                        <Label color="info" theme={label}>
                            Info
                        </Label>
                    </Column>
                </Wrapper>
            </div>
        </ThemeProvider>
    );
}
