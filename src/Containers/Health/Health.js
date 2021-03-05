import React,{Component} from 'react';
import NewsArticles from '../../Components/NewsArticles/NewsArticles';
class Health extends Component{
   render(){
    return(
        <NewsArticles articles={this.props.HealthArticles}/>
    )
   }
   componentDidMount(){
       if (this.props.HealthArticles==0) {
        console.log('Health container');
        this.props.FetchNewsPosts('top-headlines?country=in&category=health','HealthArticles',false, null)
       }
   }
}
export default Health