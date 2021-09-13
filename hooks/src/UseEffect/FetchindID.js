import React,{useState,useEffect} from 'react'
import axios from 'axios';

function FetchindID() {
   const[post,setPost] = useState([]);
   const[id,setId] = useState(1);

   // here we are fetching the data according to the id number so we pass the id in url

   useEffect(() => {
    let res =  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res =>{
        console.log(res);
        setPost(res.data)
    })
    .catch(error =>{
        console.log(error);
    })
   },[id]) // if we dont pass the id then for every id our title will be 1st title -->bcz the effect doesn't deppend on state change s
   // so we have to pass id as dependency


    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}></input>
            <h4>{post.title}</h4>
        </div>
    )
}

export default FetchindID
