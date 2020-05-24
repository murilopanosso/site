import { ARTICLE_LOADING,
         ARTICLE_TIME_OUT,
         ARTICLE_VISIBLE,
         COMPONENT_TIME_OUT, ARTICLE_ACTIVE } from "./actionTypes";

export const setArticleLoading = value => ({
    type: ARTICLE_LOADING,
    payload: value
})

export const setArticleTimeOut = value => ({
    type: ARTICLE_TIME_OUT,
    payload: value
})

export const setArticleVisible = value => ({
    type: ARTICLE_VISIBLE,
    payload: value
})

export const setComponentTimeOut = value => ({
    type: COMPONENT_TIME_OUT,
    payload: value
})


export const setActiveArtice = value => ({
    type: ARTICLE_ACTIVE,
    payload: value
})
