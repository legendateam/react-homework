export default function Reducer(state, action) {
        switch (action.type) {
            case "ADD_USERS":
                return {...state, users: action.payload}
            case "ADD_POSTS_ID":
                return {...state, poststitle: action.payload}
            case "ADD_POSTS" :
                return {...state, posts: action.payload}
            case "ADD_COMMENTS_ID" :
                return {...state, postscomments: action.payload}
            case "ADD_COMMENTS" :
                return {...state, comments: action.payload}
            default :
                return {...state}
        };
};