import { ARTICLE_LOADING,
    ARTICLE_TIME_OUT,
    ARTICLE_VISIBLE,
    COMPONENT_TIME_OUT, ARTICLE_ACTIVE} from "../../actions/Articles/actionTypes";

const INITIAL_STATE = {
    isArticleVisible: false,
    timeout: false,
    articleTimeout: false,
    article: '',
    loading: 'is-loading',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ARTICLE_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case ARTICLE_TIME_OUT:
            return {
                ...state,
                articleTimeout: action.payload
            }
        case ARTICLE_VISIBLE:
            return {
                ...state,
                isArticleVisible: action.payload
            }    
        case COMPONENT_TIME_OUT:
            return {
                ...state,
                timeout: action.payload
            }
        case ARTICLE_ACTIVE:
            return {
                ...state,
                article: action.payload
            }                                
        default:
            return state
    }
}
    