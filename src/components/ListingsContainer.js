import React from "react";
import ListingCard from "./ListingCard";

const ListingsContainer = ( {listings, deleteListing} ) => {

  function renderListings() {
    return listings.map ((listing) => {
      return <ListingCard 
        key = {listing.id}
        listing = {listing}
        deleteListing = {deleteListing}
        />
    })
  }

  return (
    <main>
      <ul className="cards">
        {renderListings()}
      </ul>
    </main>
  );
}

export default ListingsContainer;
