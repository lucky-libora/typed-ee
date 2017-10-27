import { EventEmitter } from "event-emitter3";
import { TypedEvent } from "./TypedEvent";
export declare class TypedEventEmitter extends EventEmitter {
    event<T>(name: string): TypedEvent<T>;
}
