import React, { Component } from 'react';
import NewsPosts from '../../../Components/NewsArticles/NewsArticles';
import './Slider.css';
class Slider extends Component {

    render() {

        return (
            <div className='slider-container'>
                <NewsPosts articles={this.props.SliderArticles} />
            </div>
        )
    }
    componentDidMount() {

        if (this.props.SliderArticles.length == 0) {
            console.log('Slider Articles')
            this.props.FetchSilderArticles('everything?q=covid-19', null, true, 'SliderArticles')
        }
    }
}
export default Slider