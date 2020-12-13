# Challenge #2 | CSS Demystified

For this challenge, you are provided with a starting HTML and CSS file. 

There are four variations that must be created:

- bg-light
- bg-neutral
- bg-accent
- bg-dark

The bg-light version has already been created in what you have been provided.

For this challenge, you are **not allowed to touch the HTML file** that has been provided. 

There are multiple approaches that you can take to complete this challenge (see below for more information).

## Provided files

For this, and all challenges, I have provided you with:

- 1 HTML file
- 1 CSS file
- Design as Figma and .jpg
- Style Guide

## Possible approaches

You can approach this challenge either by taking advantage of compound selectors:

```css
.bg-dark .btn-primary { background: #234; }
```

Or you can approach it by using locally scoped custom properties instead:

```css
.bg-dark {
    --background: #234;
}
```

The approach with locally scoped custom properties will take more set up work, but should be quick to implement once the set up work is done.

## Feedback or if you get stuck

I am not providing solutions to these challenges, they are for you to complete. If you finish one and would like feedback, or if you get stuck, jump into the Discord. There is a channel devoted to the challenges from this course.

I would suggest uploading what you have to [CodePen](https://codepen.io) so that you can share your code easily with others. If you create a new CodePen, you can drag your files from your computer into the CodePen to make it very fast (see the image below).

![easily upload to codepen dragging and dropping files to their respective sections](codepen-easy-upload.gif)
