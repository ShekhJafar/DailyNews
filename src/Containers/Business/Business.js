import React, { Component } from 'react';
import NewsArticles from '../../Components/NewsArticles/NewsArticles';
class Business extends Component{
    
    render(){
    return (
        <NewsArticles articles={this.props.BusinessArticles} />
    )
    }
    componentDidMount(){
        if (this.props.BusinessArticles==0) {
            console.log('Business container');
            this.props.FetchNewsPosts('top-headlines?country=in&category=business', 'BusinessArticles', false, null)   
        }
    }
}
export default Business;