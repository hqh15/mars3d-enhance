import mars3d from 'mars3d'

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
  data: any
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
