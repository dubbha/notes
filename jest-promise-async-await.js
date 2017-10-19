/*
If your code uses promises, there is a simpler way to handle asynchronous tests.
Just return a promise from your test, and Jest will wait for that promise to resolve.
If the promise is rejected, the test will automatically fail.
Be sure to return the promise - if you omit this return statement, your test will complete before fetchData completes.
*/
test('the data is peanut butter', () => {
  return fetchData().then((data) => {
    expect(data).toBe('peanut butter');
  });
});

/*
If your code uses async and await, you can use these in your tests as well.
To write an async test, just use the async keyword in front of the function passed to test.
In this case, async and await are effectively just syntactic sugar for the same logic as the promises example uses.
*/
test('the data is peanut butter', async () => {
  let data = await fetchData();
  expect(data).toBe('peanut butter');
});

/*
https://jest-bot.github.io/jest/docs/asynchronous.html#promises
https://jest-bot.github.io/jest/docs/asynchronous.html#async-await
*/
