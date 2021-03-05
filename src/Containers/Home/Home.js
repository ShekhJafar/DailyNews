import React,{Component} from 'react';
import Hoc from '../../hoc/hoc'
import Silder from './Slider/Slider'
import TopHeadlines from './TopHeadlines/TopHeadlines'
class Home extends Component{
    render(){
        return(
            <Hoc>
                <Silder FetchSilderArticles={this.props.FetchNewsPosts} SliderArticles={this.props.HomeArticles["SliderArticles"]}/>
                <TopHeadlines FetchTopHeadlinesArticles={this.props.FetchNewsPosts} TopHeadlinesArticles={this.props.HomeArticles["TopHeadlinesArticles"]}/>
            </Hoc>
        )
    }
}
export default Home