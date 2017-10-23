jest.spyOn(console, 'log').mockImplementationOnce(jest.fn());

shallow(<Component {...props} />);

expect(global.console.log).toBeCalledWith('log entry');

/*
http://facebook.github.io/jest/docs/en/jest-object.html#jestspyonobject-methodname
*/
