import React, { useEffect, useState } from 'react'
import './Quote.css'
function MainProject() {
    const[loading,setLoading]= useState(false);
    const[data,setData] = useState(null);

   async function fetchQuote() {
    try{
        setLoading(true);
        const apiResponse = await fetch('https://api.quotable.io/quotes/random',{
            method:'GET'
        });

        const result = await apiResponse.json();
        console.log(result)

        if( result && result.length > 0){
            setLoading(false);
            setData(result[0]);
        }
        }
    catch(error){
        console.log(error)

    }
   }

 useEffect(() => {
   fetchQuote();
 
  
 }, [])
 
 function handleRefresh(){
    fetchQuote();
 }
 if(loading){
    return <h3>Loading Quote ! Please Wait</h3>
 }
  return (
    <div className='random-quote-generator'>
      <h1>Random Quote Generator</h1>
      <div className="quote-wrapper">
        <p>{data?.author}</p>
        <p>{data?.content}</p>
      </div>
      <button className='refresh-btn' onClick={handleRefresh}>Refresh</button>
    </div>
  )
}

export default MainProject
