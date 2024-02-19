"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFillLayer = exports.addLineLayer = exports.addCircleLayer = exports.removeLayersByIds = exports.removeLayerById = exports.initMap = void 0;
const map_1 = require("./map");
Object.defineProperty(exports, "initMap", { enumerable: true, get: function () { return map_1.initMap; } });
Object.defineProperty(exports, "removeLayerById", { enumerable: true, get: function () { return map_1.removeLayerById; } });
Object.defineProperty(exports, "removeLayersByIds", { enumerable: true, get: function () { return map_1.removeLayersByIds; } });
const circle_1 = require("./layer/circle");
Object.defineProperty(exports, "addCircleLayer", { enumerable: true, get: function () { return circle_1.addCircleLayer; } });
const line_1 = require("./layer/line");
Object.defineProperty(exports, "addLineLayer", { enumerable: true, get: function () { return line_1.addLineLayer; } });
const fill_1 = require("./layer/fill");
Object.defineProperty(exports, "addFillLayer", { enumerable: true, get: function () { return fill_1.addFillLayer; } });
