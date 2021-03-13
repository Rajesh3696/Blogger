import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'
import {Link}  from 'react-router-dom'

function UserPosts(props) {
    const[posts,setPosts]=useState([])
    const {id}=props.match.params
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            const result=response.data
            setPosts(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }, [])
    return (
        <div>
            <h1 class="card-header bg-primary">Total posts:{posts.length}</h1><br/>
            <ul>
                {
                    posts.map((post)=>{
                     return   <li key={post.id} class="post-all card-body text-info display-4 bg-dark"><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export default UserPosts
