import renderer from "react-test-renderer";
import SearchBar from "../SearchBar";
import LanguageSwitcher from "../LanguageSwitcher";
import Header from "../Header";

jest.mock("../SearchBar", () => {
  return "SearchBar";
});

jest.mock("../LanguageSwitcher", () => {
  return "LanguageSwitcher";
});

describe("Header", () => {
  it("should render", () => {
    const header = renderer.create(<Header />);
    const tree = header.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
