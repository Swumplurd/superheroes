import { useFetchHeroes } from "../../hooks/useFetchHeroes";
import { CardComp } from "../CardComp/CardComp";

export const GridCardComp = () => {
    const { data: heroes, loading } = useFetchHeroes();

    return (
        <>
            <div className="album py-5 bg-light">
                <div className="container">
                    {loading && (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
                        {heroes.map(({ id, name, fullname, gender, race, height, weight, image, combat, durability, intelligence, power, speed, strength, publisher }) => {
                            return (
                                <CardComp
                                    key={id}
                                    id={id}
                                    name={name}
                                    fullname={fullname}
                                    gender={gender}
                                    race={race}
                                    height={height}
                                    weight={weight}
                                    image={image}
                                    combat={combat}
                                    durability={durability}
                                    intelligence={intelligence}
                                    power={power}
                                    speed={speed}
                                    strength={strength}
                                    publisher={publisher}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
