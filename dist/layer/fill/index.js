"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFillLayer = void 0;
const mars3d_1 = __importDefault(require("mars3d"));
const addFillLayer = ({ map, id, data, color = '#000', opacity = 1 }) => {
    const geoJsonLayer = new mars3d_1.default.layer.GeoJsonLayer({
        id,
        data,
        symbol: {
            type: 'polygonC',
            styleOptions: {
                color,
                opacity
            }
        }
    });
    map.addLayer(geoJsonLayer);
};
exports.addFillLayer = addFillLayer;
