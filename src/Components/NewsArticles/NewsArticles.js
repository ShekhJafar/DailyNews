import React, { Component } from 'react';
import NewsPost from '../NewsArticle/NewsArticle';
import './NewsArticles.css'

class NewsPosts extends Component {
   
    render() {
        let posts = null;
        posts = this.props.articles.map((article, index) => {
            return <NewsPost key={index} article={article} />
        })
        
        return (
            <div className='articles-container'>
                {posts}

            </div>
        )
    }
  
}
export default NewsPosts