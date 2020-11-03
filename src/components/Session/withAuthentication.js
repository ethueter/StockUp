import React, { useState, useEffect } from 'react';

import AuthUserContact from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
    const WithAuthentication = ({ firebase }) => {
        const [authUser, setAuthUser] = useState(null);

        useEffect(() => {
            firebase.auth.onAuthStateChanged(authUser => {
                authUser
                    ? setAuthUser(authUser)
                    : setAuthUser(null);
            });
        }, [firebase.auth])
        
            return (
              <AuthUserContact.Provider value={authUser}>
                <Component />
              </AuthUserContact.Provider>
            ); 
        
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;