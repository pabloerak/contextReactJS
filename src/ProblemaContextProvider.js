import { createContext, useContext, useState, memo, useCallback } from 'react'


//DONDE UTILIZAR CONTEXT
//en situaciones donde las variables no van a cambiar (idioma, usuario, etc)cls
const Context = createContext()

//memo y useCallback no funcionan, ya que se rerenderiza incrementar y decrementar
//esto se debe a que siempre que hay un cambio en el provider se rerenderizan todos los valores
const ContadorProvider = ({ children }) => {
    const [contador, setContador] = useState(0)
    const incrementar = useCallback(() => setContador(contador + 1), [])
    const decrementar = useCallback(() => setContador(contador - 1), [])
    return (
        <Context.Provider value={{ contador, incrementar, decrementar }}>
            {children}
        </Context.Provider>
    )
}

const Incrementar = memo(() => {
    console.log('incrementar')
    const { incrementar } = useContext(Context)
    return (
        <button onClick={incrementar}>Incrementar</button>
    )
})

const Decrementar = memo(() => {
    console.log('decrementar')
    const { decrementar } = useContext(Context)
    return (
        <button onClick={decrementar}>Decrementar</button>
    )
})

const Label = () => {
    console.log('label')
    const { contador } = useContext(Context)
    return (
        <h1>{contador}</h1>
    )
}

const App = () => {
    return (
        <ContadorProvider>
            <Label />
            <Incrementar />
            <Decrementar />
        </ContadorProvider>
    )
}

export default App