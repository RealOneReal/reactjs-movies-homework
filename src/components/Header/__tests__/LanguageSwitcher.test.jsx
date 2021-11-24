import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LanguageSwitcher from "../LanguageSwitcher";

describe("LanguageSwitcher", () => {
  it("should be rendered", () => {
    const { container } = render(<LanguageSwitcher />);
    expect(container).toMatchSnapshot();
  });
  it("should have default value EN ", () => {
    const { getByText } = render(<LanguageSwitcher />);
    const value = getByText(/EN/i);
    expect(value).toHaveTextContent("EN");
  });
  it("should have possibility to change value for RU", () => {
    const { getByRole, getByText } = render(<LanguageSwitcher />);
    const button = getByRole("button");
    userEvent.click(button);
    const option = getByText(/RU/i);
    userEvent.click(option);
    const chosenValue = getByRole("button");
    expect(chosenValue).toHaveTextContent("RU");
  });
});
