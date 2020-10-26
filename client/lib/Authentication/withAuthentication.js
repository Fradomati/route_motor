import React, { useState, useEffect, createContext } from "react";
import { whoameFN } from "../../src/services/AuthService"

export const UserSessionContext = createContext();


export const withAuthentication = (Component) => () => {
    const [loading, setLoading] = useState(true);
    const [userLoaded, setUserLoaded] = useState()


    useEffect(() => {
        whoameFN()
            .then((user) => {
                setUserLoaded(user)
            })
            .catch((e) => {
                setUserLoaded(false)
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <UserSessionContext.Provider value={[userLoaded, setUserLoaded]}>
            {loading && (<p>Cargando...</p>)}
            {!loading && (<Component />)}
        </UserSessionContext.Provider>
    );
};