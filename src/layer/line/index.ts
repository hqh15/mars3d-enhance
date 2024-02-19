import mars3d from 'mars3d'

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
  data: any
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
