import React from 'react';

export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            }, (error) => {
                return () => <h1>{error.message}</h1>;
            }).then((json) => {
                this.setState({
                    data: json
                });
            })
    }

    render() {
        const data = this.state.data;

        return (
            <ul>
                {data.map(user => <li key={user.name} >{user.name}</li>)}
            </ul>
        );
    }
}