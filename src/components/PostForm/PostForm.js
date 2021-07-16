import React, {useRef, useContext} from 'react'
import PostsContext from '../../contexts/PostsContext';
import { editCancel, editChange, editSubmit } from '../../store/actions';


export default function PostForm() {
    const {state: {edited}, dispatch} = useContext(PostsContext);
    const firstFocusEl = useRef(null);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(editSubmit());
        // dispatch({type: 'POST_EDIT_SUBMIT'});
        // firstFocusEl.current.focus();
    };

    const handleReset = (evt) => {
        evt.preventDefault();
        // dispatch({type: 'POST_EDIT_CANCEL'});
        dispatch(editCancel());
    }

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        dispatch(editChange(name, value));
        // dispatch({type: 'POST_EDIT_CHANGE', payload: {name, value}});
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <textarea 
            ref={firstFocusEl}name="content" placeholder="content" value={edited.content || ''} 
            onChange ={handleChange}/>
            <input 
            name="tags"
            placeholder="tags" 
            value={edited.tags?.join(' ')} 
            onChange={handleChange}
            />
            <input 
            name="photo" placeholder="photo">
            </input>
            <input 
            name="alt" 
            placeholder="alt"
            onSubmit={handleSubmit}
            >
            </input>
            <button>Ok</button>
        </form>
    )
}


