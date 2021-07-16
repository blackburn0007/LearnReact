import React ,{useContext } from 'react'
import PostsContext from '../../contexts/PostsContext';
import Post from '../Post/Post'
import PostForm from '../PostForm/PostForm';

function Wall(props) {
    const {state: {posts}} = useContext(PostsContext);

    return (
      <>
        <PostForm/>
        <div>
            {posts.map (o => 
            < Post 
            key={o.id} 
            post={o} 
            />) }
        </div>
      </>        
    )
}

export default Wall



// const posts = [{
    //   id: 2,
    //   author: {
    //     id: 1 , 
    //     avatar: 'https://lms.openjs.io/logo_js.svg',
    //     name : 'OpenJS'
    //   },
    //   content: 'Ну как вы справились с домашкой?', 
    //   photo: null,
    //   hit: true, 
    //   likes: 222,
    //   likedByMe: true,
    //   hidden: true,
    //   tags: ['deadline','homework'], 
    //   created: 1603774800,
    //   likedButton:  'https://lms.openjs.io/liked.svg',
    //   unlikedButton: 'https://lms.openjs.io/unliked.svg',
    //  },
    //  {
    //   id: 1,
    //   author: {
    //     id: 1 , 
    //     avatar: 'https://lms.openjs.io/logo_js.svg',
    //     name : 'OpenJS'
    //   },
    //   content: null, 
    //   photo: {
    //       url:'https://lms.openjs.io/openjs.jpg',
    //       alt: 'openJs logo',
    //       },
    //   hit: true, 
    //   likes: 10,
    //   likedByMe: true, 
    //   hidden:false,
    //   created: 1603501200,
    //  }]