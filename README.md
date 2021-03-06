**MEME STORE - A coding project for The Odin Project**

This was made as part of The Odin Project's (TOP) curriculum, near the beginning of the React section. It is the website of an extremely simple store, with most of its functionality focused on how the shopping cart works.

It's difficult for me to just go with another pet store, or workout equipment store, so I decided to go on the memes route, something which most of us enjoy and can have a laugh at.

`Through Create React App`

If you clone this repo and want to run it locally, you can do so by simply typing `npm start` in the console, while in the project's directory, since it was done using 'Create React App'. Make sure to check package.json for the dependencies!

**`About the app`**

The idea behind the app is to simply practice the functionality of a shopping cart. Adding and removing items, total price showed, and being able to add more of the same or remove a number of items from the cart itself.
Followed by a simple checkout process as most stores have.

**`Some of the challenges and lessons`**

Coming up with a non-disgusting design: good design is SO.HARD. Thinking about the layout and design of the site was challenging enough to just make me go with the ridiculous colors and shapes route.

State management: thinking beforehand which components will need and be able to modify which state is a must. Things definitely got super messy at a point where I had some state saved in the Nav component, which was probably the least practical thing to do and I ended up refactoring almost all of it.

Functionality and context (or lack of): Another challenging aspect here was the passing of props from multiple components down the line. It quickly became hard to track, and could have easily led to tightly coupled mistakes. Due to this, one of the things I'm studying next will most likely be 'Context' in React, which I think (?) will help with this issue.

Form validation: Long gone are the days of validating an input field through a simple HTML property. After doing some research, I ended up creating an component and making a list of input objects separately, to then map over this list and make an Input component out of each object. This gave me a lot of agency over the things I want from each input, and it's scalable, in the sense that it didn't matter if I had 3 input fields or 45.

Patterns and regEx: During the form validation research, I came across the pattern property, and how much control of an input you can have when coupled with the proper regEx. I didn't dive too deep into regEx's (they seem like a headache), but they seemed easy enough to google and modify to my specific needs.

Checking property values and styling accordingly in CSS: through some research I also learned that it is possible to check the property of an element and style according to the value of this property in CSS. The example in this project are the error messages in the checkout form - if the input is valid, the span element containing the error message will remain hidden, but if invalid, the error shows and is colored red.

"The most generic solution isn't necessarily always the best one\*: A friend who's more experienced than me opened my eyes to this. Since the beginning of my coding journey I've heard and read about how most of the funcionality (functions, methods, etc) should be as generic as possible, in order to promote reusability and make any potential re-factoring of the code easier, so I've always tried to stick to this idea when approaching problems in my projects. This has led me to over-engineer a couple of things... in this project in particular the input elements, making it potetially more difficult to add a new input on the form, since it would need a condition for each type of input. This would have been much easier by just "hard-coding" it, and it's something I'm definitely going to re-factor in the near future.

---

Added uniqid - extremely light package to generate random id's for lists/mapped elements. Not necessary to run the project.
