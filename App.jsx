// 1. Extract Component from the global React object instead of using an 'import' statement
const { Component } = React;

class Counter extends Component { 
    constructor(props) { 
        super(props); 
        // Initialize state 
        this.state = { 
            count: 0 
        }; 
        // Bind event handler 
        this.incrementCount = this.incrementCount.bind(this); 
    } 

    // Event handler to increase count 
    incrementCount() { 
        this.setState(prevState => ({ 
            count: prevState.count + 1 
        })); 
    } 

    render() { 
        return ( 
            <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}> 
                <h1>Counter App</h1> 
                <p>Current Count: <strong>{this.state.count}</strong></p> 
                <button 
                    onClick={this.incrementCount}
                    style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
                > 
                    Increment 
                </button> 
            </div> 
        ); 
    } 
} 

// 2. Instead of "export default", directly render it to the page
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);
