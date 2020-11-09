import React,{Component} from 'react'
import './App.css';
import Table from './Components/tables'
import Api from './JsonApi/Api.json'


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      data:Api,
      direction:{
        order: 'asc'
      }
    }
  }

  sortDate=(key)=>{
    this.setState({
      data: this.state.data.sort((a,b)=>(
        this.state.direction[key] === 'asc'
        ?Date.parse(a[key]) - Date.parse(b[key])
        :Date.parse(b[key]) - Date.parse(a[key])
        )),
        direction:{
          [key]:this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
        }
    });
  }
  sortBy=(key)=>{
    this.setState({
      data: this.state.data.sort((a,b)=>(
        this.state.direction[key] === 'asc'
        ?parseInt(b[key]) - parseInt(a[key])
        :parseInt(a[key]) - parseInt(b[key])
        )),
        direction:{
          [key]:this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
        }
    });
  }


  render(){
    return (
      <div className="App">
        <Table 
        data={this.state.data}
        sortBy={this.sortBy} 
        sortDate={this.sortDate}
        />
      </div>
    );
  }
}

export default App;
