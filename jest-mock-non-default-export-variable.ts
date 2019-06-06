/* config.ts */
/* config.ts */
interface IConfig {
  prop: string,
}

const config: IConfig = {
  prop: 'xyz'
}

export { IConfig, config }



/* Logger.ts - uses destructured import */
import { config } from './config';

export class Logger {
  getConfigProp() {
    return config.prop
  }
}



/* Logger.test.ts - need different implementations in different tests */
describe('Logger', () => {
  afterEach(() => {
    jest.resetModules();
  })

  it('unmocked', () => {
    const { Logger } = require('./Logger');

    const instance = new Logger();
    expect(instance.getConfigProp()).toBe('xyz');
  })

  it('mock', () => {
    jest.doMock('./config', () => ({ config: { prop: 'foo' } }))
    const { Logger } = require('./Logger');

    const instance = new Logger();
    expect(instance.getConfigProp()).toBe('foo');
  })

  it('another mock', () => {
    jest.doMock('./config', () => ({ config: { prop: 'baz' } }))
    const { Logger } = require('./Logger');

    const instance = new Logger();
    expect(instance.getConfigProp()).toBe('baz');
  })
})
