import React,{Component} from 'react';
import NewsPosts from '../../../Components/NewsArticles/NewsArticles';
class TopHeadlines extends Component{
    render(){
        return(
            <NewsPosts articles={this.props.TopHeadlinesArticles} />
        )
    }
    componentDidMount(){
      if (this.props.TopHeadlinesArticles ==0){
            console.log('TopHeadlines container');
          this.props.FetchTopHeadlinesArticles('top-headlines?country=in',null,true,'TopHeadlinesArticles')
        } 
    }
} 
export default TopHeadlines