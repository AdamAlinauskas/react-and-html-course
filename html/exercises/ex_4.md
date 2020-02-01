# Exercise 4

Create React.js basic components following the [React.js doc](https://reactjs.org)

* Create a new folder with the name ex_4

## A Component Using External Plugins - Markdown Example using other JS library
 * Inside the ex_4 folder create a index.html and markdown-example.js files
 
### index.html 
* Create a basic html file
* Add the scripts to add:
  * Remarkable from the following url https://cdnjs.cloudflare.com/ajax/libs/remarkable/1.7.4/remarkable.min.js

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/1.7.4/remarkable.min.js" crossorigin></script>
```

  * React
  * React-dom
  * babel
  * markdown-example.js with the attribute type="text/babel"
* Add a div element with the id="markdown-example"

### markdown-example.js
  * Copy and paste the code from the A Component Using External Plugins doc section

* Open this example in your browser
* Try to follow and understand the following concept:

>React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the <textarea>’s value in real time.

### markdown-example.js
 * Replace **World** for your name when running the example in the browser to see what happens