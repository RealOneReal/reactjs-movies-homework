import { render } from "@testing-library/react";
import SearchBar from "../SearchBar";
import LanguageSwitcher from "../LanguageSwitcher";
import Header from "../Header";

jest.mock("../SearchBar", () => () => "SearchBar");

jest.mock("../LanguageSwitcher", () => () => "LanguageSwitcher");

describe("Header", () => {
  it("should be rendered", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
