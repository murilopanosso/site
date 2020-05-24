import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import {setComponentTimeOut,
        setArticleVisible,
        setArticleTimeOut,
        setArticleLoading, setActiveArtice  } from "../store/actions/Articles";

import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.props.setArticleLoading('');
    }, 100)
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleOpenArticle(article) {

    this.props.setArticleVisible(!this.props.isArticleVisible)
    this.props.setActiveArtice(article)

    setTimeout(() => {
      this.props.setComponentTimeOut(!this.props.timeout);
    }, 325)

    setTimeout(() => {
      this.props.setArticleTimeOut(!this.props.articleTimeout)
    }, 350)
  }

  handleCloseArticle() {

    this.props.setArticleTimeOut(!this.props.articleTimeout)

    setTimeout(() => {
      this.props.setComponentTimeOut(!this.props.timeout);
    }, 325)

    setTimeout(() => {
      this.props.setArticleVisible(!this.props.isArticleVisible)
      this.props.setActiveArtice('')
    }, 350)
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.props.isArticleVisible) {
        this.handleCloseArticle()
      }
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div
          className={`body ${this.props.loading} ${
            this.props.isArticleVisible ? 'is-article-visible' : ''
          }`}
        >
          <div id="wrapper">
            <Header
              onOpenArticle={this.handleOpenArticle}
              timeout={this.props.timeout}
            />
            <Main
              isArticleVisible={this.props.isArticleVisible}
              timeout={this.props.timeout}
              articleTimeout={this.props.articleTimeout}
              article={this.props.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            />
            <Footer timeout={this.props.timeout} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
    isArticleVisible: state.article.isArticleVisible,
    timeout: state.article.timeout,
    articleTimeout: state.article.articleTimeout,
    article: state.article.article,
    loading:  state.article.loading,  
  }
)


const mapDispatchToProps = dispatch =>
    bindActionCreators({
      setComponentTimeOut,
      setArticleVisible,
      setArticleTimeOut,
      setArticleLoading,
      setActiveArtice 
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
