import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      tasks: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato'],
      taskInput: ''
    }
  }

  onSubmitTask(event) {
    event.preventDefault();
    const task = this.state.taskInput;
    this.setState({
      tasks: this.state.tasks.concat(task),
      taskInput: ''
    });
  }

  onChangeTaskInput(event) {
    this.setState({
      taskInput: event.target.value
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {
              this.state.tasks.map((name, index) => {
                return <li key={index}>{name}</li>;
              })
            }
          </ul>
           <form onSubmit={this.onSubmitTask.bind(this)}>
             <input type="text" id="new-task" value={this.state.taskInput} onChange={this.onChangeTaskInput.bind(this)} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    );
  }
}


export default App;
