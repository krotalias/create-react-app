/**
 * @file
 *
 * Summary.
 * <p>We import some stuff, and we export a function called App.</p>
 *
 * <p>The things we import in this case are a JavaScript library
 * (the react npm package), an {@link https://en.wikipedia.org/wiki/SVG SVG} image, and a CSS file.</p>
 *
 * <p>{@link https://create-react-app.dev create-react-app} is set up in a way
 * that allows us to import images and CSS to use in our JavaScript,
 * but this is not something you need to care about now.<br>
 * What you need to care about is the concept of a {@link React.Component component}.</p>
 *
 * <p>{@link App} is a function that in the original example returns something
 * that at first sight looks quite strange.<br>
 * It looks like HTML but it has some JavaScript embedded into it.</p>
 *
 * <p>That is {@link https://react.dev/learn/writing-markup-with-jsx JSX},
 * a special language we use to build a component's output.<br>
 * In addition to defining some JSX to return, a component has several other characteristics.</p>
 *
 * A component can have its own state, which means it encapsulates some variables that other components
 * can't access, unless this component exposes this state to the rest of the application.
 *
 * <p>A component can also receive data from other components. In this case, we talk about
 * {@link https://react.dev/learn/passing-props-to-a-component props}.</p>
 *
 * <p>Usage: </p>
 * <ul>
 *  <li>To install {@link https://www.npmjs.com/package/jsdoc jsdoc}, yarn and {@link https://pnpm.io pnpm}:</li>
 *  <ul>
 *    <li>sudo npm install --global yarn</li>
 *    <li>sudo npm install -g jsdoc</li>
 *    <li>sudo npm install -g pnpm</li>
 *  </ul>
 *
 *  <li>To run the version with modules and Node.js version
 *    {@link https://nodejs.org/en/blog/release/v18.16.0 18} or
 *    {@link https://nodejs.org/en/blog/release/v20.10.0 20}:
 *  </li>
 *  <ul>
 *    <li>cd create-react-app</li>
 *    <li>{@link https://www.npmjs.com npm} or {@link https://yarnpkg.com yarn} install</li>
 *    <li>{@link https://www.npmjs.com/package/react npm} or {@link https://yarnpkg.com/package/react yarn} start</li>
 *  </ul>
 *
 *  <li>To use vercel {@link https://vercel.com/docs/cli cli} to run
 *  vercel {@link https://vercel.com/docs/cli/dev dev} before deploying:</li>
 *  <ul>
 *    <li>cd create-react-app</li>
 *    <li>{@link https://pnpm.io pnpm} i -g vercel or
 *        {@link https://pnpm.io pnpm} i -g vercel@latest (to update to the latest version)</li>
 *    <li>{@link https://www.npmjs.com npm} or {@link https://yarnpkg.com yarn} install</li>
 *    <li>{@link https://vercel.com vercel} dev</li>
 *  </ul>
 * </ul>
 *
 * @author Paulo Roma
 * @since 08/10/2021
 * @see <a href="../src/index.js">source</a>
 * @see <a href="https://create-react-app-beige-mu-74.vercel.app">link</a>
 * @see <a href="../package.json">package.json</a>
 * @see <a href="https://flaviocopes.com/books-dist/react-handbook.pdf#page=13">React Handbook</a>
 * @see  <iframe width="400" height=320" src="https://create-react-app-beige-mu-74.vercel.app"></iframe>
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
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
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
/**
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
*/

/**
 * Create a root to display React components inside a browser DOM node.
 * After you’ve created a root, you need to call root.render
 * to display a React component inside of it.
 * @method createRoot
 * @memberof external:react-dom
 * @see https://react.dev/reference/react-dom/client/createRoot
 * @see https://react.dev/reference/react/StrictMode
 */
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals(sendToVercelAnalytics);
