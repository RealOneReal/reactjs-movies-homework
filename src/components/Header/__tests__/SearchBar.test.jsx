import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
  it("should be render", () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should change value", () => {
    const { getByRole } = render(<SearchBar />);
    const input = getByRole("textbox");
    userEvent.type(input, "hello from Brest");
    expect(input).toHaveValue("hello from Brest");
  });
});
