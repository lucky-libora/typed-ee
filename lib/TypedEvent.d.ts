import { EventEmitter } from "event-emitter3";
export declare class TypedEvent<T> {
    name: string;
    private eventEmitter;
    constructor(name: string, eventEmitter: EventEmitter);
    emit(arg: T): boolean;
    off(cb: (T) => any): TypedEvent<T>;
    on(cb: (T) => any): TypedEvent<T>;
    once(cb: (T) => any): TypedEvent<T>;
}
