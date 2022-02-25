import React from "react";
import { render } from "test-utils";

import Heading from "./Heading";

test("match snapshot", () => {
  const { asFragment } = render(<Heading>Title</Heading>);

  expect(asFragment()).toMatchSnapshot();
});

test("match snapshot with strong", () => {
  const { asFragment } = render(
    <Heading>
      <h1>
        <strong>Title</strong>
      </h1>
    </Heading>
  );

  // Expects

  expect(asFragment()).toMatchSnapshot();
});
