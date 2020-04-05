---
layout: article
title:  "CSS Specificity"
meta:   CSS specificity is a set of rules that helps the browser in selecting the particular style that is to be applied to an element. So in cases where there are conflicts of an element style, CSS specificity helps the browser in choosing the most specific style.
excerpt: CSS specificity is a set of rules that helps the browser in selecting the particular style that is to be applied to an element. So in cases where there are conflicts of an element style, CSS specificity helps the browser in choosing the most specific style.
date:   2020-04-05 00:56:57 +0100
date-2: 05 April 2020
categories: css
description: 
---
When it comes to writing CSS, *CSS Specificity* is an aspect that we must come across all the time. Have you ever styled an element but the style is not being applied? This happens more often when you use frameworks. What has happened can be explained by what is known as CSS specificity.

CSS specificity is a set of rules that helps the browser in selecting the particular style that is to be applied to an element. So in cases where there are conflicts of an element style, CSS specificity helps the browser in choosing the most specific style.

In CSS, there are what are known as slectors. CSS specificity gives different levels of powers to these selectors or a combination of them. A more powerful selector or a combination of selectors simply means that the selector has a higher specificity.

## Specificity Rules
CSS specificity rules creates a kind of hierachy amongst selectors.

**Inline styles:** They are styles that live within the (x)html document body. Inline styles have the highest specificity as they are closest to the html. They will override any external or embedded css rules. In the code below;

```CSS
h1{
    margin: 5px 0;
}
```

```HTML
<h1 style='margin: 5px'>Hello World</h1>
```
the inline style will be applied.

**ID selectors:** They are identifiers for elements on a html page. An id selector always have more specificity powers than a class or attribute selectors. For example
```CSS
//A.
#title{
    margin: 5px 0;
}
```
```CSS
//B.
.title{
    margin: 5px 0;
}
```
In the example above, code A will be applied ahead of code B.

**Class/Attribute/Pseudo Selectors:** All three selectors have same specificity powers but are less powerful than ID selectors although more powerfull than any number of element selectors

**Element/Pseudo Elements Selectors:** They have the least specificty powers, lower than Class/Attribute/Pseudo Selectors.

**Universal Selectors:** They include *, body, html etc. They have no specificty powers, something known as 'zero specificty';

### Additional Specificity Rules
**!important value:** This is a special CSS value. It is special because when applied to a style no other selector, including inline styles, can override it. It is advised that you make less use of it as it makes debugging CSS very difficult. However, sometimes when using CSS frameworks, you will find out that the only way to apply your style is to use this special value.

**Equal Specificity:** In scenarios where two css selectors have equal specificity, then the latest rule is the rule that will be applied.


## Calculating CSS Specificity
Measuring specificity with numbers makes it so much easier. Lets find out how they are calculated with the following examples.
Example 1:
```CSS
//A
h1
//B
.title
//C
#title
//D
<div id="content">
<h1 style="color: #fff">Headline</h1>
</div>
```

In example 1, specificity value can be written as 
- code A: specificity (0 0 0 1)
- code B: specificity (0 0 1 0)
- code C: specificity (0 1 0 0)
- code D: specificity (1 0 0 0)

Example 2:
```CSS
//A
a h1 
//B
#title #title
//c
.title .title--danger
```

In example 2 specificity values can be written as;
- code A: specificity (0 0 0 2)
- code B: specificity (0 0 2 0)
- code C: specificity (0 2 0 0)

Example 3:
```CSS
//A
h1{
    color: blue
} 
//B
#title h1{
    color: red;
}
//c
.title .title--color h1{
    color: pink;
}
```

In example 3 specificity values can be written as;
- code A: specificity (0 0 0 1)
- code B: specificity (0 1 0 1)
- code C: specificity (0 0 2 1)
  
The code with the highest specificity is code C since its specificity value is 101. 


## Conclusion:
Understanding the concept of CSS specificity gives one a good advantage in debugging CSS which in turn can save you enormous amount of time. Its a concept that seems difficult to grasp at first but its quite easy when you understand it.

## Resources
[CSS Specificity: Things You Should Know](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)

[Specifics on CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/)

[CSS Specificity](https://dev.to/emmabostian/css-specificity-1kca)

