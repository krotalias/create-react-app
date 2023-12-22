/**
 * @file
 *
 * Summary.
 * <p>The first React component, the App component, defined in the
 * default application built by {@link https://create-react-app.dev create-react-app}.</p>
 *
 * <p>This looks like HTML, but it's not really HTML. It's a little different.
 * And it's a bit strange to have this code inside a JavaScript file. This does not
 * look like JavaScript at all!</p>
 *
 * <p>Under the hood, React will process the {@link https://react.dev/learn/writing-markup-with-jsx JSX}
 * and it will transform it
 * into JavaScript that the browser will be able to interpret.<br>
 * Therefore, we're writing JSX but, in the end, there's a translation step
 * (carried out by a toolchain called {@link https://babeljs.io/docs/babel-plugin-transform-react-jsx Babel})
 * that makes it digestible to a JavaScript interpreter.</p>
 *
 * <p>{@link https://react.dev React} gives us this interface for one reason:
 * it's easier to build UI interfaces using JSX,
 * once you get more familiar with it, of course.<br>
 * Although, JSX lets you easily compose a UI, there are differences from "<i>normal HTML</i>" that you need to know.</p>
 *
 * @author Paulo Roma
 * @since 08/10/2021
 * @see <a href="../src/App.js">source</a>
 * @see <a href="https://flaviocopes.com/books-dist/react-handbook.pdf#page=14">React Handbook</a>
 */

import logo from "./logo.svg";
import "./App.css";

/**
 * <p>{@link https://react.dev/reference/react/Component Component}
 * is the base class for the React components defined as JavaScript classes.</p>
 *
 * <p>Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”)
 * and return {@link https://www.pragimtech.com/blog/reactjs/introduction-to-react-elements/ React elements}
 * describing what should appear on the screen.</p>
 *
 * <p>Elements are the smallest building blocks of React apps. An element specifies what should be there in our UI.<br>
 * An Element is a plain object describing what we want to appear in terms of the DOM nodes.</p>
 *
 * <p>Typically, you will define components as functions instead.</p>
 * <p>This function is a valid React component because it accepts a single “props”
 * (which stands for properties) object argument with data and returns a
 * {@link https://react.dev/reference/react/createElement React element}.<br>
 * We call such components “function components” because they are literally JavaScript functions.</p>
 *
 * @returns {React.Element} a react element with a paragraph, an image, and an anchor.
 * @see {@link React.Component}
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
