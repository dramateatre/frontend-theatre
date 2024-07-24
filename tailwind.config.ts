/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            boxShadow: {
                custom: '0 10px 15px rgba(0, 0, 0, 0.2), 0 -10px 15px rgba(0, 0, 0, 0.2), 10px 0 15px rgba(0, 0, 0, 0.2), -10px 0 15px rgba(0, 0, 0, 0.2)',
                customWhite:
                    '0 10px 15px rgba(255, 255, 255, 0.2), 0 -10px 15px rgba(255, 255, 255, 0.2), 10px 0 15px rgba(255, 255, 255, 0.2), -10px 0 15px rgba(255, 255, 255, 0.2)',
                customWhiteSmall:
                    '0 5px 10px rgba(255, 255, 255, 0.2), 0 -5px 10px rgba(255, 255, 255, 0.2), 5px 0 10px rgba(255, 255, 255, 0.2), -5px 0 10px rgba(255, 255, 255, 0.2)',
            },
            fontFamily: {
                georgian: ['var(--font-georgian)'],
                playwrite: ['var(--font-playwrite)'],
            },
            backgroundImage: {
                'footer-cover': "url('/imgs/FooterCover.jpg')",
                'main-cover': "url('/imgs/Cover.png')",
                'bg-body': "url('/imgs/BgBody.jpg')",
                'bg-cov': "url('/imgs/bg-cov.jpg')",
            },

            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}
