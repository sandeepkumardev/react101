import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Hello</h1>;

// React components
// Class based components - OLD
// Functional components - NEW

const Parent = () => {
  return (
    <div>
      <div>Parent</div>
      <Child />
      {Child()}
      <Child></Child>
      <App />
      {heading}
      {100 + 200}
      {console.log("hello")}
    </div>
  );
};

const Child = () => <div>Child</div>;

function App() {
  return <div>Normal function</div>;
}

console.log(App);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Parent />);
