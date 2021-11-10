import { render } from "@testing-library/react";
import ActorCardContainer from "../ActorCardContainer";
import ActorCardList from "../../../components/ActorCardList/ActorCardList";

jest.mock(
  "../../../components/ActorCardList/ActorCardList",
  () => () => "ActorCardList"
);

describe("ActorCardContainer", () => {
  it("should be rendered", () => {
    const { container } = render(<ActorCardContainer />);
    expect(container).toMatchSnapshot();
  });
});
