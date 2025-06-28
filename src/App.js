import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component{
    state={ 
        advice: ''
    };

    componentDidMount()
    {
        //console.log('Component mounted');
        this.fetchadvice();
    }
    fetchadvice =() =>
    {
        axios.get('https://api.adviceslip.com/advice')
        
        .then((response) =>
        {
            const {advice}=response.data.slip;
            console.log(advice);
            this.setState({advice: advice});
        })
        .catch((error) =>
        {
            console.error('Error fetching advice:', error);
        })
    }
    



    render(){
        const { advice } = this.state;
        return(
            <div className="App">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className='button' onClick={this.fetchadvice}>
                   
                        <span>give me advice!</span>
                        
                    </button>
                 </div>
            </div>
        )
    }
}
export default App;