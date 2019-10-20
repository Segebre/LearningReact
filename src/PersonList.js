import React from 'react';
import axios from 'axios';


class PersonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            isLoaded: false,
            error: null
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({isLoaded: true, people: response.data})
        }, error => {
            this.setState({isLoaded: false, error: error.message})
        })
    }

    render() {
        const isLoaded = this.state.isLoaded;
        const people = this.state.people;
        const error = this.state.error;

        if (error) {
            return <p>We found the folowing error: {error}</p>
        } else if (!isLoaded) {
            return <p>The site is loading...</p>
        } else {
            return (
                <ul>
                    {people.map((person) => (
                        <li>{person.name}</li>
                    ))}
                </ul>
            );
        }

    }
}

export default PersonList;