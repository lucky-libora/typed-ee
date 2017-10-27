# TypedEventEmitter

Simple strict typed interface for EventEmitter

## Installation

```bash
$ npm install --save typed-ee
```


## Usage

After installation the only thing you need to do is require the module:

```js
import {TypedEventEmitter} from "typed-ee/lib/TypedEventEmitter";

class MyEventEmitter extends TypedEventEmitter {

  public messageEvent = this.event<string>('message');

}

const ee = new MyEventEmitter();

ee.messageEvent.on((s: string) => console.log(s));

ee.emit('Hello world');

//also available once and off methods

ee.messageEvent.once((s: string) => console.log(s));

ee.messageEvent.off((s: string) => console.log(s));


```

http://nodejs.org/api/events.html

## License

[MIT](LICENSE)
