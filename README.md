# Custom Spatacus Styles

## Custom styles

You have two options for extending the Spartacus styles:

1. Extending the OOTB style in your `styles.scss` and defining your custom styles in the component style

```
// styles.scss
$styleVersion: 3.4;
@import "~@spartacus/styles/index";

app-custom-product-intro {
  @extend %cx-product-intro !optional;
}
```

```
// custom-product-intro.component.ts
:host {
  .code {
    color: yellow;
  }
}
```

The following example will use the OOTB style and override the .code color.

2. Extend the style in your component scss

```
// custom-product-intro.component.ts

// Import required by the OOTB file
@import "~@spartacus/styles/scss/cxbase/mixins";
// Import the OOTB component style before importing it
@import "~@spartacus/styles/scss/components/product/details/product-intro";

:host {
  .code {
    color: yellow;
  }
  @extend %cx-product-intro !optional;
}
```

## How to use?

Method `2.` is enabled by default.

To use method `1.`:
- Comment out `@extend %cx-product-intro !optional;` in `custom-product-intro.component.ts`
- Un-comment the code in `styles.scss`