
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Ghibli-inspired nature colors
				nature: {
					leaf: '#a6d0cc',
					sunlight: '#fef7cd',
					soil: '#8c7666',
					sky: '#d3e4fd',
					blossom: '#ffdee2',
					stone: '#c5c5c5',
					forest: '#6a8d73',
					water: '#83b7d8'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					from: { opacity: '0', transform: 'translateX(20px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-left': {
					from: { opacity: '0', transform: 'translateX(-20px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'sway': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				'dust-float': {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '100% 100%' },
				},
				'twinkle': {
					'0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
					'50%': { opacity: '0.8', transform: 'scale(1.1)' },
				},
				'falling': {
					'0%': { transform: 'translateY(-20px) rotate(0deg)', opacity: '0' },
					'10%': { opacity: '0.7' },
					'80%': { opacity: '0.7' },
					'100%': { transform: 'translateY(40px) rotate(15deg)', opacity: '0' },
				},
				'bird-flight': {
					'0%': { transform: 'translate(0, 0) scale(1)' },
					'25%': { transform: 'translate(40px, -20px) scale(0.9)' },
					'50%': { transform: 'translate(80px, 0) scale(1)' },
					'75%': { transform: 'translate(40px, 20px) scale(1.1)' },
					'100%': { transform: 'translate(0, 0) scale(1)' },
				},
				'fish-swim': {
					'0%': { transform: 'translateX(0) scaleX(1)' },
					'45%': { transform: 'translateX(40px) scaleX(1)' },
					'50%': { transform: 'translateX(40px) scaleX(-1)' },
					'95%': { transform: 'translateX(0) scaleX(-1)' },
					'100%': { transform: 'translateX(0) scaleX(1)' },
				},
				'hop': {
					'0%, 100%': { transform: 'translateY(0)' },
					'10%, 30%': { transform: 'translateY(-15px)' },
					'20%': { transform: 'translateY(-10px)' },
					'40%, 60%': { transform: 'translateY(0)' },
					'70%, 90%': { transform: 'translateY(-8px)' },
					'80%': { transform: 'translateY(-4px)' },
				},
				'rise': {
					'0%': { transform: 'translateY(20px)', opacity: '0.2' },
					'20%, 80%': { opacity: '0.4' },
					'100%': { transform: 'translateY(0)', opacity: '0.2' },
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'33%': { transform: 'translateY(-10px) rotate(1deg)' },
					'66%': { transform: 'translateY(5px) rotate(-1deg)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.7s ease-out forwards',
				'pulse-slow': 'pulse-slow 3s infinite ease-in-out',
				'float': 'float 6s infinite ease-in-out',
				'spin-slow': 'spin-slow 12s linear infinite',
				'sway': 'sway 8s ease-in-out infinite',
				'dust-float': 'dust-float 60s linear infinite',
				'twinkle': 'twinkle 4s ease-in-out infinite',
				'falling': 'falling 8s linear infinite',
				'bird-flight': 'bird-flight 15s linear infinite',
				'fish-swim': 'fish-swim 12s ease-in-out infinite',
				'hop': 'hop 5s ease-in-out infinite',
				'rise': 'rise 20s ease-out infinite',
				'float-slow': 'float-slow 8s ease-in-out infinite',
			},
			backgroundImage: {
				'ghibli-noise': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMjAwdjIwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')",
				'ghibli-dots': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23a6d0cc' opacity='0.3'/%3E%3C/svg%3E\")"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
