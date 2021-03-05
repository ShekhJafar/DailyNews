import React from 'react';
import './NewsArticle.css';
function NewsPost(props) {

    return (
        <div className='news-article'>
            <p className='article-title'>{props.article.title}</p>
            <img className='article-img' src={props.article.urlToImage}/>
            <p className='article-description'>
                {props.article.description}
                <a href={props.article.url}>Read Full Article</a>
            </p>
        </div>
    )
}
export default NewsPost