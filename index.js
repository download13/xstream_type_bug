"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var xstream_1 = __importDefault(require("xstream"));
var first$ = xstream_1.default.of({ kind: 'first' });
var second$ = xstream_1.default.of({ kind: 'second' });
var action$ = xstream_1.default.merge(first$);
