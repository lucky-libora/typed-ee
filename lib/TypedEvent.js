"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TypedEvent {
    constructor(name, eventEmitter) {
        this.name = name;
        this.eventEmitter = eventEmitter;
    }
    emit(arg) {
        return this.eventEmitter.emit(this.name, arg);
    }
    off(cb) {
        this.eventEmitter.off(this.name, cb);
        return this;
    }
    on(cb) {
        this.eventEmitter.on(this.name, cb);
        return this;
    }
    once(cb) {
        this.eventEmitter.once(this.name, cb);
        return this;
    }
}
exports.TypedEvent = TypedEvent;
//# sourceMappingURL=TypedEvent.js.map