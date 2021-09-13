import React,{useState,useEffect} from 'react'
import axios from 'axios';

function FetchDatawithClick() {
   const[post,setPost] = useState([]);
   const[id,setId] = useState();

   const [btnid,setBtnid] = useState()
  

   const handleClick=()=>{
       setBtnid(id);
   }
   
   // here we are fetching the data according to the id number so we pass the id in url with a button
   useEffect(() => {
    let res =  axios.get(`https://jsonplaceholder.typicode.com/posts/${btnid}`)
    .then(res =>{
        console.log(res);
        setPost(res.data)
    })
    .catch(error =>{
        console.log(error);
    })
   },[btnid]) // if we dont pass the id then for every id our title will be 1st title -->bcz the effect doesn't deppend on state change s
   // so we have to pass id as dependency


    return (
        <div>
            <input type="text" placeholder="enter the id number" value={id} onChange={e=>setId(e.target.value)}></input>
            <button onClick={handleClick}>Fetch Data</button>
            <h4>{post.title}</h4>
        </div>
    )
}

export default FetchDatawithClick
