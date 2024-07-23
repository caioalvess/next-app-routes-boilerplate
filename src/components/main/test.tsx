import { render, screen } from "@testing-library/react";

import Main from ".";

describe("<Main />", () => {
  it("should render the heading", () => {
    // render the component
    const { container } = render(<Main />);

    // search for the element and check its existence
    expect(
      screen.getByRole("heading", { name: /next app routes boilerplate/i }),
    ).toBeInTheDocument();

    // generate snapshot
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the colors correctly", () => {
    // render the component
    const { container } = render(<Main />);

    // checks if the background-colors are correct
    expect(container.firstChild).toHaveStyle({
      "background-color": "#06092b",
    });
  });
});
