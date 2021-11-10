import { truncateString } from "../stringUtils";

const mockString = "Testing string,Testing string,Testing string ";
const mockNumber = 20;
const mockShortString = "Hello";

describe("truncateString", () => {
  it("should truncate string to specified number", () => {
    const result = truncateString(mockString, mockNumber);
    expect(result.length).toBe(mockNumber);
  });
  it("should return default string if length < number", () => {
    const result = truncateString(mockShortString, mockNumber);
    expect(result).toBe(mockShortString);
  });
});
