import React,{Component} from 'react';
import NewsPosts from '../../Components/NewsArticles/NewsArticles';

class Entaintement extends Component{
render(){
    return(
        <NewsPosts articles={this.props.EntaintementArticles}/>
    )
}
componentDidMount(){

    if(this.props.EntaintementArticles ==0){
        console.log('Entaintement container');
      this.props.FetchNewsPosts('top-headlines?country=in&category=entertainment','EntaintenemtArticles',false,null)
    }
}
}
export default Entaintement