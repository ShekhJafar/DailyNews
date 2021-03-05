import React, { Component } from 'react';
import MenuBar from '../Components/Menubar/Menubar';
import Hoc from '../hoc/hoc';
import Home from '../Containers/Home/Home';
import Business from '../Containers/Business/Business';
import Cricket from '../Containers/Cricket/Crickets';
import Entaintement from '../Containers/Entaintenment/Entaintenment';
import Health from '../Containers/Health/Health';
import Science from '../Containers/Science/Science';
import Searched from '../Containers/SearchedArticles/SearchedArticles';
import Technology from '../Containers/Technology/Technology';
import Footer from '../Components/Footer/footer';


import {
    BrowserRouter as Router,
  
    Route
   
} from "react-router-dom";
class DailyNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CricketArticles: [],
            EntaintenemtArticles: [],
            HomeArticles: {
                SliderArticles: [],
                TopHeadlinesArticles: []
            },
            BusinessArticles:[],
            HealthArticles:[],
            ScienceArticles:[],
            TechnologyArticles:[],
            SearchedArticles:[],
           
        }
    }
    render() {
        const FetchNewsPosts = (url, statekey, isHome, HomeKey) => {
            fetch(`https://newsapi.org/v2/${url}&apiKey=enter your key here`)
                .then(response => response.json())
                .then(art => {
                    if (isHome) {
                        let homeobj = {
                            ...this.state.HomeArticles
                        }
                        homeobj[HomeKey] = art.articles;
                        this.setState({ HomeArticles: homeobj })
                    }
                    else {
                        this.setState({ [statekey]: art.articles })
                    }

                });
        }
        /* Updating Searchkeywords state based on user input */
       const updateingSearchwords = (value) =>{
            this.setState({searchkeywords:value});
        }
        return (
            <Router>
                <Hoc>

                    <MenuBar FetchNewsPosts={FetchNewsPosts}
                             
                    />
                  
                    <Route exact path='/' >
                        <Home FetchNewsPosts={FetchNewsPosts} 
                        HomeArticles={this.state.HomeArticles}
                        
                        />
                    </Route>
                    <Route exact path='/cricket' >
                        <Cricket FetchNewsPosts={FetchNewsPosts} CricketArticles={this.state.CricketArticles} />
                    </Route>
                    <Route exact path='/entertainment' >
                        <Entaintement  FetchNewsPosts={FetchNewsPosts} EntaintementArticles={this.state.EntaintenemtArticles} />
                    </Route>
                    <Route exact path='/business'>
                        <Business FetchNewsPosts={FetchNewsPosts} BusinessArticles={this.state.BusinessArticles}/>
                    </Route>
                    <Route exact path='/health'>
                        <Health FetchNewsPosts={FetchNewsPosts} HealthArticles={this.state.HealthArticles} />
                    </Route>
                    <Route exact path='/science'>
                        <Science FetchNewsPosts={FetchNewsPosts} ScienceArticles={this.state.ScienceArticles}/>
                    </Route>
                    <Route exact path='/technology'>
                        <Technology FetchNewsPosts={FetchNewsPosts} TechnologyArticles={this.state.TechnologyArticles}/>
                    </Route>
                   
                        <Searched FetchNewsPosts={FetchNewsPosts}  SearchedArticles={this.state.SearchedArticles}/>
                    
                    <Footer />
                </Hoc>
            </Router>
        )
    }
}
export default DailyNews;