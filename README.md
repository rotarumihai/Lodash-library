# Lodash Library

## Overview

The Lodash Library is a modern JavaScript utility library designed to provide modularity, performance, and additional functionality. This library offers a comprehensive set of methods for common programming tasks, making it a versatile tool for developers. Each method has been inspired by and adapted from the popular lodash library, and the code aims to deliver clean and efficient solutions.

## Usage

To use the Lodash Library, follow these steps:

1. **Run the Main Code:**
    - Execute the main code by typing the following command in your terminal:
      ```bash
      node _.js
      ```
    - This will run the main code that defines the utility object `_` with various methods.

2. **Run Individual Tests:**
    - Test files for each method are located in the `test` directory.
    - Execute a specific test by typing the following command:
      ```bash
      node test/{filename}.js
      ```
      Replace `{filename}` with the name of the test file you want to run.

## Method List

### 1. `clamp(number, lower, upper)`

   - Restricts a number to be within a specified range.

### 2. `inRange(number, start, end)`

   - Checks if a number is within a specified range.

### 3. `words(string)`

   - Splits a string into an array of words.

### 4. `pad(stringToPad, length)`

   - Pads a string with spaces to a specified length.

### 5. `has(object, key)`

   - Checks if an object has a specified key.

### 6. `invert(object)`

   - Inverts the keys and values of an object.

### 7. `findKey(object, predicate)`

   - Finds the first key in an object that satisfies a given predicate.

### 8. `drop(array, number)`

   - Creates a new array with the specified number of elements removed from the beginning.

### 9. `dropWhile(array, predicate)`

   - Creates a new array with elements removed from the beginning until the predicate returns false.

### 10. `chunk(array, size)`

    - Breaks an array into smaller arrays of a specified size.

## Acknowledgments

The Lodash Library is inspired by the [lodash](https://lodash.com/) library, a widely used JavaScript utility library. Special thanks to the lodash team for their contributions to the open-source community.

Feel free to explore, test, and integrate these methods into your projects for a streamlined development experience!
