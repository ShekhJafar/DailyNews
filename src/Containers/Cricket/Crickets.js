import React, {Component} from 'react';
import NewsPosts from '../../Components/NewsArticles/NewsArticles';

class Crickets extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         CricketPosts:[]
    //     }
    // }
    render(){
        return(
            <NewsPosts articles={this.props.CricketArticles}/>
        )
    }
    componentDidMount(){
        if(this.props.CricketArticles ==0){
            console.log('Cricket container');
          this.props.FetchNewsPosts('everything?domains=espncricinfo.com','CricketArticles',false,null)
        }
    }
}
export default Crickets