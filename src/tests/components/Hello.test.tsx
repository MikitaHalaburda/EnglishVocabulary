import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Hello, HelloProps } from "../../components/Hello";

let container: HTMLElement = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const compProps: HelloProps = {
  compiler: "TS",
  framework: "React",
};

it("renders with or without a name", () => {
  act(() => {
    render(
      <Hello compiler={compProps.compiler} framework={compProps.framework} />,
      container
    );
  });
  expect(container.textContent).toBe("Hello from TS and React!");
});
