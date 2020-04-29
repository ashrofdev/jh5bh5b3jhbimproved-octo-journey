import React, {Component} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Admin from './components/Admin'

class App extends Component {
    
    componentDidMount(){
      Notification.requestPermission()
    }
    state = {
      search: '',
      outcome: []
    }


 
  render(){
    document.querySelectorAll('img').forEach(e=>{
        console.log('alright')
    })
    return (
      <div className="App">
        <Admin/>
      </div>
    );
  }
}

export default App;
