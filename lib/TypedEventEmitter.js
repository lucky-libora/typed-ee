"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_emitter3_1 = require("event-emitter3");
const TypedEvent_1 = require("./TypedEvent");
class TypedEventEmitter extends event_emitter3_1.EventEmitter {
    event(name) {
        return new TypedEvent_1.TypedEvent(name, this);
    }
}
exports.TypedEventEmitter = TypedEventEmitter;
//# sourceMappingURL=TypedEventEmitter.js.map