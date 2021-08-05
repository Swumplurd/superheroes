import { FooterComp } from "../FooterComp/FooterComp";
import { GridCardComp } from "../GridCardComp/GridCardComp";
import { HeaderComponent } from "../HeaderComp/HeaderComp";

export const HeroesApp = () => {
    return (
        <>
            <HeaderComponent />

            <main>
                <GridCardComp/>
            </main>

            <FooterComp />
        </>
    );
};
