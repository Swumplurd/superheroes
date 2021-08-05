export const HeaderComponent = () => {
    return (
        <header id="header">
            <div className="collapse bg-dark" id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4 className="text-white">Superheroes API</h4>
                            <p className="text-muted">
                                La API de superhéroes es una fuente de datos cuantificada y accesible mediante programación de todos los superhéroes del universo del cómic. Hemos tomado todas las cosas y las hemos reunido en una forma que es más fácil de consumir con software. Luego creamos una API para que puedas consumirla sin problemas.
                            </p>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                            <h4 className="text-white">Mas Información</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://github.com/Swumplurd/superheroes" className="text-white">
                                        Ver en Github
                                    </a>
                                </li>
                                <li>
                                    <a href="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json" className="text-white">
                                        Ver la API
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <button className="navbar-brand d-flex align-items-center btn btn-link">
                        <strong>Suherheroes API</strong>
                    </button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};
