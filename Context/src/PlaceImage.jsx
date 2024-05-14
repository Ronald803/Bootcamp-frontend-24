import React from 'react'
import { getImageUrl } from './utils.js';
import { useContext } from 'react';
import { ImageSizeContext} from './Context.js'

function PlaceImage({place}) {
  const imageSize = useContext(ImageSizeContext)
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

export default PlaceImage