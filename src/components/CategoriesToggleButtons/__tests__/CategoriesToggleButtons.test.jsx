import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import CategoriesToggleButtons from "../CategoriesToggleButtons";
import userEvent from "@testing-library/user-event";

describe("CategoriesToggleButtons", () => {
  it("should be render", () => {
    const tree = renderer.create(<CategoriesToggleButtons />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should have three buttons", () => {
    const { getAllByRole } = render(<CategoriesToggleButtons />);
    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(3);
  });
  it("should have active button after click", () => {
    render(<CategoriesToggleButtons />);
    const upcomingButton = screen.getByText(/upcoming/i);
    userEvent.click(upcomingButton);
    const isPressed = upcomingButton.getAttribute("aria-pressed");
    expect(isPressed).toBeTruthy();
  });
});
