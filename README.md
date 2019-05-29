# Test Requirements

There have been two coding challenges designed to assess a developers capabilities when it comes to Javascript development, task comprehention and problem solving.

## Install

The tests have been containerised with docker not only to assist with development, but this also emulates the development environment within The BetMakers team. To build the image, run the following command:

```
docker-compose build install
```

## Running Tests

It is required that you complete challenge one, before moving onto challenge two. Each challenge will be implementing a module in accordance with the tests. Tests will be run with jest

# Challenge One

| File Type | Path                  |
| --------- | --------------------- |
| File      | ./src/TestOne.js      |
| Test      | ./src/TestOne.test.js |

```
docker-compose up challengeone
```

This challenge is to implement a sorting function that will meet all requirements in the test suite. You will accept an array of objects, where each object has an `id` property and a `name` property, where you will sort the array in ascending order of the id. If the id's match, then use the name.

You should use the test suite as the rules, however the following outlines the conditions

- Treat the id as an integer
- Do not mutate the array
- The result should be an array of objects sorted by the id property

# Challenge Two

| File Type | Path                  |
| --------- | --------------------- |
| File      | ./src/TestTwo.js      |
| Test      | ./src/TestTwo.test.js |

```
docker-compose up challengetwo
```

This challenge requires you to use the function you created in Challenge one. You are to create a Higher Order Function (HoF) that creates a memoized cache of the results of the previous function call. This means that the first time the function is called, it should calculate the results of the sort function. But if that function is called again with the exact same arguments, then it should simply return the results of the previous call.
