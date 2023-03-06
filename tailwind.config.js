/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                kalgreen: '#A6C44A',
                kalgray: '#777777',
                lightGray: '#F5F5F5',
                lightGreen: '#F6F9ED',
                nearBlack: '#12121',
                lightRed: '#F85640',
                backgroundMain: 'black',
                borderMain: 'gray',
            },
            width: {
                medium: '56%',
                22: '83px',
                promoList: '48%',
                promoListMobile: '100%',
                promoGap: '45%',
                stock: '49%',
            },
            height: {
                17: '70px',
                83: '370px',
            },
            zIndex: {
                1: '1',
                1070: '1070',
            },
            maxWidth: {
                '2xs': '16rem',
            },
            maxHeight: {
                100: '450px',
            },
            screens: {
                xs: '120px',
            },
        },
    },
    plugins: [],
}
