
// fetching data with use state


import React,{useState,useEffect} from 'react'
import axios from 'axios'

function FetchDataWithUseState() {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');
    const [post,setPost] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            setLoading(false);
            setError('');
            setPost(res.data)
        })
        .catch((error)=>{
            setLoading(false);
            setPost([])
            setError('Please try again Something went wrong')
        })
    })

    return (
        
        <div>
            {loading ? 'Loading please Wait': post.map((post)=>(
                <li key={post.id}> {post.title}</li>
    )) }
            {error ? error:'come back latter'}
            
        </div>
        
    )
}

export default FetchDataWithUseState
