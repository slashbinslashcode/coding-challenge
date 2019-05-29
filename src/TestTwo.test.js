import { generateSortingMemoization } from "./TestTwo";
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

it("should return an array", function() {
	const result = generateSortingMemoization(sortObjectsById)(TEST_DATA_1);
	expect(Array.isArray(result)).toBe(true);
});

it("should call the return function once on initial call", () => {
	const fn = jest.fn();
	const sortFunction = generateSortingMemoization(fn);
	sortFunction(TEST_DATA_1);
	expect(fn).toHaveBeenCalledTimes(1);
});

it("should call the return function once when the call has been memoized", () => {
	const fn = jest.fn();
	const sortFunction = generateSortingMemoization(fn);
	sortFunction(TEST_DATA_1);
	sortFunction(TEST_DATA_1);
	sortFunction(TEST_DATA_1);
	sortFunction(TEST_DATA_1);
	sortFunction(TEST_DATA_1);
	expect(fn).toHaveBeenCalledTimes(1);
});

it("should call the return function twice when the call is made with different params", () => {
	const fn = jest.fn();
	const sortFunction = generateSortingMemoization(fn);
	sortFunction(TEST_DATA_1);
	sortFunction([...TEST_DATA_1]);
	expect(fn).toHaveBeenCalledTimes(2);
});

it("should return a new reference on the first call", () => {
	const result = generateSortingMemoization(sortObjectsById)(TEST_DATA_1);
	expect(result).not.toBe(TEST_DATA_1);
});

it("should return the same reference the second time its called, when the arguments remain identical", () => {
	const sortFunction = generateSortingMemoization(sortObjectsById);
	const result_1 = sortFunction(TEST_DATA_1);
	const result_2 = sortFunction(TEST_DATA_1);
	expect(result_1).toBe(result_2);
});

it("should return different reference the second time its called, when the arguments are not the same", () => {
	const sortFunction = generateSortingMemoization(sortObjectsById);
	const result_1 = sortFunction(TEST_DATA_1);
	const result_2 = sortFunction([...TEST_DATA_1]);
	expect(result_1).not.toBe(result_2);
});

it("should still cache the result when there are multiple sorting memo functions created", () => {
	const fn1 = jest.fn();
	const fn2 = jest.fn();

	const sortFunction1 = generateSortingMemoization(fn1);
	const sortFunction2 = generateSortingMemoization(fn2);

	sortFunction1(TEST_DATA_1);
	sortFunction2(TEST_DATA_1);

	sortFunction1(TEST_DATA_1);
	sortFunction2(TEST_DATA_1);

	expect(fn1).toHaveBeenCalledTimes(1);
	expect(fn2).toHaveBeenCalledTimes(1);
});
