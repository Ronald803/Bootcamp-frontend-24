import React from 'react'
import { places } from './data.js';
import Place from './Place.jsx';
function List() {
    const listItems = places.map(place =>
        <li key={place.id}>
          <Place
            place={place}
          />
        </li>
      );
      return <ul>{listItems}</ul>;
}

export default List