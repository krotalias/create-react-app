/**
 * @file
 *
 * Summary.
 * <p>We import some things, and we export a function called App.</p>
 *
 * <p>The things we import in this case are a JavaScript library
 * (the react npm package), an SVG image, and a CSS file.</p>
 *
 * <p>{@link https://create-react-app.dev create-react-app} is set up in a way that allows us to import images and CSS to use in our JavaScript,
 * but this is not something you need to care about now. What you need to care about is the concept of a component.</p>
 *
 * <p>App is a function that in the original example returns something that at first sight looks quite strange.
 * It looks like HTML but it has some JavaScript embedded into it.</p>
 *
 * <p>That is JSX, a special language we use to build a component's output. We'll
 * talk more about JSX in the next section.</p>
 *
 * <p>In addition to defining some JSX to return, a component has several other characteristics.</p>
 *
 * A component can have its own state, which means it encapsulates some variables that other components
 * can't access unless this component exposes this state to the rest of the application.
 *
 * <p>A component can also receive data from other components. In this case, we talk about props.</p>
 *
 * @author Paulo Roma
 * @since 08/10/2021
 * @see <a href="../src/index.js">source</a>
 * @see <a href="https://create-react-app-beige-mu-74.vercel.app">link</a>
 * @see <a href="../package.json">package.json</a>
 * @see <a href="https://flaviocopes.com/books-dist/react-handbook.pdf#page=13">React Handbook</a>
 */

/**
 * React module.
 * @external react
 * @see https://legacy.reactjs.org/docs/react-api.html
 */

/**
 * React DOM module.
 * @external react-dom
 * @see https://legacy.reactjs.org/docs/react-dom.html
 */

/**
 * Create React App is a comfortable environment for learning React,
 * and is the best way to start building a new single-page application in React.
 * It sets up your development environment so that you can use the latest JavaScript features,
 * provides a nice developer experience, and optimizes your app for production.
 * @class React
 * @memberof external:react
 * @see https://legacy.reactjs.org/docs/create-a-new-react-app.html
 */

/**
 * React lets you define components as classes or functions.
 * Components defined as classes currently provide more features which are described in detail on this page.
 * To define a React component class, you need to extend React.Component.
 *
 * <p>The only method you must define in a React.Component subclass is called render().
 * All the other methods described on this page are optional.</p>
 * @class React.Component
 * @memberof React
 * @see https://legacy.reactjs.org/docs/react-component.html
 * @see https://react.dev/reference/react/Component
 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";

/**
 * Render a React element into the DOM in the supplied container and
 * return a reference to the component (or returns null for stateless components).
 * <p>Deprecated.</p>
 * @method render
 * @memberof external:react-dom
 * @see https://reactjs.org/docs/react-dom.html#render
 * @see https://react.dev/reference/react-dom/render
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

reportWebVitals(sendToVercelAnalytics);
