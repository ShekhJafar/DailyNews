import React, { Component } from 'react';
import NewsArticles from '../../Components/NewsArticles/NewsArticles';
class Technology extends Component {
render(){
    return (
        <NewsArticles articles={this.props.TechnologyArticles} />
    )
}
componentDidMount(){
if (this.props.TechnologyArticles==0) {
    console.log('Technology container');
        this.props.FetchNewsPosts('top-headlines?country=in&category=technology', 'TechnologyArticles', false, null)
}
}
}
export default Technology