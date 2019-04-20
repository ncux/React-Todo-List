import React from 'react';
import { Link } from 'react-router-dom';


function AboutPage() {
    return (
        <React.Fragment>
            <h3 style={ aboutStyle }>About Todo List</h3>
            <p>
                This is a Todo List app created with React.

                <p>v1.0.0</p>
            </p>
        </React.Fragment>
    )
}


const aboutStyle = {
    textAlign: 'center',
    marginTop: '1rem'
};



export default AboutPage;