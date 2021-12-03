import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const App = () => {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  const fetchListings = () => {
    fetch("http://localhost:6001/listings")
    .then ((res) => res.json())
    .then ((listings) => {
      setListings(listings)
      })
    }

  useEffect(fetchListings, [])

  const deleteListing = (deletedListing) => {
    let newListings = listings.filter(listing => listing !== deletedListing);
    setListings(newListings)
    fetch(`http://localhost:6001/listings/${deletedListing.id}`, { method: "DELETE" });
  }

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  }

  const listingsRender = () => {
    return listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))
  }

  return (
    <div className="app">
      <Header
        handleSearch = {handleSearch}
      />
      <ListingsContainer
        listings = {listingsRender()}
        deleteListing = {deleteListing}
      />
    </div>
  );
}

export default App;
