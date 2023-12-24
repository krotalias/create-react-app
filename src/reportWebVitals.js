/**
 * By default, Create React App includes a performance relayer that
 * allows you to measure and analyze the performance of your application
 * using different metrics.
 *
 * <p>To measure any of the supported metrics, you only need to pass a
 * function into the reportWebVitals function in index.js</p>
 *
 * @param {function} onPerfEntry this function is fired when the final values
 * for any of the metrics have finished calculating on the page.<br>
 * You can use it to log any of the results to the console or send to a particular endpoint.
 * @see https://create-react-app.dev/docs/measuring-performance/
 */
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
