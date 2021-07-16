import {
    POST_EDIT,
    POST_EDIT_CANCEL,
    POST_EDIT_CHANGE,
    POST_EDIT_SUBMIT,
    POST_HIDE,
    POST_LIKE,
    POST_REMOVE, POST_SHOW
} from '../actions';

const empty = {
    id: 0,
    author: {
        avatar: 'https://lms.openjs.io/logo_js.svg',
        name : 'OpenJS'
  },
  content: '', 
  photo: null,
  hit: false, 
  likes: 0,
  likedByMe: false,
  hidden: false,
  tags: null, 
  created: 0,
}

export const initialState = {
        posts: [],
        edited: empty
}

export const reducer = (state, action) => {
    switch (action.type) {
        case POST_EDIT_SUBMIT:
            return reduceSubmit(state,action);
        case POST_EDIT_CANCEL:
            return state;
        case POST_EDIT_CHANGE:
            return reduceChange(state,action);
        case POST_LIKE:
                return reduceLike(state,action);
        case POST_REMOVE:
                return reduceRemove(state, action);
        case POST_HIDE:
                return reduceToggleVisibility(state, action);
        case POST_EDIT:
                return state;
        case POST_SHOW:
                return reduceToggleVisibility(state, action);
        default:
            return state;
    }
}

const reduceChange = (state, action) => {
    const {edited} = state;
    const {payload: {name, value}} = action;
    if (name === 'tags') {
        const parsed = value.split(' ');
        return {
        ...state,
        edited: {...edited, [name]: parsed},
        }  
    }

    if (name === 'photo' || name === 'alt') {
        const prop = name === 'photo' ? 'url' : name;
        return {
            ...state,
            edited: {...edited, photo: {...edited.photo, [prop]: value}},
        }
    }
    
    return {
        ...state,
        edited: {...edited, [name]: value},
    }
};

const reduceSubmit = (state,action) => {
    const {edited, posts} = state;
    const parsed = edited.tags?.map(o => o.replace('#','')).filter(o => o.trim() !== '') || [];
    const tags = parsed.length !== 0 ? parsed:  null;
    const post = {
            ...edited, 
            id: edited.id || Date.now(), 
            created: edited.created ||Date.now(), 
            tags, 
            photo: edited.photo?.url ?{alt: '', ...edited.photo} :null    
        };
    if (edited?.id === 0) {
        return {
            ...state,
            posts: [{...post}, ...posts],
            edited: empty,
        }
    }
        return {
            ...state,
            posts: posts.map((o) => {
                if (o.id !== post.id) {
                    return o;
                }

                return {...post}
            }),
            edited: empty,
        }
    };

const reduceLike = (state, action) => {
      const {posts} = state;
      const {payload: {id}} = action;
      return {
          ...state,
          posts:  posts.map(o => {
            if (o.id !== id) {
                return o;
            }
            const likedByMe = !o.likedByMe;
            const likes = likedByMe ? o.likes + 1 : o.likes - 1;
                return {...o, likedByMe,likes};
          })
      }
    }

const reduceRemove = (state, action) => {
    const {posts} = state;
    // const {payload: {id}} = action;
    return {
        ...state,
        posts: posts.splice(1)
    }
}

const reduceToggleVisibility = (state, action) => {
    const {posts} = state;
    const {payload: {id}} = action;
    return {
        ...state,
        posts: posts.map (o => {
            if (o.id !== id) {
              return o;
            }
            o.hidden = !o.hidden ;
            return o;
          })
    }
}