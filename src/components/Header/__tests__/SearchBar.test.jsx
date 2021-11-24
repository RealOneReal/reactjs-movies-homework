import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
  it("should be rendered", () => {
    const { container } = render(<SearchBar />);
    expect(container).toMatchSnapshot();
  });
  it("should change value", () => {
    const { getByRole } = render(<SearchBar />);
    const input = getByRole("textbox");
    userEvent.type(input, "hello from Brest");
    expect(input).toHaveValue("hello from Brest");
  });
});
