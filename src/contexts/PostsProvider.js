import React, { useReducer} from 'react'
import PostsContext from './PostsContext'
import {reducer, initialState} from '../store/reducers';
// const empty = {
//     id: 0,
//     author: {
//         avatar: 'https://lms.openjs.io/logo_js.svg',
//         name : 'OpenJS'
//   },
//   content: '', 
//   photo: null,
//   hit: false, 
//   likes: 0,
//   likedByMe: false,
//   hidden: false,
//   tags: null, 
//   created: 0,
// }


export default function PostsProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch};
    // const [posts, setPosts] = useState([]);
    // const [edited, setEdited] = useState(empty);

    
 

    // const remove = (id) => {
    //     setPosts((prevState) => prevState.splice(1)); 
    
    //     return {...id}
    // }

    // const toggleVisibility = (id) => {
    //     setPosts(posts.map (o => {
    //         if (o.id !== id) {
    //           return o;
    //         }
    //         o.hidden = !o.hidden;
    //         return o;
    //       }))
    // }

    // const edit = (id) => {
    //     const post = posts.find(o => o.id === id);
    //   if (post === undefined) {
    //     return;
    //   }
    //   setEdited(post);
    // }

    // const save  = (post) => {
    //     if (edited?.id === 0) {
    //         setPosts((prevState) => [{ ...post}, ...prevState]);
    //         setEdited(empty);
    //         return;
    //     }
        
    //     setPosts((prevState) => prevState.map((o) => {
    //         if (o.id !== posts.id) {
    //             return o;
    //           }
    
    //           return {...post};
    //     }))
    //     setEdited(empty)
    //     return;
    // };

    // const cancel = () => {
    //     setEdited(empty);
    // }



    // const value = {
    //     posts,
    //     like,
    //     remove,
    //     toggleVisibility,
    //     edit,
    //     save,
    //     edited,
    //     cancel,
    //     submit,
    //     change,
    // };
    

    return (
        <PostsContext.Provider value={value}>
            {props.children}
        </PostsContext.Provider>
    )
}

