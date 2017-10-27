import {EventEmitter} from "event-emitter3";
import {TypedEvent} from "./TypedEvent";

export class TypedEventEmitter extends EventEmitter {

  event<T>(name: string): TypedEvent<T> {
    return new TypedEvent<T>(name, this);
  }

}