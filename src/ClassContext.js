import { Component, createContext } from 'react'

const Context = createContext('mi valor')

const Provider = ({ children }) => {
    return (
        <Context.Provider value='otro valor'>
            {children}
        </Context.Provider>
    )
}

class Componente extends Component {
    static contextType = Context //asi podemos acceder al contexto en las clases
    render() {
        console.log(this.context)
        return (
            <div>Hola mundo</div>
        )
    }
}

//Otra forma de acceder al contexto dede clases
//Componente.contextType = Context

//Context.Consumer se puede utilizar si no se
const ClassContext = () => {
    return (
        <Provider>
            <Componente />
            <Context.Consumer>
                {valor => <div>{valor}</div>}
            </Context.Consumer>
        </Provider>
    )
}

export default ClassContext