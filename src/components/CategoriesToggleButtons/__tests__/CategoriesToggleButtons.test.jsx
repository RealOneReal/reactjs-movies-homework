import { render } from "@testing-library/react";
import CategoriesToggleButtons from "../CategoriesToggleButtons";

describe("CategoriesToggleButtons", () => {
  it("should be rendered", () => {
    const { container } = render(<CategoriesToggleButtons />);
    expect(container).toMatchSnapshot();
  });
});
