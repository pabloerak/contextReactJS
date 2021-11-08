import { createContext, useContext } from 'react'

//este valor por defecto se representa si no hay un provider
const ContextDefault = createContext('valor por defecto')
const Context2 = createContext('valor por defecto sin provider')

//un Provider es el encargado de pasarle el contexto a los componentes hijos
//el provider se le asigna a un contexto
const DefaultProvider = ({ children }) => {
    return (
        <ContextDefault.Provider value={'mi valor'}>
            {children}
        </ContextDefault.Provider>
    )
}

const Contenido = () => {
    const ctx = useContext(ContextDefault)
    return (
        <div>{ctx}</div>
    )
}

const Contenido2 = () => {
    const ctx = useContext(Context2)
    return (
        <div>{ctx}</div>
    )
}

function ContextProvider() {
    return (
        <DefaultProvider>
            <Contenido />
            <Contenido2 />
        </DefaultProvider>
    );
}

export default ContextProvider;
