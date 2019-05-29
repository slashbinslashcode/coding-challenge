import { sortObjectsById } from "./TestOne";

const HARRY = {
	id: 2,
	name: "Harry"
};

const HERMIONE = {
	id: 1,
	name: "Hermione"
};
const RONALD = {
	id: "3",
	name: "Ron"
};
const SIRIUS = {
	id: 4,
	name: "Sirius"
};
const DOBBY = {
	id: 4,
	name: "Dobby"
};

const TEST_DATA_1 = [HARRY, HERMIONE, RONALD, SIRIUS, DOBBY];

it("should return an array", () => {
	const result = sortObjectsById(TEST_DATA_1);
	expect(Array.isArray(result)).toBe(true);
});

it("should have all items still in the array", () => {
	const result = sortObjectsById(TEST_DATA_1);
	expect(result).toHaveLength(TEST_DATA_1.length);
});

it("should not mutate the array", () => {
	const result = sortObjectsById(TEST_DATA_1);
	expect(result).not.toBe(TEST_DATA_1);
});

it("should sort the items based on ID", () => {
	const result = sortObjectsById(TEST_DATA_1);
	expect(result).toEqual([HERMIONE, HARRY, RONALD, DOBBY, SIRIUS]);
});

it("should throw an error of an array is not provided", () => {
	expect(() => sortObjectsById("")).toThrow();
});
