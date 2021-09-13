
import React,{useState,useEffect} from 'react';

import axios from 'axios';

function FetchWithEffect(){

    const [post,setPost] = useState([])
   

    useEffect(() => {
      let res =  axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) =>{
          console.log(res);
          setPost(res.data);
        })
        .catch((error) =>{
            console.log(error);
        })
        
       
    },[]) // here if we will not pass the dependency array then the response will come again and again from axios and will print again and again to stop it run the effect hook by once only for 1st render and pass the depency array as empty


    return (
        <div>
        <ul>
        {
           post.map((post)=>(
           <li key={post.id}> {post.title}</li>
           ))
        }
        </ul>
        </div>
        
    )
}

export default FetchWithEffect;
