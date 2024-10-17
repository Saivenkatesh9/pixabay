import React from "react";
import './Home.css'
import { useEffect,useState } from "react";
import Nav from "../Navigational/Nav";
const Home =()=>{
    const [data, setData] = useState([]);
    const [search,setImageFound]=useState("");
    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=46193700-755edda1d310299a4a73c01c6&q=${search}&image_type=photo&pretty=true`)
          .then((response) => response.json())
          .then(x=>{
            setData(x.hits);
          });
          
      },[search]);
      const Change=(e)=>{
        let x = setImageFound(e.target.value.toLowerCase());
      }
    return(
        <>
        <Nav/>
        <div id="background">
            <div id="searc">
            <h1 id="hell">Stunning royalty-free images & royalty-free stock</h1><br />
            <input id="hel" value={search} onChange={Change} type="text" placeholder="Search for image" />
            </div>
        </div>
        {data.filter(x=>x.tags.toLowerCase().includes(search)).map(x=>{
        return(
          <>
          <img style={{width:"300px",height:"300px",margin:"30px",borderRadius:"10px"}} src={x.webformatURL} alt="product" />
          
          </>
        )
        })}
        </>
    )
}
export default Home

