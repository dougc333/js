# Challenge #1 | CSS Demystified

For this challenge, you must try and create the supplied design, using HTML & CSS, as closely as possible.

Extra points for using a single custom property for the color, and finding a way to change the opacity of it (see the tip below regarding this).

## Provided files

For this, and all challenges, I have provided you with:

- 2 HTML files
- CSS file
- Design as Figma and .jpg
- Style Guide

## Completing the challenge

There are two starting HTML files:

- blank.html
- starter.html

**You can choose which one you would prefer to start on**. The file `blank.html` includes only the text, and nothing else. The file `starter.html` has the main layout done and only requires styling so that you can focus more on what we learned in week 1. That said, `starter.html` will require some changes to the HTML, such as adding of classes.

Whatever you choose, there  are multiple solutions to this that will all work, and all be perfectly valid. Find something that works well for you, and then share your solution or get feedback in the Discord (more on that below).

## Tips

In this challenge, we are using a `box-shadow` which has the same color as that element's background, but with a lower opacity.

You _cannot_ change the opacity of a custom property, but there is another way you could save the color values in order to have only one custom property for each color.

For example, this would not work:

```css
:root {
  --clr-purple: #8b92e8;
}

.selector {
  /* this does NOT work */
  box-shadow: rgba(--clr-purple, 0.5);
}
```

So you get bonus points if you can figure out an approach where you would be able to write `rgba(--clr-purple, 0.5); and get it to work. You will have to change the custom properties I have provided to make this possible.

If you aren't sure, complete the challenge without even worrying about it, then go back and see if you can find the solution to that problem. 

Think about it a little, or if needed, Google it and see if you can find a solution. 

## Feedback or if you get stuck

I am not providing solutions to these challenges, they are for you to complete. If you finish one and would like feedback, or if you get stuck, jump into the Discord. There is a channel devoted to the challenges from this course.

I would suggest uploading what you have to [CodePen](https://codepen.io) so that you can share your code easily with others. If you create a new CodePen, you can drag your files from your computer into the CodePen to make it very fast (see the image below).

![easily upload to codepen dragging and dropping files to their respective sections](codepen-easy-upload.gif)
