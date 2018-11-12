/* Formatter factory - exported function */
export function Formatter() {
  const format = value => Math.floor((value ** 2) * Math.PI);

  return {
    format,
  }
}

/* Formatter/index - is then re-exported as default in index */
export { Formatter as default } from './Formatter'

/* FormatterUser - uses Formatter as its dependency */
import { Formatter } from './Formatter'

export function FormatterUser() {
  try {
    return Formatter()                          // either returns a Formatter instance
  } catch (err) {
    throw Error(`error received: ${err}`);      // or re-throws if fails to
  }
}

/* FormatterUser.test - need to test both cases, while mocking the external dependency */
import { FormatterUser } from './FormatterUser'
import Formatter from '../Formatter'    // import from Formatter/index

jest.mock('./Formatter');   // Formatter factory is now a mock

describe('FormatterUser', () => {
  it('should return formatter output - happy path dependency mock', () => {
    Formatter.mockImplementationOnce(() => ({     // TS: (Formatter as jest.Mock).mockImplementationOnce()
      format(value) { return value }
    }))
    expect(FormatterUser().format(2)).toBe(2)
  })

  it('should re-throw if formatter has thrown - error path dependency mock', () => {
    Formatter.mockImplementationOnce(() => ({
      format() { throw new Error('error') }
    }))
    expect(() => FormatterUser().format(2)).toThrow(Error);
  })
})



/* https://jestjs.io/docs/en/es6-class-mocks */
