import mars3d from 'mars3d'

export const initMap = ({
  container,
  config = {
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
        template:
          '<div>经度:{lng}</div><div>纬度:{lat}</div><div>海拔：{alt}米</div><div>层级：{level}</div> <div>方向：{heading}度</div><div>俯仰角：{pitch}度</div><div>视高：{cameraHeight}米</div>'
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
  }
}: {
  container: string
  config: object
}) => {
  const map = new mars3d.Map(container, config)
  return map
}

type GeoJSONPoint = {
  type: 'Point'
  coordinates: [number, number]
}

type GeoJSONMultiPoint = {
  type: 'MultiPoint'
  coordinates: [number, number][]
}

type GeoJSONLineString = {
  type: 'LineString'
  coordinates: [number, number][]
}

type GeoJSONMultiLineString = {
  type: 'MultiLineString'
  coordinates: [number, number][][]
}

type GeoJSONPolygon = {
  type: 'Polygon'
  coordinates: [number, number][][]
}

type GeoJSONMultiPolygon = {
  type: 'MultiPolygon'
  coordinates: [number, number][][][]
}

type GeoJSONGeometryCollection = {
  type: 'GeometryCollection'
  geometries: (
    | GeoJSONPoint
    | GeoJSONMultiPoint
    | GeoJSONLineString
    | GeoJSONMultiLineString
    | GeoJSONPolygon
    | GeoJSONMultiPolygon
  )[]
}

type GeoJSONFeature = {
  type: 'Feature'
  geometry:
    | GeoJSONPoint
    | GeoJSONMultiPoint
    | GeoJSONLineString
    | GeoJSONMultiLineString
    | GeoJSONPolygon
    | GeoJSONMultiPolygon
    | GeoJSONGeometryCollection
  properties: { [key: string]: any }
  id?: string | number
}

type GeoJSONFeatureCollection = {
  type: 'FeatureCollection'
  features: GeoJSONFeature[]
}

export type GeoJSON =
  | GeoJSONPoint
  | GeoJSONMultiPoint
  | GeoJSONLineString
  | GeoJSONMultiLineString
  | GeoJSONPolygon
  | GeoJSONMultiPolygon
  | GeoJSONGeometryCollection
  | GeoJSONFeature
  | GeoJSONFeatureCollection

export const addCircleLayer = ({
  map,
  id,
  data,
  color = '#000',
  opacity = 1,
  size = 5
}: {
  map: any
  id: string
  data: GeoJSON
  color: string
  opacity: number
  size: number
}) => {
  const geoJsonLayer = new mars3d.layer.GeoJsonLayer({
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
  })
  map.addLayer(geoJsonLayer)
}

export const addLineLayer = ({
  map,
  id,
  data,
  color = '#000',
  opacity = 1,
  width = 1
}: {
  map: any
  id: string
  data: GeoJSON
  color: string
  opacity: number
  width: number
}) => {
  const geoJsonLayer = new mars3d.layer.GeoJsonLayer({
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
  })
  map.addLayer(geoJsonLayer)
}

export const addFillLayer = ({
  map,
  id,
  data,
  color = '#000',
  opacity = 1
}: {
  map: any
  id: string
  data: GeoJSON
  color: string
  opacity: number
}) => {
  const geoJsonLayer = new mars3d.layer.GeoJsonLayer({
    id,
    data,
    symbol: {
      type: 'polygonC',
      styleOptions: {
        color,
        opacity
      }
    }
  })
  map.addLayer(geoJsonLayer)
}

export const removeLayerById = (map: any, id: string) => {
  const layer = map.getLayerById(id)
  if (layer) {
    map.removeLayer(layer)
  }
}

export const removeLayersByIds = (map: any, ids: string[]) => {
  ids.forEach((id) => {
    removeLayerById(map, id)
  })
}
