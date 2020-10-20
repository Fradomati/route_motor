import React, { useState, useEffect, createContext } from "react";
import { whoameFN } from "../../src/services/AuthService"

export const UserSessionContext = createContext();


export const withAuthentication = (Component) => () => {
    const [loading, setLoading] = useState(true);
    const [userSession, setUserSession] = useState()
    const [noneSession, setNoneSession] = useState()


    useEffect(() => {
        whoameFN()
            .then((user) => {
                setUserSession(user)
            })
            .catch((e) => {
                setNoneSession(true)
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <UserSessionContext.Provider value={{ userSession, setUserSession, noneSession }}>
            {loading && (<p>Cargando...</p>)}
            {!loading && (<Component value={userSession} />)}
        </UserSessionContext.Provider>
    );
};