import {EventEmitter} from "event-emitter3";

export class TypedEvent<T> {

  constructor(public name: string, private eventEmitter: EventEmitter) {

  }

  asyncEmit(arg: T): boolean {
    return this.eventEmitter.asyncEmit(this.name, arg);
  }

  emit(arg: T): boolean {
    return this.eventEmitter.emit(this.name, arg);
  }

  off(cb: (arg: T) => any): TypedEvent<T> {
    this.eventEmitter.off(this.name, cb);
    return this;
  }

  on(cb: (arg: T) => any): TypedEvent<T> {
    this.eventEmitter.on(this.name, cb);
    return this;
  }

  once(cb: (arg: T) => any): TypedEvent<T> {
    this.eventEmitter.once(this.name, cb);
    return this;
  }
}