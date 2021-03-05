import React, { Component } from 'react';
import './Menubar.css'
import { BsNewspaper } from 'react-icons/bs';
import { AiOutlineFileSearch } from 'react-icons/ai'
import { NavLink, Link } from 'react-router-dom'
import { ImMenu3 } from 'react-icons/im'

class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchWords: ''
        }
    }
    searchWordsHandler = (event) => {
        this.setState({ searchWords: event.target.value });


    }
    searchArticlesHandler = (event) => {
console.log('Clicked')
        var searchurl = `everything?q=${this.state.searchWords}`
        this.props.FetchNewsPosts(searchurl, 'SearchedArticles', false, null)
        

    }
    render() {

        return (
            <header>
                <nav>
                    <div id='menucontainer'>

                        <div id='menuIcon' >
                            <label htmlFor='iconchk'>
                                <ImMenu3 color='#fafafa' size={30} />
                            </label>

                        </div>
                        <input type='checkbox' id='iconchk' />
                        <ul id='MenuBar' className='menubar'>

                            <li className='menubar-item'><NavLink exact to='/'>Home</NavLink></li>
                            <li className='menubar-item'><NavLink to='/cricket'>Cricket</NavLink></li>
                            <li className='menubar-item'><NavLink to='/entertainment'>Entertainment</NavLink></li>
                            <li className='menubar-item more-news-container'>
                                More News
                              <ul id='morenews'>
                                    <li><Link to='/business'>Business</Link></li>
                                    <li><Link to='/health'>Health</Link></li>
                                    <li><Link to='/science'>Science</Link></li>
                                    <li><Link to='/technology'>Technology</Link></li>

                                </ul></li>
                            <li className='extra-menu-item menubar-item'><Link to='/business'>Business</Link></li>
                            <li className='extra-menu-item menubar-item'><Link to='/health'>Health</Link></li>
                            <li className='extra-menu-item menubar-item'><Link to='/science'>Science</Link></li>
                            <li className='extra-menu-item menubar-item'><Link to='/technology'>Technology</Link></li>

                        </ul>
                        <div id='searchbar'>
                            <input type='checkbox' id='searchchk' />
                            <div id='searchbox'>
                                <input type='text'
                                    onChange={this.searchWordsHandler} placeholder='Search For Articles'
                                />
                                <Link to='/search' onClick={this.searchArticlesHandler}>Search</Link>
                            </div>
                            <label htmlFor='searchchk' style={{ paddingTop: '15px', cursor: 'pointer' }}>
                                <AiOutlineFileSearch color='#ffffff' size={30} />
                            </label>

                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
export default MenuBar