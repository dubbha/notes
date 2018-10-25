jest.spyOn(console, 'log').mockImplementationOnce(jest.fn());

shallow(<Component {...props} />);

expect(global.console.log).toBeCalledWith('log entry');

/*
http://facebook.github.io/jest/docs/en/jest-object.html#jestspyonobject-methodname
jest.spyOn() is available in Jest 19.0.0+

Before 19.0.0 you could temporarily hush the console like so:
*/
const warn = global.console.log;                            // backup the log method
global.console.warn = jest.fn();                            // replace the log method with jest.fn()

shallow(<Component {...props} />);

expect(global.console.log).toBeCalledWith('log entry');

global.console.warn = warn;                                 // restore the log method
