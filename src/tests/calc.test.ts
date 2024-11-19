import { add } from "../App";

describe("Calculation comma test", ()=>{
    it("should return 0 for empty value", ()=>{
        expect(add("")).toBe(0)
    });
    it("should return value it self if only one 1 character is provided", ()=>{
        expect(add("2")).toBe(2)
    });
    it("should return sum of comma separated", ()=>{
        expect(add("1,2,3")).toBe(6)
    });
    it("should return sum by replacing newline with commas", ()=>{
        expect(add("1\n2,3")).toBe(6)
    });
    it("should handle delimiter and return sum by following above test cases as well", ()=>{
        expect(add("//;\n1;2")).toBe(3)
    });
    it("should not allow negative numbers", () => {
        expect(() => add("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4")
    });
});