import React, { Component } from 'react';
import UserContext, {UserConsumer} from './UserContext'
import ComponentB from './ComponentB';

export default class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    username => {
                        return <div>Hello {username}</div>
                    }
                }

            </UserConsumer>

        )
    }
}
