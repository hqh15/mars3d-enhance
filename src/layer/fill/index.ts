import mars3d from 'mars3d'

export const addFillLayer = ({
  map,
  id,
  data,
  color = '#000',
  opacity = 1
}: {
  map: any
  id: string
  data: any
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
