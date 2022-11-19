import estilo from './sass/login/login.module.scss';

function App() {
    console.log(estilo);

    return (
        <div className='contenedor'>
            <header className={estilo.contenedor_login}>
                <h1>Hola Mundo</h1>
            </header>
        </div>
    );
}

export default App;
