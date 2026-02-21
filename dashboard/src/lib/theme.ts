import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

export const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {

        primary: {
          50: { value: '#5bd8a624' },
          100: { value: '#5bd8a695' },
          500: { value: '#5bd8a6' },
          600: { value: '#3ab684' },
          700: { value: '#248860' },
          900: { value: '#115439' },
        },
        secondary: {
          500: { value: '#8b5cf6' },
          600: { value: '#7c3aed' },
        },
      },
    },
    semanticTokens: {
      colors: {

        bg: {
          surface: {
            _light: { value: '#ffffff' },
            _dark: { value: '#1a202c' },
          },
          subtle: {
            _light: { value: '#5bd8a624' },
            _dark: { value: '#2d3748' },
          },
          muted: {
            _light: { value: '#edf2f7' },
            _dark: { value: '#4a5568' },
          },
        },
        fg: {
          default: {
            _light: { value: '#1a202c' },
            _dark: { value: '#f7fafc' },
          },
          muted: {
            _light: { value: '#718096' },
            _dark: { value: '#a0aec0' },
          },
          inverted: {
            _light: { value: '#ffffff' },
            _dark: { value: '#000000' },
          },
        },
        border: {
          default: {
            _light: { value: '#e2e8f0' },
            _dark: { value: '#4a5568' },
          },
        },
        accent: {
          _light: { value: '{colors.primary.600}' },
          _dark: { value: '{colors.primary.500}' },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)