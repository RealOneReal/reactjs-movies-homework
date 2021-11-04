import renderer from "react-test-renderer";
import MovieCard from "../../MovieCard/MovieCard";
import MovieCardList from "../MovieCardList";

const mockData = {
  results: [
    {
      original_title: "Brat 1",
      id: 1,
    },
    {
      original_title: "Brat 2",
      id: 2,
    },
    {
      original_title: "Brat 3",
      id: 3,
    },
  ],
};

jest.mock("../../MovieCard/MovieCard", () => {
  return "MovieCard";
});

describe("MovieCardList", () => {
  it("should be render", () => {
    const tree = renderer.create(<MovieCardList {...mockData} />);
    expect(tree).toMatchSnapshot();
  });
});
