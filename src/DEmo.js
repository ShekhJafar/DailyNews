import React,{Component} from 'react';
class Demo extends Component{
    render()
    {
        return <h1>Demo</h1>
    }
    componentDidMount()
    {
        console.log(this.props)
    }
}
export default Demo