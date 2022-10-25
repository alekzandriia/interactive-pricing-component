# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](./screenshot.png)
![](./screenshot-mobile.png)

### Links

- Solution: [Source Code](https://github.com/alekzandriia/interactive-pricing-component)
- Live Site: [Demo](https://alekzandriia.github.io/interactive-pricing-component/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Transitions
- JavaScript

### What I learned

I learned a lot about styling custom form elements!

In this project I needed to create a custom toggle switch by styling a checkbox and I needed to create a custom slider component.

The components were quite involved, so I ended up separating them into their own CSS files to make the project more readable.

### Continued Development

Despite most web browsers playing well together these days (thank you web standards), I discovered that there are still huge compatibility issues when it comes to styling the range input element.

I was able to use vendor prefixes successfully for the most part (to style the track and the thumb).

However, I also wanted to change the colour of the slider to the left of the thumb as a visual indicator of the user's scrolling progress across the track.

Firefox has a simple prefix (-moz-) to implement this function, but other (-webkit-) browsers do not.

**Code snippet: -moz- prefix to display range progress**

```
input[type="range"]::-moz-range-progress {
    background:#a2f2ea;
    height:0.5rem;
    border-radius:2rem;
}
```

I personally use Firefox, so it looks great on my browser, but when I open Safari or Chrome it doesn't show up. Fortunately, this is purely aesthetic and doesn't affect the usability of the component as a whole.

There must be a way to implement this in javaScript... 🤔 so in the future I'd like to add this feature.

### Useful resources

- Smashing Magazine wrote a great [article](https://www.smashingmagazine.com/2021/12/create-custom-range-input-consistent-browsers/) explaining how to style a custom range input slider.

- W3Schools has a great explainer on [CSS backgrounds](https://www.w3schools.com/css/css3_backgrounds.asp)

- W3Schools also has a great guide to creating a custom [toggle button](https://www.w3schools.com/howto/howto_css_switch.asp) from a checkbox element

## Author

- Website - [Alekzandriia](https://www.alekz.dev)
- Frontend Mentor - [@alekzandriia](https://www.frontendmentor.io/profile/alekzandria)
- Twitter - [@alekzandriia](https://www.twitter.com/alekzandriia)
