import React, { useState } from 'react'
import MainProject from './MainProject'


import './Pagination.css';
function Text() {

  const dummyData = Array.from({length:100},(_,index)=>({
    id: index + 1,
      names : `Product ${index +1}`
  }))

  // console.log(dummyData);

function handlePageChange(currentPage){
  setCurrentPage(currentPage);
}

  const itemsPerPage = 10;

  const [currentPage,setCurrentPage]= useState(1);
  
  const indexofLastItem = currentPage * itemsPerPage;

  const indexofFirstItem = indexofLastItem - itemsPerPage;

  const currentListofItems = dummyData.slice(indexofFirstItem,indexofLastItem);

  console.log(currentListofItems , indexofFirstItem , indexofLastItem);

  return (
    <div>
      <h1>Pagination</h1>
      <ul className='list-items'>
        {
          currentListofItems.map(listItem => <li key={listItem.id} >{listItem.names}</li>)
        }
      </ul>


      <MainProject    currentPage = {currentPage}

totalPage ={Math.ceil(dummyData.length / itemsPerPage)}

onPageChange = {handlePageChange}/>

      
    </div>
  )
}

export default Text
