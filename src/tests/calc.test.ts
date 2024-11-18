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
    })
});