import React from "react";

const Blog = () => {
  return (
    <div className="p-3 flex justify-center">
      <section className="w-3/4">
        <h1 className="text-3xl text-center font-bold">Some Knowledge about react, hook and context API</h1>
        <article className="border border-4 border-sky-500 mt-9 p-3">
          <div>
            <h1 className="text-2xl font-bold text-center">
              What is the purpose of react ?
            </h1>
            <p>
              {" "}
              <span className="text-xl font-semibold">Ans:</span> <br />
              React Router is a JavaScript framework that lets us handle client
              and server-side routing in React applications. It enables the
              creation of single-page web or mobile apps that allow navigating
              without refreshing the page. It also allows us to use browser
              history features while preserving the right application view.
            </p>
          </div>
        </article>

        <article className="border border-4 border-sky-500  p-3 mt-3">
          <div>
            <h1 className="text-2xl font-bold text-center">
              How does Context API work ?
            </h1>
            <p>
              {" "}
              <span className="text-xl font-semibold">Ans:</span> <br />
              Context API allows data to be passed through a component tree
              without having to pass props manually at every level. This makes
              it easier to share data between components.With Context API, we
              can create a “context” that holds the user's shopping information,
              like their cart and order history. Then, you can use that context
              in both the shopping cart and the order history component, without
              having to pass the information down through props.
            </p>
          </div>
        </article>

        <article className="border border-4 border-sky-500 p-3 mt-3">
          <div>
            <h1 className="text-2xl font-bold text-center">
              What is useRef Hooks and how it's work ?
            </h1>
            <p>
              <span className="text-xl font-semibold">Ans:</span> <br />
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.efs are a function provided by React to access the DOM
              element and the React element that you might have created on your
              own. They are used in cases where we want to change the value of a
              child component, without making use of props and all. They have
              wide functionality as we can use callbacks with them.J
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Blog;
