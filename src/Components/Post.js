import axios from "axios"
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from "../redux/actions/apiActions"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


const Post = () => {
    let {loading, posts, error} = useSelector(state => state)
    let dispatch = useDispatch()
    console.log(loading, posts, error)

    useEffect(() => {
         dispatch(fetchPostsRequest())
         axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
         .then(res => dispatch(fetchPostsSuccess(res.data)))
         .catch(err => dispatch(fetchPostsFailure(err.message)))

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