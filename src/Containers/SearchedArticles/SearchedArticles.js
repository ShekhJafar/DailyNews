import React,{Component} from 'react';
import NewsPosts from '../../Components/NewsArticles/NewsArticles';
class Searched extends Component
{
    render(){
        return (
             <NewsPosts articles={this.props.SearchedArticles}/>
         
        )
    }
   
}
export default Searched