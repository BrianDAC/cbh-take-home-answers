# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

First I change the variables from CONSTANT_CASE to UpperCamelCase because it is more common in Javascript and more readable.
Then I check if there is any event sent, if not we just return the default key
I set the key to hash
Then if partitionKey is sent, we need to validate it
 - if is not a string we return it converting it to a string
 - if the length is less than 256 we return it
 - if none of the above I set the variable useKeyToHash to true
Then I check if useKeyToHash is true or not, if it is true I set the key as it is, if not I set the key to hash converting it to a string
Finally we hash with the key and return it