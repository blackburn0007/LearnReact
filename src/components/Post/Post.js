import React, { useContext } from 'react'
import './Post.css'
import Tags from '../Tags/Tags';
import PostsContext from '../../contexts/PostsContext';
import { edit, hide, like, remove, show} from '../../store/actions'

function Post({post}) {
    const {author} = post;
    const {photo} = post;

    const {dispatch} = useContext(PostsContext);
    

    const handleLike = () => {
        dispatch(like(post.id));
    }
    
    const handleRemove = (evt) => {
        dispatch(remove(post.id));
    }
    
    const handleHide = (evt) => {
        dispatch(hide(post.id));
    }

    const handleEdit = () => {
        dispatch(edit(post.id));
    }

    const handleShow = (evt) => {
        dispatch(show(post.id));
    }
    

if (post.hidden) {
    return (
        <article>
            <header >
                <img className = "Post-avatar" src= {author.avatar} width= "50" height="50"  alt= {author.name}/>
                <h5>{author.name}</h5>
                <button onClick={handleShow}>показать</button>
            </header>
        </article>
    );
    } else {
        return (
            <article>
                <header>
                    <img className = "Post-avatar" src= {author.avatar} width= "50" height="50"  alt= {author.name}/>
                    <h5>{author.name}</h5>
                    <button onClick={handleRemove}>удалить</button>
                    <button onClick={handleHide}>скрыть</button>
                    <button onClick={handleEdit}>изменить</button>
                    <div>{post.created}</div>
                    {post.hit && <span>HIT</span>}
                </header>
            <div>
                <div className="Post-content">{post.content}</div>
                {photo && <img src= {photo.url} alt={photo.alt} className="Post-photo" />}
                </div>
            <footer>
                <span className="Post-likes" onClick={handleLike}>
                     <img
                    src= {post.likedByMe ? 'https://lms.openjs.io/liked.svg' : 'https://lms.openjs.io/unliked.svg'}
                     alt="likes"
                     width="20" height="20"
                     />
                    <span className="Post-likes-count">{post.likes}</span>
                    {post.tags ? <Tags tags = {post.tags} /> : null }
                </span>
            </footer>
            </article>
        )
    }
}

export default Post
