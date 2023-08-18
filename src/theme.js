import { createTheme } from '@mui/material/styles';

// Crea el tema personalizado
const theme = createTheme({
    palette: {
        primary: {
            main: '#e8dbda',
            light: '#f6f1f0',
            dark: '#f6f1f0',
            contrastText: '#fff',
        },
        secondary: {
            main: '#f6f1f0',
            light: '#f6f1f0',
            dark: '#f6f1f0',
            contrastText: '#fff',
        },
        error: {
            main: '#f6f1f0',
            light: '#f6f1f0',
            dark: '#f6f1f0',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: 'Alex Brush, sans-serif',
        fontSize: 18,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
    // Agrega más configuraciones de tema según sea necesario
});

export default theme;