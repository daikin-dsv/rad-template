# Daikin Design System CSS Variables

This document enumerates the available CSS custom properties that can be used directly or referenced inside Tailwind CSS utilities (for example, `text-[color:var(--dds-color-common-brand-default)]`).

## Colors

### Brand Colors

- `--dds-color-common-brand-default`: `#0097e0`
- `--dds-color-common-brand-hover`: `#0081c0`
- `--dds-color-common-brand-press`: `#00689a`

### Brand Surfaces

- `--dds-color-common-surface-brand-hover`: `#ddf3fc`
- `--dds-color-common-surface-brand-press`: `#bbe7f9`

### Neutral Surfaces

- `--dds-color-common-surface-neutral-hover`: `#f2f2f2`
- `--dds-color-common-surface-neutral-press`: `#ebebeb`

### Danger Surfaces

- `--dds-color-common-surface-danger-hover`: `#fdd9db`
- `--dds-color-common-surface-danger-press`: `#fbb3b7`

### Base Surfaces

- `--dds-color-common-surface-default`: `#fff`
- `--dds-color-common-surface-inverse`: `#616161`
- `--dds-color-common-surface-hover`: `#f2f2f2`
- `--dds-color-common-surface-press`: `#ebebeb`

### Selected Surfaces

- `--dds-color-common-surface-selected-default`: `#ddf3fc`
- `--dds-color-common-surface-selected-hover`: `#bbe7f9`
- `--dds-color-common-surface-selected-press`: `#98dbf7`

### Neutral Text & Icons

- `--dds-color-common-neutral-default`: `#616161`
- `--dds-color-common-neutral-hover`: `#515151`
- `--dds-color-common-neutral-press`: `#414141`

### Status Colors

- `--dds-color-common-danger-default`: `#d80c18`
- `--dds-color-common-danger-hover`: `#b90a15`
- `--dds-color-common-danger-press`: `#9a0911`
- `--dds-color-common-success`: `#008f7e`
- `--dds-color-common-warning`: `#b88700`
- `--dds-color-common-alarm`: `#e46b08`
- `--dds-color-common-information`: `#0097e0`
- `--dds-color-common-disabled`: `#bfbfbf`

### Text Colors

- `--dds-color-common-text-primary`: `#212121`
- `--dds-color-common-text-secondary`: `#616161`
- `--dds-color-common-text-inverse`: `#fff`

### Borders & Backgrounds

- `--dds-color-common-border-focus`: `#0081c0`
- `--dds-color-common-border-empty`: `#cecece`
- `--dds-color-common-background-default`: `#fff`
- `--dds-color-common-background-overlay`: `#000`
- `--dds-color-divider`: `#cecece`

### Link Colors

- `--dds-color-link-text-default`: `#00689a`
- `--dds-color-link-text-hover`: `#005077`
- `--dds-color-link-text-press`: `#004160`
- `--dds-color-link-text-visited-default`: `#5c2365`
- `--dds-color-link-text-visited-hover`: `#4a1c51`
- `--dds-color-link-text-visited-press`: `#37153d`
- `--dds-color-link-surface-visited-hover`: `#f0ddf3`
- `--dds-color-link-surface-visited-press`: `#e1bbe8`

## Border Radius

- `--dds-border-radius-050`: `2px`
- `--dds-border-radius-100`: `4px`
- `--dds-border-radius-200`: `8px`

## Border Width

- `--dds-border-width-025`: `1px`
- `--dds-border-width-050`: `2px`
- `--dds-border-width-100`: `4px`

## Typography

### Composite Font Tokens

- `--dds-font-regular-normal-300`: `400 12px / 1.5 Roboto`
- `--dds-font-regular-normal-350`: `400 14px / 1.5 Roboto`
- `--dds-font-regular-normal-400`: `400 16px / 1.5 Roboto`
- `--dds-font-regular-normal-500`: `400 20px / 1.5 Roboto`
- `--dds-font-regular-tight-300`: `400 12px / 1.3 Roboto`
- `--dds-font-regular-tight-350`: `400 14px / 1.3 Roboto`
- `--dds-font-regular-tight-400`: `400 16px / 1.3 Roboto`
- `--dds-font-regular-tight-500`: `400 20px / 1.3 Roboto`
- `--dds-font-regular-bold-normal-300`: `700 12px / 1.5 Roboto`
- `--dds-font-regular-bold-normal-350`: `700 14px / 1.5 Roboto`
- `--dds-font-regular-bold-normal-400`: `700 16px / 1.5 Roboto`
- `--dds-font-regular-bold-normal-500`: `700 20px / 1.5 Roboto`
- `--dds-font-regular-bold-tight-300`: `700 12px / 1.3 Roboto`
- `--dds-font-regular-bold-tight-350`: `700 14px / 1.3 Roboto`
- `--dds-font-regular-bold-tight-400`: `700 16px / 1.3 Roboto`
- `--dds-font-regular-bold-tight-500`: `700 20px / 1.3 Roboto`
- `--dds-font-bold-normal-300`: `700 12px / 1.5 Roboto`
- `--dds-font-bold-normal-350`: `700 14px / 1.5 Roboto`
- `--dds-font-bold-normal-400`: `700 16px / 1.5 Roboto`
- `--dds-font-bold-normal-500`: `700 20px / 1.5 Roboto`
- `--dds-font-bold-tight-300`: `700 12px / 1.3 Roboto`
- `--dds-font-bold-tight-350`: `700 14px / 1.3 Roboto`
- `--dds-font-bold-tight-400`: `700 16px / 1.3 Roboto`
- `--dds-font-bold-tight-500`: `700 20px / 1.3 Roboto`

### Primitive Font Tokens

- `--dds-font-size-300`: `12px`
- `--dds-font-size-350`: `14px`
- `--dds-font-size-400`: `16px`
- `--dds-font-size-500`: `20px`
- `--dds-font-line-height-tight`: `1.3`
- `--dds-font-line-height-normal`: `1.5`
- `--dds-font-weight-bold`: `700`
- `--dds-font-weight-regular`: `400`
- `--dds-font-family-base`: `Roboto`

## Tailwind Usage Example

```tsx
<div className="bg-[color:var(--dds-color-common-surface-selected-default)] text-[color:var(--dds-color-common-text-primary)]">
    Custom themed content
</div>
```

The same variables can also be referenced within component stylesheets using the standard `var(--token-name)` syntax.
