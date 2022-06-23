MEME STORE - A coding project for The Odin Project

This was made as part of The Odin Project's (TOP) curriculum, near the beginning of the React section. It is the website of an extremely simple store, with most of its functionality focused on how the shopping cart works.

It's difficult for me to just go with another pet store, or workout equipment store, so I decided to go on the memes route, something which most of us enjoy and can have a laugh at.

If you clone this repo and want to run it locally, you can do so by simply typing `npm start` in the console, while in the project's directory.

`About the app`

The idea behind the app is to simply practice the functionality of a shopping cart. Adding and removing items, total price showed, and being able to add more of the same or remove a number of items from the cart itself.
Followed by a simple checkout process as most stores have.

`Some of the challenges`

Coming up with a non-disgusting design: good design is SO.HARD. Thinking about the layout and design of the site was challenging enough to just make me go with the ridiculous colors and shapes route.

State management: thinking beforehand which components will need and be able to modify which state is a must. Things definitely got super messy at a point where I had some state saved in the Nav component, which was probably the least practical thing to do and I ended up refactoring almost all of it.

Functionality and context (or lack of): Another challenging aspect here was the passing of props from multiple components down the line. It quickly became hard to track, and could have easily led to tightly coupled mistakes. Due to this, one of the things I'm studying next will most likely be 'Context' in React, which I think (?) will help with this issue.

Form validation: Long gone are the days of validating an input field through a simple HTML property. After doing some research, I ended up creating an component and making a list of input objects separately, to then map over this list and make an Input component out of each object. This gave me a lot of agency over the things I want from each input, and it's scalable, in the sense that it didn't matter if I had 3 input fields or 45.

Patterns and regEx: During the form validation research, I came across the pattern property, and how much control of an input you can have when coupled with the proper regEx. I didn't dive too deep into regEx's (they seem like a headache), but they seemed easy enough to google and modify to my specific needs.

---

Added uniqid - extremely light package to generate random id's for lists/mapped elements. Not necessary to run the project.
