import React, {Component} from 'react';

export default class Option extends Component { 
    constructor(props) {
        super(props)
    }   
    render() {    
        return (
            <>
                {this.props.options.map((i, _) => 
                    <option value={i.id}>{i.genre_name}</option>
                )}
            </>
        )
    }
}