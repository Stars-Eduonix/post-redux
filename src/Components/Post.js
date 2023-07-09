import axios from "axios"
import { fetchPosts } from "../redux/actions/apiActions"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


const Post = () => {
    let {loading, posts, error} = useSelector(state => state)
    let dispatch = useDispatch()
    console.log(loading, posts, error)

    useEffect(() => {
        dispatch(fetchPosts())
   
    },[])


    return (
        <div>
            <h1>Post</h1>
            {
                posts && 
                <div>
                    {
                        posts.map(post => <div>
                            
                            <h3>{post.title}</h3>
                            
                            <p>{post.body}</p>
                            </div>)
                    }

                </div>
            }
        </div>
    )
}

export default Post




