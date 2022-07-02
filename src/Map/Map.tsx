import React from "react"

import { Circle,
  DirectionsRenderer,
  GoogleMap,
  InfoWindow,
  Marker,
  MarkerClusterer,
  useJsApiLoader } from "@react-google-maps/api"

import { v4 as uuidv4 } from "uuid"

import { wrapper, mapContainer, mapStyles, circleStyle } from "./Map.styles"
import LinearProgress from "@mui/material/LinearProgress"
import Box from "@mui/material/Box"
import { useMediaQuery } from "@mui/material"

import { DataType } from "../react-app-env"
import { PlaceIcon } from "../helpers"
import CurrentLocation from "./CurrentLocationBtn/CurrentLocation"
import MapTooltip from "./MapTooltip/MapTooltip"
import { DistanceInfo } from "./DistanceInfo/DistanceInfo"

type MapProps = {
  setClickedPos: React.Dispatch<React.SetStateAction<google.maps.LatLngLiteral>>
  clickedPos: google.maps.LatLngLiteral
  filteredPlaces: DataType[]
  type: string
  setChildClicked: React.Dispatch<React.SetStateAction<DataType | null>>
  distance: string
}

const Map: React.FC<MapProps> = ({
  distance,
  setChildClicked,
  setClickedPos,
  clickedPos,
  filteredPlaces,
  type }) => {
  const [hoveredMarker, setHoveredMarker] = React.useState<DataType>({} as DataType)
  const [snackBarOpen, setSnackBarOpen] = React.useState(false);
  const [directions, setDirections] = React.useState<google.maps.DirectionsResult | null>(null)
  
    React.useEffect(() => {
      setDirections(null)
    }, [type, clickedPos])

  const isMobile = useMediaQuery('(min-width: 900px)')
  
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    language: "en",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!
  })

  const mapRef = React.useRef<google.maps.Map | null>(null)
  const onLoad = (map: google.maps.Map) : void => {
    mapRef.current = map
  }
  const onUnmount = (): void => {
    mapRef.current = null
  }

  const onMapClick = (event: google.maps.MapMouseEvent) => {
    if (event?.latLng?.lat()) {
      setClickedPos({lat: event?.latLng?.lat(), lng: event?.latLng?.lng()})
      setChildClicked(null)
    }
  }

  const onMarkerHover = (marker: DataType): void => setHoveredMarker(marker)

  const moveTo = (position: google.maps.LatLngLiteral) => {
    if (mapRef.current) {
      mapRef.current.panTo({lat: position.lat, lng: position.lng})
      mapRef.current.setZoom(15)
      setClickedPos(position)
    }
  }

  const mapCenter = React.useMemo(() => (
    {lat: clickedPos.lat, lng: clickedPos.lng}
  ), [clickedPos])

  const markerClickHandler = (child: DataType, childPosition: google.maps.LatLngLiteral): void => {
    setChildClicked(child)
    fetchDirections(childPosition)
    setSnackBarOpen(true)
  }

  const fetchDirections = (position: google.maps.LatLngLiteral) => {
    if (!clickedPos.lat) return

    const service = new google.maps.DirectionsService()
    
    service.route(
      {
        origin: clickedPos,
        destination: position,
        travelMode: google.maps.TravelMode.WALKING
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result)
        }
      }
    )
  }

  return (
    <React.Fragment>
      <Box sx={wrapper}>
        {!isLoaded
          ? <LinearProgress />
          : <>
              <GoogleMap
                mapContainerStyle={mapContainer}
                center={mapCenter}
                zoom={15}
                options={{styles: mapStyles, disableDefaultUI: true, zoomControl: true}}
                onLoad={onLoad}
                onUnmount={onUnmount}
                onClick={(event) => onMapClick(event)}
              >
                {directions && 
                  <DirectionsRenderer 
                    directions={directions}
                    options={{
                      suppressMarkers: true,
                      polylineOptions: {
                        zIndex: 50,
                        strokeColor: "teal",
                        strokeWeight: 2
                      }
                    }}
                  />
                }
                {clickedPos.lat ? <Marker position={clickedPos} /> : null}
                <MarkerClusterer>
                  {(clusterer) =>  <>
                      {filteredPlaces.map(marker => (
                        <Marker
                          key={uuidv4()}
                          position={{lat: Number(marker.latitude), lng: Number(marker.longitude)}}
                          icon={{
                            url: PlaceIcon(type),
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(15, 15),
                            scaledSize: new window.google.maps.Size(30, 30)
                          }}
                          onMouseOver={() => onMarkerHover(marker)}
                          onMouseOut={() => setHoveredMarker({} as DataType)}
                          onClick={() => markerClickHandler(marker,
                            {lat: Number(marker.latitude), lng: Number(marker.longitude)})
                          }
                          clusterer={clusterer}
                        />
                      ))}
                    </>
                  }
                </MarkerClusterer>
                <Circle center={clickedPos} radius={+distance} options={circleStyle} />
                
                {+hoveredMarker.latitude && (
                  <InfoWindow
                    position={{lat: Number(hoveredMarker.latitude),
                      lng: Number(hoveredMarker.longitude)}
                    }
                  >
                    <MapTooltip hoveredMarker={hoveredMarker} isMobile={isMobile} />
                  </InfoWindow>
                )}
            </GoogleMap>
            <CurrentLocation moveTo={moveTo} />
            {directions && 
              <DistanceInfo
                leg={directions.routes[0].legs[0]}
                open={snackBarOpen}
                setOpen={setSnackBarOpen}
                nowClosed={hoveredMarker.is_closed}
              />
            }
          </>
        }
      </Box>
    </React.Fragment>
  )
}

export default Map