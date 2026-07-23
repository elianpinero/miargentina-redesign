import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B1742',
          800: '#13265E',
          700: '#1A3380',
        },
        gold: {
          500: '#FFB81C',
          400: '#FCBF45',
          300: '#FFD166',
        },
        surface: {
          primary: '#FFFFFF',
          secondary: '#F5F6FA',
          tertiary: '#EDEEF4',
        },
        text: {
          primary: '#111827',
          secondary: '#6B7280',
          tertiary: '#9CA3AF',
        },
        success: {
          soft: '#E2F6EC',
          DEFAULT: '#16A34A',
          text: '#0f5132',
        },
        info: {
          soft: '#D0E7F8',
          DEFAULT: '#0EA5E9',
          text: '#0d3a5c',
        },
        warning: {
          soft: '#FFF3BF',
          DEFAULT: '#F59E0B',
          text: '#8B6000',
        },
        danger: {
          soft: '#FEECEC',
          DEFAULT: '#DC2626',
          text: '#7A1010',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      fontSize: {
        'tab': ['10px', { lineHeight: '1', letterSpacing: '0.1px' }],
        'label': ['11px', { lineHeight: '1.3', letterSpacing: '0.3px' }],
        'caption': ['12px', { lineHeight: '1.4' }],
        'body-sm': ['13px', { lineHeight: '1.5' }],
        'body': ['14px', { lineHeight: '1.6' }],
        'body-lg': ['15px', { lineHeight: '1.6' }],
        'title-sm': ['16px', { lineHeight: '1.4', fontWeight: '700' }],
        'title': ['18px', { lineHeight: '1.3', fontWeight: '700' }],
        'title-lg': ['20px', { lineHeight: '1.3', fontWeight: '800' }],
        'headline': ['22px', { lineHeight: '1.2', fontWeight: '800' }],
        'display': ['26px', { lineHeight: '1.1', fontWeight: '800' }],
      },
      borderRadius: {
        'ios-sm': '10px',
        'ios': '14px',
        'ios-lg': '18px',
        'ios-xl': '22px',
        'ios-2xl': '28px',
        'card': '20px',
        'pill': '999px',
      },
      boxShadow: {
        'card': '0 2px 16px rgba(11,23,66,0.07), 0 1px 4px rgba(11,23,66,0.04)',
        'card-hover': '0 6px 24px rgba(11,23,66,0.12), 0 2px 8px rgba(11,23,66,0.06)',
        'card-pressed': '0 1px 4px rgba(11,23,66,0.04)',
        'float': '0 8px 32px rgba(11,23,66,0.18), 0 2px 8px rgba(0,0,0,0.08)',
        'tabbar': '0 -1px 0 rgba(0,0,0,0.06)',
        'avatar': '0 2px 8px rgba(255,184,28,0.35)',
        'gold': '0 4px 14px rgba(255,184,28,0.4)',
        'header': '0 4px 20px rgba(11,23,66,0.2)',
      },
      spacing: {
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-top': 'env(safe-area-inset-top)',
        'tabbar': '83px',
        'header': '110px',
        'touch': '44px',
      },
      backdropBlur: {
        'ios': '20px',
      },
      transitionTimingFunction: {
        'ios': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      animation: {
        'fade-up': 'fadeUp 380ms cubic-bezier(0.22, 0.61, 0.36, 1) both',
        'fade-in': 'fadeIn 250ms ease both',
        'slide-left': 'slideLeft 320ms cubic-bezier(0.22, 0.61, 0.36, 1) both',
        'slide-right': 'slideRight 320ms cubic-bezier(0.22, 0.61, 0.36, 1) both',
        'drawer-open': 'drawerOpen 280ms cubic-bezier(0.22, 0.61, 0.36, 1) both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(24px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-24px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        drawerOpen: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
