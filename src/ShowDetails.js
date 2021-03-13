import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './App.css'

function ShowDetails(props) {
    const { id } = props.match.params
    const [user, setUser] = useState({})
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                const result = response.data
                setUser(result)
            })
            .catch((err) => {
                alert(err.message)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                const result = response.data
                setPost(result)
            })
            .catch((err) => {
                alert(err.message)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response) => {
                const result = response.data
                setComments(result)
            })
            .catch((err) => {
                alert(err.message)
            })
    }, [])
    return (
        <div>
            <div class="card">
                <h1 class="card-header bg-secondary">UserName:{user.name}</h1><br />
                <div class="card-body">
                    <h2 class="card-title">TITLE:{post.title}</h2>
                    <h3 class="body">Body:{post.body} </h3><br/>
                    <hr/>
                    <h3 class="text-info">Comments :</h3>
                    <ul>
                        {
                            comments.map((ele) => {
                                return <li key={ele.id} class="comment">{ele.body} </li>
                            })
                        }
                    </ul>
                    <hr />
                    <Link to={`/users/${id}`}>More posts of author:{user.name}</Link>

                </div>
            </div>
        </div >
    )
}

export default ShowDetails
