import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './App.css';
import { format } from 'date-fns/esm';


const Month = _ => (
  <Calendar
    onChange={(val) => console.log(format(val, 'MMMM YYYY'))}
    value={new Date()}
    minDate={new Date()}
    maxDetail={'year'}
  />
);
class App extends Component {
  render() {
    return (
      <div>
        <Month />
      </div>
    );
  }
}

export default App;
