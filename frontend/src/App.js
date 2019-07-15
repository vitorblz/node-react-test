import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    fetch('http://localhost:5000/itens', { method: 'GET' }).then(function(
      response
    ) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
    console.log("teste");
  }

  render() {
    return (
      <div>
        <h1>Teste Opinion Box</h1>
      </div>
    );
  }
}
