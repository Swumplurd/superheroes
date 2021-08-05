export const CardComp = ({ id, name, fullname, gender, race, height, weight, image, combat, durability, intelligence, power, speed, strength, publisher }) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img loading="lazy" src={image} alt={id} />

                <div className="card-body">
                    <p className="card-text">
                        <strong>Nombre: </strong> {name}, <strong>Nombre Completo: </strong> {fullname}, <strong>Altura: </strong> {height[1]}, <strong>Peso: </strong> {weight[1]}
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                            <span className="badge rounded-pill bg-primary">Combate: {combat}</span>
                            <span className="badge rounded-pill bg-secondary">Durabilidad: {durability}</span>
                            <span className="badge rounded-pill bg-success">Inteligencia: {intelligence}</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        
                            <span className="badge rounded-pill bg-danger">Poder: {power}</span>
                            <span className="badge rounded-pill bg-warning text-dark">Velocidad: {speed}</span>
                            <span className="badge rounded-pill bg-info text-dark">Fuerza: {strength}</span>
                        
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                                {gender || "No Especificado"}
                            </button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                                {race || "No Especificado"}
                            </button>
                        </div>
                        <small className="text-muted">{publisher}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};
