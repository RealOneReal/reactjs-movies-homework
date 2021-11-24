import { render } from "@testing-library/react";
import ErrorBoundary from "../ErrorBoundary";

const mockComponent = <div data-testid="test">Hello</div>;
const MockErrorComponent = () => {
  throw Error("Boom!");
};
jest.spyOn(window.console, "error");

describe("ErrorBoundary", () => {
  it("should render children component without error", () => {
    const { container } = render(
      <ErrorBoundary>{mockComponent}</ErrorBoundary>
    );
    expect(container).toMatchSnapshot();
  });
  it("should render saved JSX from ErrorBoundary ", () => {
    const { container } = render(
      <ErrorBoundary>
        <MockErrorComponent />
      </ErrorBoundary>
    );
    expect(console.error).toBeCalled();
    expect(container).toMatchSnapshot();
  });
});
