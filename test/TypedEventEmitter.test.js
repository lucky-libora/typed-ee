const {expect} = require('chai');
const TypedEventEmitter = require('../');

describe('TypedEventEmitter test', () => {

  it('#on', cb => {
    const tee = new TypedEventEmitter();
    const test = tee.event('test');
    test.on(data => cb());
    test.emit({a: 1});
  });

  it('#once', cb => {
    const tee = new TypedEventEmitter();
    const test = tee.event('test');
    test.once(data => cb());
    test.emit({a: 1});
  });

  it('#off', cb => {
    const tee = new TypedEventEmitter();
    const test = tee.event('test');
    const fn = data => cb(new Error('Should not call'));
    test.on(fn);
    test.off(fn);
    test.emit({a: 1});
    cb();
  });

});