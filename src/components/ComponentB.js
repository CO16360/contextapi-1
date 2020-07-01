import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './UserContext'
export default class ComponentB extends Component {
    // both can be used --->same output
    //*****contextType has 2 limitations over UserConsumer
    //(1) it can be used only with class based components 
    //(2) it can subscribe to only one context
    static contextType=UserContext
   
    render() {
        return (
            <div>
                Component B context {this.context}
                <ComponentC />
            </div>
        )
    }
}
// ComponentB.contextType = UserContext
