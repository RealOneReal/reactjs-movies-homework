import renderer from "react-test-renderer";
import ErrorBoundary from "../ErrorBoundary";

const mockComponent = <div data-testid="test">Hello</div>;
const MockErrorComponent = () => {
  throw Error("Boom!");
};
window.console = { error: jest.fn() };

describe("ErrorBoundary", () => {
  it("should render children component without error", () => {
    const tree = renderer
      .create(<ErrorBoundary children={mockComponent} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render error", () => {
    const tree = renderer
      .create(
        <ErrorBoundary>
          <MockErrorComponent />
        </ErrorBoundary>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
