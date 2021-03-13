import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './App.css'

function ShowUser(props) {
    const {id}=props.match.params
    const[user,setUser]=useState({})
    const[posts,setPosts]=useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const result=response.data
            setUser(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[id])
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response)=>{
            const result=response.data
            setPosts(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
        
    }, [id])
    return (
        <div>
            <h1>USER NAME:{user.name}</h1><br/>
            <div class="card-body">
                <h1 class="card-title">POSTS WRITTEN BY USER</h1>
            </div>
            <ul>
                {
                    posts.map((post)=>{
                     return   <li key={post.id} class="post-title card-header "><Link to={`/posts/${id}`}>{post.title}</Link></li>
                    })
                }
            </ul>
            <Link to="/users" class="back">Back</Link>
        </div>
    )
}

export default ShowUser
