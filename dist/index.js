"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeLayersByIds = exports.removeLayerById = exports.addFillLayer = exports.addLineLayer = exports.addCircleLayer = exports.initMap = void 0;
const mars3d_1 = __importDefault(require("mars3d"));
const initMap = ({ container, config = {
    scene: {
        center: {
            lat: 22.35,
            lng: 114.15,
            alt: 92728,
            heading: 0,
            pitch: -70
        },
        scene3DOnly: false,
        shadows: false,
        removeDblClick: true,
        sceneMode: 3,
        showSun: true,
        showMoon: true,
        showSkyBox: true,
        showSkyAtmosphere: true,
        fog: true,
        fxaa: true,
        requestRenderMode: true,
        globe: {
            depthTestAgainstTerrain: false,
            baseColor: '#546a53',
            showGroundAtmosphere: true,
            enableLighting: false
        },
        cameraController: {
            zoomFactor: 3.0,
            minimumZoomDistance: 1,
            maximumZoomDistance: 50000000,
            enableRotate: true,
            enableTranslate: true,
            enableTilt: true,
            enableZoom: true,
            enableCollisionDetection: true,
            minimumCollisionTerrainHeight: 15000
        }
    },
    control: {
        homeButton: true,
        baseLayerPicker: true,
        sceneModePicker: true,
        vrButton: false,
        fullscreenButton: true,
        navigationHelpButton: false,
        animation: false,
        timeline: false,
        infoBox: false,
        geocoder: false,
        selectionIndicator: false,
        contextmenu: { hasDefault: true },
        mouseDownView: true,
        zoom: false,
        compass: false,
        distanceLegend: false,
        locationBar: {
            fps: false,
            template: '<div>经度:{lng}</div><div>纬度:{lat}</div><div>海拔：{alt}米</div><div>层级：{level}</div> <div>方向：{heading}度</div><div>俯仰角：{pitch}度</div><div>视高：{cameraHeight}米</div>'
        }
    },
    templateValues: {
        dataServer: '//data.mars3d.cn',
        gltfServerUrl: '//data.mars3d.cn/gltf'
    },
    terrain: {
        url: '//data.mars3d.cn/terrain',
        show: true
    },
    basemaps: [
        { id: 10, name: '地图底图', type: 'group' },
        {
            pid: 10,
            name: '0.5影像',
            icon: 'http://mars3d.cn/img/basemaps/esriWorldImagery.png',
            type: 'xyz',
            url: 'http://171.212.102.6:81/tiles/imagemap/{z}/{x}/{y}.png'
        },
        {
            id: 2021,
            pid: 10,
            name: '天地图影像',
            icon: 'http://mars3d.cn/img/basemaps/tdt_img.png',
            type: 'group',
            layers: [{ name: '底图', type: 'tdt', layer: 'img_d' }],
            show: true
        },
        {
            pid: 10,
            name: '天地图电子',
            icon: 'http://mars3d.cn/img/basemaps/tdt_vec.png',
            type: 'group',
            layers: [
                { name: '底图', type: 'tdt', layer: 'vec_d' },
                { name: '注记', type: 'tdt', layer: 'vec_z' }
            ]
        },
        {
            pid: 10,
            name: '高德影像',
            type: 'group',
            icon: 'http://mars3d.cn/img/basemaps/gaode_img.png',
            layers: [{ name: '底图', type: 'gaode', layer: 'img_d' }]
        },
        {
            pid: 10,
            name: '高德电子',
            type: 'gaode',
            icon: 'http://mars3d.cn/img/basemaps/gaode_vec.png',
            layer: 'vec'
        },
        {
            pid: 10,
            name: '百度影像',
            type: 'group',
            icon: 'http://mars3d.cn/img/basemaps/bd-img.png',
            layers: [
                { name: '底图', type: 'baidu', layer: 'img_d' },
                { name: '注记', type: 'baidu', layer: 'img_z' }
            ]
        },
        {
            pid: 10,
            name: '百度电子',
            icon: 'http://mars3d.cn/img/basemaps/bd-vec.png',
            type: 'baidu',
            layer: 'vec'
        },
        {
            pid: 10,
            name: 'ArcGIS影像',
            icon: 'http://mars3d.cn/img/basemaps/esriWorldImagery.png',
            type: 'xyz',
            url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            enablePickFeatures: false
        },
        {
            pid: 10,
            name: '微软影像',
            icon: 'http://mars3d.cn/img/basemaps/bingAerial.png',
            type: 'bing',
            layer: 'Aerial'
        },
        {
            id: 2017,
            pid: 10,
            name: '暗色底图',
            type: 'gaode',
            icon: 'http://mars3d.cn/img/basemaps/blackMarble.png',
            layer: 'vec',
            invertColor: true,
            filterColor: '#4e70a6',
            brightness: 0.6,
            contrast: 1.8,
            gamma: 0.3,
            hue: 1,
            saturation: 0
        },
        {
            pid: 10,
            name: '蓝色底图',
            icon: 'http://mars3d.cn/img/basemaps/bd-c-midnight.png',
            type: 'xyz',
            url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
            chinaCRS: 'GCJ02',
            enablePickFeatures: false
        },
        {
            pid: 10,
            name: '黑色底图',
            icon: 'http://mars3d.cn/img/basemaps/bd-c-dark.png',
            type: 'tencent',
            layer: 'custom',
            style: '4'
        }
    ],
    layers: []
} }) => {
    const map = new mars3d_1.default.Map(container, config);
    return map;
};
exports.initMap = initMap;
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
const removeLayerById = (map, id) => {
    const layer = map.getLayerById(id);
    if (layer) {
        map.removeLayer(layer);
    }
};
exports.removeLayerById = removeLayerById;
const removeLayersByIds = (map, ids) => {
    ids.forEach((id) => {
        (0, exports.removeLayerById)(map, id);
    });
};
exports.removeLayersByIds = removeLayersByIds;
