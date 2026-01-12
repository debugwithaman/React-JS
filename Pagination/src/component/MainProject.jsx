import React from 'react'

function MainProject({currentPage,totalPage = 10,onPageChange}) 
{
    function GenerateNoOfPages(){
     const pages = [];
     for(let i=1;i<=totalPage;i++){
        pages.push(i); 
     }
     return pages;
    }
  return (
    <div className='pagination'>

      <button onClick={()=>{onPageChange(currentPage - 1)}} className='pagination-btn' disabled={currentPage === 1}>Prev</button>
      {

        // Here the className is modified beacuse we want to show the active feature
         GenerateNoOfPages().map(pageNo => (
            <button className={`pagination-btn ${ currentPage == pageNo ? 'active':''}`} key={pageNo} onClick={() => onPageChange(pageNo)}>
              {pageNo}
            </button>
          ))
          
      }
      <button onClick={()=>{onPageChange(currentPage + 1)}} className='pagination-btn' disabled={currentPage === 10}>Next</button>
    </div>
  )
}

export default MainProject
