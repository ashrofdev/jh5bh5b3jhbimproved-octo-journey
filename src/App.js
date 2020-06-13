import React, {Component} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Admin from './components/Admin'
import Reviews from './components/Reviews';

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
      <div>
        <Admin/>
        <Reviews/>
      </div>
    );
  }
}

export default App;
