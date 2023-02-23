import React from 'react'
interface listingListProps{
  name:string
}
export default function ListingItems({name}:listingListProps) {
  return (
    <div>{name}list</div>
  )
}
