import React,{Component} from 'react';
import NewsArticles from '../../Components/NewsArticles/NewsArticles';
class Science extends Component{
 
    render(){
    return(
        <NewsArticles articles={this.props.ScienceArticles}/>
    )
}
componentDidMount(){
    console.log(this.props)
    if(this.props.ScienceArticles==0){
    console.log('Science container');
    this.props.FetchNewsPosts('top-headlines?country=in&category=Science','ScienceArticles',false, null)
}
}
}
export default Science