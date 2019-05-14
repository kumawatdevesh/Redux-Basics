import React from 'react';

class Persons extends React.Component {

    state = {
        name: '',
        age: ''
    }

    nameChangeHnadler = (e) =>{
        this.setState({name: e.target.value});
    };

    agehandler = (e) => {
        this.setState({age: e.target.value});
    };

    render() {

        return(
            <div>
                <input type="text" name="name" placeholder="enter name" 
                value={this.state.name} onChange={this.nameChangeHnadler}/>
                <input type="text" age="age" placeholder="enter age" 
                value={this.state.age} onChange={this.agehandler}/>
                <button onClick={() => this.props.onAdded(this.state.name, this.state.age)}>Submit</button>
            </div>
        );
    }
}

export default Persons;