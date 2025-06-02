# `SCard`

The `SCard` component is a container with a soft neumorphic design, used to group content inside a card-style layout.

## Preview

```vue
<SCard>
  <p>This is some content inside the card.</p>
</SCard>
```

## Props

| Prop     | Type   | Default   | Description                        |
|----------|--------|-----------|------------------------------------|
| padding  | string | `'1.5rem'` (via CSS) | Optional. Custom padding (not reactive). |

> ⚠️ Although the `padding` prop exists, it is currently **not reactive** and doesn't apply dynamic styles directly. Consider customizing the style manually if needed.

## Slots

- `default` – Content to be rendered inside the card.

## Styling

The component uses a neumorphic design with:
- Soft shadows (`box-shadow`)
- Rounded corners (`border-radius: 1rem`)
- Light grey background (`#e0e0e0`)

To customize its look, you can override `.s-card` via CSS.

## Example

```vue
<SCard>
  <h2>Card Title</h2>
  <p>This card uses neumorphism.</p>
</SCard>
```