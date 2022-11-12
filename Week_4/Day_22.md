# W4D3

- remember. always use `.then(() => {})` structure for .then calls.
- (all the rest of the day's notes ended up in project)

# W4D4

## responseive design
- many differnet ways to setup `media-type ... and (...)`
- overlapping vs back-to-back
- flexbox `overflow-x`
- css `scroll snap`
- can use `em` in mediatype conditions- 


## what we're doing
- breakpoints: tablet layout at min width 768px, desktop at min 1024px

common breakpoints:
``` css
/* Smartphones: minimum width of 320px to maximum width of around 420px */
  @media only screen and (min-width: 320px) and (max-width: 420px) {
    /* Write smartphone only styles here */
  }

  /* Another smartphone breakpoint is maximum width of around 420px */
  @media only screen and (max-width: 420px) {
    /* Write smartphone only styles here */
  }

  /* Tablet: minimum width of 768px to maximum width of 1024px */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    /* Write Tablet only CSS here */
  }

  /* Another tablet breakpoint is maximum width of 1024px */
  @media only screen and (max-width: 1024px) {
    /* Write CSS rules that target Tablets screen sizes downwards - including smartphones */
  }

  /* Another tablet breakpoint is minimum width of 768px */
  @media only screen and (min-width: 768px) {
    /* Write CSS rules that target Tablets screen sizes upwards - including desktops */
  }

  /* Laptops / Desktops: minimum width of 1024px */
  @media only screen and (min-width: 1024px) {
    /* Write CSS rules that target Laptop/Desktop screen sizes and beyond */
  }

  /* Laptops / Desktops: minimum width of 960px */
  @media only screen and (min-width: 960px) {
    /* Write CSS rules that target small laptop screen sizes and beyond */
  }
  ```

- CRITICAL LINE FOR ALL WEB PAGES BASICALLY EVER: 
  - ` <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />`