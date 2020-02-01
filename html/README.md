# Learning React.js

## What's React.js

> React.js is a a JavaScript library for building user interfaces (Official site Definition)

### Declarative

> React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. 
Declarative views make your code more predictable and easier to debug.

### Component-Based
> Build encapsulated components that manage their own state, then compose them to make complex UIs.
Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

### Learn Once, Write Anywhere
> We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
React can also render on the server using Node and power mobile apps using [React Native](https://facebook.github.io/react-native).

❤️ [React.js official documentation](https://reactjs.org) is great so we'll try to use it as mutch as possible to learn about this great JavaScript library

Try doing all the exercises your self but if you get stuck then you can check the [exercises code](examples/exercises)

## How to add React.js to a Website

As React.js is a JavaScript library we can add it to our existing HTML, CSS & JavaScript site. We can use React.js to create a single component inside our site or build a complete SPA.

[Dynamic Websites vs Static Pages vs Single Page Apps (SPAs) - Youtube](https://www.youtube.com/watch?v=Kg0Q_YaQ3Gk)

[Single Page Applicatio (SPA) - blog post](https://www.academind.com/learn/web-dev/dynamic-vs-static-vs-spa)

[Single-page application](https://en.wikipedia.org/wiki/Single-page_application)

In order to use React.js first we need to be able to add it to our current site. You can learn how to do it by reading and following the [Add React.js to a website](https://reactjs.org/docs/add-react-to-a-website.html)

Try the following exercises but don't worry if you don't get everything at this moment. Focus on getting them to work first, you'll understand more after you finish this guide.

[Exercise 1](exercises/ex_1.md)

[Exercise 2](exercises/ex_2.md)

[Exercise 3](exercises/ex_3.md)

[Exercise 4](exercises/ex_4.md)

To get the React basics watch the awesome [Kent C. Dodds Egghead course](https://egghead.io/courses/the-beginner-s-guide-to-react)

If you like online courses watch [Learn React for free](https://scrimba.com/g/glearnreact)

Also, you can try [30 Days of React](https://www.fullstackreact.com/30-days-of-react)

## Create React App

[Read CRA React](https://reactjs.org/docs/create-a-new-react-app.html) doc to learn more about this great tool to start your React project. 

* Try creating your fist CRA app executing the following commands:

```bash
npx create-react-app my-app
cd my-app
npm start
```

* If CRA is able to start the app you should see it running on your browser
* Open the src folder and replace some css on the App.css file and see your changes on the browser right away

Now that you have a React.js basic understanding lets try to code the following [Getting started with react - by Tania Rascia](https://www.taniarascia.com/getting-started-with-react) tutorial. You can code along or donwload the source and run it locally.

We already know that React it's JavaScript but we might be using things that we don't fully understand at the moment and that are pretty common now a day.

### Babel
[Try Babel JSX REPL](https://babeljs.io/en/repl)

### Destructuring
[Object and Array Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### Arrow Functions
[ES6 arrow functions new fat concise syntax JavaScript](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript)

[Arrow functions MDN doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

[When and why you should use ES6 arrow functions and when you shouldn't](https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/)

### Import / Export
[Import MDN doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

[Export MDN doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

[Named export vs default export in es6](https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910)

[ES6 modules](https://alligator.io/js/modules-es6)

[Axel Rauschmayer - ES6 book - modules](https://exploringjs.com/es6/ch_modules.html)

To get a better understanding of what's going on you can read the React.js official guide:

[1. Hello World](https://reactjs.org/docs/hello-world.html)

* Using React, ReactDOM and JSX we can render a h1 component with the text Hello, world!
* ReactDOM has a `render` method 

```JavaScript
ReactDOM.render(element, container)
```

* Render accepts an element to be render as first parameter and a reference to a container element where we're going to render our component.

```JavaScript
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

* In this case we're rendering an h1 component with the text Hello, World
* To get the container reference we're using document.getElementById('roo'). This means that there's an element with the id="root" in the document where we'll render our h1 component.

[2. Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)

JSX is a syntax extension to JavaScript.

```js
const element = <h1>Hello, world!</h1>;
```

When transpiled using Babel this is actually doing 

```js
const element = React.createElement("h1", null, "Hello, world!");
```

* JSX will call React create element
* It uses the tag name as component name (first parameter)
* In this example we're not passing any parameters beside the children so the property object is empty (second parameter)
* Hello, world! will become the children of this component
* createElement will consider that any value after the second one will be a children

```js
const element = <h1 className="red">Hello, world!</h1>;
```

Will become

```js
const element = React.createElement("h1", { className: "red" }, "Hello, world!");
```

* `{ className: "red" }` is an object that represents the properties that we're passing to this component
* We can embedd JavaScript expressions in JSX using `{ expression }`

```js
const name = 'Xime';
const element = <h1>Hello, {name}</h1>;
```

After transpiling it will look like this:

```js
const name = 'Josh Perez';
const element = React.createElement("h1", null, "Hello, ", name);
```

* This means that we can use `{}` and pass any JS value/expression that we want

```js
const element = <h1>The result is: {2 + 2}</h1>;
```

* This will render an h1 element with the children `The result is: 4` as the 2 + 2 expression will be executed and passed as component children

* Using JSX we can pass any property to our components using `property=value`

```js
const element = <img src="http://pictures.com/dog.png" />;
```

```js
const element = React.createElement("img", { src: "http://pictures.com/dog.png"});
```

* Also, we could use a JS expression

```js
const user = { name: 'Raul', url: "http://my-site.com/user/raul/avatar.png"}
const element = <img src={user.url} />;
```

```js
const user = { name: 'Raul', url: "http://my-site.com/user/raul/avatar.png"};
const element = React.createElement("img", { src: user.url });
```

* JSX becomes even better when having to deal with children elements

```js
const user = { name: 'Raul', url: "http://my-site.com/user/raul/avatar.png"};
const userElement = <div>
  <div>{user.name}</div>
  <div>
    <img src={user.url} />
  </div>
</div>;
```

Instead of:

```js
var userElement = React.createElement("div", null, 
  React.createElement("div", null, user.name), 
  React.createElement("div", null, 
    React.createElement("img", { src: user.url})
  )
);
```

* We can see this way that using JSX is way easier than keep using React.createElement with childrens

[3. Rendering Elements](https://reactjs.org/docs/rendering-elements.html)

* Elements are the smallest building blocks of React apps
* An element describes what you want to see on the screen

```js
const element = <h1>Hello, world</h1>;
```

* Unlike browser DOM elements, `React elements are plain objects`, and are cheap to create
* React DOM takes care of updating the DOM to match the React elements
* React elements are immutable. Once you create an element, you can’t change its children or attributes. This means that once React renders the element/component the only way to re-render is by calling ReactDOM.render() again with the new component
* So far we only rendered our components once so the values will not change

```js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

* We call setInterval every second passing the tick function as callback
* This means that every second the tick function will get executed
* We define our element using JSX and we get the current date/time (will change every second)
* Then we render our element insidte the element with the root id
* This way every second we're creating a new element with the updated time and rendering over and over

> React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

* This way we care about how the UI should look at any given moment rather than how to change it over time

[4. Components and Props](https://reactjs.org/docs/components-and-props.html)

* Components let you split the UI into independent, reusable pieces, and think about each piece in isolation
* Conceptually, components are like JavaScript functions
* They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen

#### Creating a functional componet

* To write our first functional component we can do it using a regular JavaScript function

```js
function Welcome(props) {
  return React.createElement('h1', null, props.name);
}
```

```js
function Welcome(props) {
  return <h1>{props.name}</h1>;
}
```

* The Welcome function will accept a single parameter that it's an object that represents all the properties that we'll pass to our component
* We return a React element
* At the end we have a JavaScript function that returns a pice of UI to be rendered (sweet)
* Also, you can use arrow functions to create your components

```js
const Welcome = (props) => React.createElement('h1', null, props.name);
```

```js
const Welcome = (props) => <h1>{props.name}</h1>; 
```

#### Class Components

* React allows us to create components using JavaScript Classes

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

* This Welcome component will work the same way as the previous one
* As it's a class component instead of a function we need to add a `render` method that will return a pice of UI
* With functions we just need to return a pice of UI
* Class component and function one don't work the same way but we'll learn more about it in the next section
* For this example we'll get the same result
* ReactDOM will render this component the same way

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

ReactDOM.render(
  <Welcome name="Xime" />,
  document.getElementById('app');
);
```

* One rule to remember is to use a uppercase letter for components name
* If we use lowercase React will consider that's a DOM tag instead
* From now on we can call components to the pice of UI that is buildt using elements
* Elements will be the lower case DOM tags

* In JavaScript you can use functions to construct new object instances
* Class in JavaScript works in a similar way
* You can read/learn more about classes:

[Class MDN doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

```js
class MyComponent {
  constructor(){}
  someMethod(){}
  get someProperty() {}
  set someProperty() {}
}
```

* React class components extends React.Component

[Extends MDN doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

```js
class MyComponent extends React.Component{
  render(){}
}
```

* This means that Reac.Component is the parent class of MyComponent
* You can learn more about the difference in JavaScript between [Factory Functions vs Constructor Functions vs Classes](https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e)
* [JavaScript.info - Class](https://javascript.info/class)
* [JavaScript Classes under the hood](https://medium.com/tech-tajawal/javascript-classes-under-the-hood-6b26d2667677)


#### Composing Components

* Components can refer to other components in their output

```js

function Message(props) {
  return <div className="Message">
    <div>{props.text}</div>
  </div>;
}

function App() {
  return <div className="App">
    <Message text="Hello" />
    <Message text="World" />
  </div>;
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
```

* React Single Page APP (SPA)
  * When building a React SPA we usually have one main App component that has all our App inside broken down into smaller components
  * You can also use React just to add a component to your current site

#### Extracting Components

* It's common to break down big components into smaller ones
* Many components might be re-used in other parts of our app

```js
function MyApp() {
  return <div className="App">
    <form>
      <input type="text" name="username" placeholder="username">
      <input type="text" name="password" placeholder="password">
      <input type="submit" value="Submit">\
    </form>
    <div>
      <ul>
        <li>Twit 1</li>
        <li>Twit 2</li>
        <li>Twit 3</li>
        <li>Twit 4</li>
      </ul>
    </div>
  </div>;
}
```

* This app has 2 sections that are a login form and a list with some content
* We can break this into smaller components

```js
function LoginForm() {
  return <form>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="password" placeholder="password" />
      <input type="submit" value="Submit" />
  </form>;
}

function List() {
  return <div>
    <ul>
      <li>Twit 1</li>
      <li>Twit 2</li>
      <li>Twit 3</li>
      <li>Twit 4</li>
    </ul>
  </div>;
}
```

* Even if they still don't do much we can have 2 components that represents the login form and a list
* Both can be reused somewhere else
* Now our App component will look better

```js
function LoginForm() {
  return <form>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="password" placeholder="password" />
      <input type="submit" value="Submit" />
  </form>;
}

function List() {
  return <div>
    <ul>
      <li>Twit 1</li>
      <li>Twit 2</li>
      <li>Twit 3</li>
      <li>Twit 4</li>
    </ul>
  </div>;
}

function MyApp() {
  return <div className="App">
    <LoginForm />
    <List />
  </div>;
}
```

* Now that we have it broken down into smaller components we could make the list dynamic
* The list will have to create list items in order to show the collection of items or in this case twits
* We can use the props concept to pass some values and return the list

```js
function List(props) {
  return <div>
    <ul>
      { props.items.map((item) => <li>{item}</li>)}
    </ul>
  </div>;
}
```

* The List component will get items as prop and it will be able to iterate each of those item and create a new list item for each of them
* It will return a new list with all the items inside
* Now we only need to pass List a collection of items to get our List back!

```js
function LoginForm() {
  return <form>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="password" placeholder="password" />
      <input type="submit" value="Submit" />
  </form>;
}

function List(props) {
  return <div>
    <ul>
      { props.items.map((item) => <li>{item}</li>)}
    </ul>
  </div>;
}

function MyApp() {
  const twits = ['Twit 1', 'Twit 2', 'Twit 3', 'Twit 4'];
  
  return <div className="App">
    <LoginForm />
    <List items={twits}/>
  </div>;
}
```

* To use this list agan we just need to...

```js
function LoginForm() {
  return <form>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="password" placeholder="password" />
      <input type="submit" value="Submit" />
  </form>;
}

function List(props) {
  return <div>
    <ul>
      { props.items.map((item) => <li>{item}</li>)}
    </ul>
  </div>;
}

function MyApp() {
  const twits = ['Twit 1', 'Twit 2', 'Twit 3', 'Twit 4'];
  const users = ['User 1', 'User 2', 'User 3', 'User 4'];
  
  return <div className="App">
    <LoginForm />
    <List items={twits}/>
    <List items={users}/>
  </div>;
}
```

* This way we can re-use the List component to list either twits or users

> Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component.

* A really helpful guide it's [Thinking In React - React Doc](https://reactjs.org/docs/thinking-in-react.html)

#### Props are Read-Only

* Whether you declare a component as a function or a class, it must never modify its own props. Consider this sum function:
* Keep your components pure and not modify your props

> All React components must act like pure functions with respect to their props.

[5. State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

* So far the only way to re-render a component is by calling ReactDOM.render()
* Class components have an internal state
* State is similar to props, but it is private and fully controlled by the component
* Every time that the state changes then the component will re-render
* Functional components have state using React Hooks
* To learn more about [React Hooks you can read the official doc](https://reactjs.org/docs/hooks-intro.html)

##### What is the difference between state and props?

> props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

* Class components can call setState() function that will `schedule` an update to a component’s state object
* When state changes, the component responds by re-rendering.

* [Tutorial - State](http://buildwithreact.com/tutorial/state)

[6. Handling Events](https://reactjs.org/docs/handling-events.html)

[7. Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)

[8. Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

[9. Forms](https://reactjs.org/docs/forms.html)

[10. Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

[11. Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)

To learn React by examples check out [Awesome React repo](https://github.com/enaqx/awesome-react)

## Adding React Router
[The easiest tutorial on React Router V4 you'll ever find build a SPA](https://itnext.io/the-easiest-tutorial-on-react-router-v4-youll-ever-find-build-a-single-page-application-in-44c453f4123b)

[React Router V4 practical tutorial](https://auth0.com/blog/react-router-4-practical-tutorial)

[Getting started with React Router](https://codeburst.io/getting-started-with-react-router-5c978f70df91)

[A Simple React Router v4 Tutorial](https://blog.pshrmn.com/simple-react-router-v4-tutorial/)

[React Router Protected Routes Authentication](https://tylermcginnis.com/react-router-protected-routes-authentication)

Tools:
* [React.js cheatsheet](https://devhints.io/react)

Examples / Tutorials
[Learn about Create React App](https://create-react-app.dev/docs/getting-started)
[Dev.to - 11 React Examples](https://dev.to/drminnaar/11-react-examples-2e6d)
[tylermcginnis.com - free React Bootcamp](https://tylermcginnis.com/free-react-bootcamp)
[30 Days of React](https://www.fullstackreact.com/30-days-of-react)
[scotch.io - Getting started with React (2019 edition)](https://scotch.io/starters/react/getting-started-with-react-2019-edition)

Extra
[React interview questions](https://www.edureka.co/blog/interview-questions/react-interview-questions)