"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCircleLayer = void 0;
const mars3d_1 = __importDefault(require("mars3d"));
const addCircleLayer = ({ map, id, data, color = '#000', opacity = 1, size = 5 }) => {
    const geoJsonLayer = new mars3d_1.default.layer.GeoJsonLayer({
        id,
        data,
        symbol: {
            type: 'pointP',
            styleOptions: {
                color,
                opacity,
                pixelSize: size
            }
        }
    });
    map.addLayer(geoJsonLayer);
};
exports.addCircleLayer = addCircleLayer;
