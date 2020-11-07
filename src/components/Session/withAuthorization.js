import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import AuthUserContext from './context';
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
          <AuthUserContext.Consumer>
                {authUser => condition(authUser) ? <Component /> : null}
          </AuthUserContext.Consumer>
        );

    }

    return withRouter(withFirebase(WithAuthorization));
};

export default withAuthorization;

