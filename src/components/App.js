import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewItemForm from './NewItemForm'

function App() {
  const [listingsList, setListingsList] = useState([])
  const [filteredListings, setFilteredListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then((listings) => {
      setListingsList(listings)
      setFilteredListings(listings)
    })
  }, [])

  function deleteListing(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      const updatedFilListings = filteredListings.filter(listing => listing.id !== id)
      const updatedCoreListings = listingsList.filter(listing => listing.id !== id)
      setListingsList(updatedCoreListings)
      setFilteredListings(updatedFilListings)
    })
  }

  function filterListings(searchString) {
    const search = searchString.toLowerCase()
    const filteredList = listingsList.filter(listing => {
      let desc = listing.description.toLowerCase()
      return desc.includes(search)
    })
    setFilteredListings(filteredList)
  }

  function sortListings() {
    const sortedListings = [...listingsList]
    sortedListings.sort((first, second) => first.location.localeCompare(second.location))
    setListingsList(sortedListings)
    const sortedFiltListings = [...filteredListings]
    sortedFiltListings.sort((first, second) => first.location.localeCompare(second.location))
    setFilteredListings(sortedFiltListings)
  }

  function addNewItem(newItem) {
    console.log(newItem)
    fetch('http://localhost:6001/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
    .then(resp => resp.json())
    .then((item) => {
      const updatedList = [...listingsList]
      updatedList.push(item)
      setListingsList(updatedList)
      //I could set state at this level to track current search string,
      //and then condition adding new item to filtered list on whether it includes the search string
      const updatedFiltList = [...filteredListings]
      updatedFiltList.push(item)
      setFilteredListings(updatedFiltList)
    })
  }

  return (
    <div className="app">
      <Header filterListings={filterListings} sortListings={sortListings}/>
      <NewItemForm addNewItem={addNewItem}/>
      <ListingsContainer listings={filteredListings} deleteListing={deleteListing}/>
    </div>
  );
}

export default App;
