import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';


const withAuthorization = condition => Component => {
    const WithAuthorization = ({ props,firebase }) => {
        

        useEffect(() => {
            firebase.auth.onAuthStateChanged(authUser => {
                if(!condition(authUser)) {
                    props.history.pushState('/signin')
                }
            });
        }, [])

        return (
           <Component />
        );

    }

    return withRouter(withFirebase(WithAuthorization));
};

export default withAuthorization;

