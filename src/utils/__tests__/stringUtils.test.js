import { truncateString } from "../stringUtils";

const mockData = {
  string: "Testing string,Testing string,Testing string ",
  number: 20,
  shortString: "Hello",
};

describe("truncateString", () => {
  it("should truncate string to specified number", () => {
    const result = truncateString(mockData.string, mockData.number);
    expect(result.length).toBe(20);
  });
  it("should return default string if length < number", () => {
    const result = truncateString(mockData.shortString, mockData.number);
    expect(result).toBe(mockData.shortString);
  });
});
