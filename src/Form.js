import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);

        this.initialState = {
            'name': '',
            'job': ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }
    
    submitForm = () => {
        if (this.state.name && this.state.job) {
            this.props.handleSubmit(this.state);
            this.setState(this.initialState);
        }
    }

    render() {
        const {name, job} = this.state;
        return (
            <div className="container">
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={this.handleChange}></input>
                    <label htmlFor="job">Name</label>
                    <input type="text" name="job" value={job} onChange={this.handleChange}></input>
                    <input type="button" value="submit" onClick={this.submitForm}></input>
                </form>
            </div>
        )
    }
}
