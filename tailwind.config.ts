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
                customWhiteSmaller:
                    '0 2px 4px rgba(255, 255, 255, 0.2), 0 -2px 4px rgba(255, 255, 255, 0.2), 2px 0 4px rgba(255, 255, 255, 0.2), -2px 0 4px rgba(255, 255, 255, 0.2)',
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
                'bg-test': "url('/imgs/Test.jpg')",
                'poster-gradient':
                    'radial-gradient(46.99% 43.05% at 97.42% 100%, rgba(46, 48, 56, 0.4) 0%, transparent 100%), radial-gradient(95.18% 75.16% at 87.58% -10.42%, rgba(112, 220, 211, 0.3) 0%, transparent 100%)',

                'card-gradient':
                    ' radial-gradient(121.65% 100% at 32.68% 0, #3c4155 0, rgba(60, 65, 85, .18) 32.49%, rgba(60, 65, 85, 0) 51.34%), radial-gradient(91.41% 43.04% at 50% 0, #1a1c24 20.67%, rgba(26, 28, 36, 0) 100%), radial-gradient(69.96% 25.89% at 50% 100%, #15171e 22.77%, rgba(19, 21, 27, 0) 100%)',
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
