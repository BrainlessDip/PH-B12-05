Q: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
A: getElementById is used to get an element via ID; getElementsByClassName is used to get an element via class name, which is used in CSS; and querySelector is used to select an element via class or ID, but you have to define the word like in CSS, such as .test or #test, but it will return the 1st element. If there is no element, it will return null. On the other hand, querySelectorAll is the same as querySelector, but it will return an nodelist. If there is no element, it will return an empty array []

A: How do you create and insert a new element into the DOM?
Q: I will create an element via the createElement() function and get an element via getElementById or querySelector, and I will insert HTML code inside the new element via innerHTML and append it to the gotten element via getElementById

A: What is Event Bubbling and how does it work?
Q: It will trigger the parent event listener from child to root, meaning it will propagate to root and execute all parent event listener

A: What is Event Delegation in JavaScript? Why is it useful?
Q: Event delegation is adding an event listener on the parent instead of many child elements, which will prevent so many event listeners on the website and is a better way to add an event listener.

A: What is the difference between preventDefault() and stopPropagation() methods?
Q: preventDefault() basically prevents the default browser behaviour of an element, like if there's a button in a form tag, it will work as a submit button. On the other hand, stopPropagation() will stop the event from continuing to bubble up or capture down on the triggered event so it won't bubble or capture.
