import { EventEmitter } from "event-emitter3";
export declare class TypedEvent<T> {
    name: string;
    private eventEmitter;
    constructor(name: string, eventEmitter: EventEmitter);
    asyncEmit(arg: T): boolean;
    emit(arg: T): boolean;
    off(cb: (arg: T) => any): TypedEvent<T>;
    on(cb: (arg: T) => any): TypedEvent<T>;
    once(cb: (arg: T) => any): TypedEvent<T>;
}
