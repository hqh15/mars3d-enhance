"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLineLayer = void 0;
const mars3d_1 = __importDefault(require("mars3d"));
const addLineLayer = ({ map, id, data, color = '#000', opacity = 1, width = 1 }) => {
    const geoJsonLayer = new mars3d_1.default.layer.GeoJsonLayer({
        id,
        data,
        symbol: {
            type: 'polylineC',
            styleOptions: {
                color,
                opacity,
                width
            }
        }
    });
    map.addLayer(geoJsonLayer);
};
exports.addLineLayer = addLineLayer;
