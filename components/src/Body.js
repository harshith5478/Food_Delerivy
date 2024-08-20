import Content from './Content.js';
import { useEffect, useState } from 'react';
import Shim from './Shimmer.js';

const Body= () =>{
    const [data, setFilter] =useState([]);
    const [filterdata, setFilterdata] =useState([]);
    const [searchText, setsearchText] = useState("");
    useEffect(() =>{FetchApi();},[]);

    const FetchApi= async()=>{
        const fetchData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await fetchData.json();
        console.log(json);
        setFilter(json.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterdata(json.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants)
    } 
    if (data.length === 0)
        return (<Shim />)
    return (
    <div className="body">
        <div className="btns">
            <input type="text" className="btnSearch" value={searchText} onChange={(e)=>setsearchText(e.target.value)} ></input>            
            <button onClick={()=>{
            const newData=data.filter((dat) => {
            return dat.info.name.toLowerCase().includes(searchText.toLowerCase());
            }
            )
            setFilterdata(newData)
            }}>
            Search
            </button>
            <button onClick={()=>{
            const newData=data.filter((dat) => {
            return (dat.info.avgRating>4.1);
            }
            )
            setFilterdata(newData)
            }}>
            Top Rated Restaurant
            </button>
        </div>
        <div className="res-container">
            {filterdata.map((dat) => (
                <Content data ={dat} key={dat.info.id}/>
            ))} 
        </div>
    </div>
    
)
}
export default Body;