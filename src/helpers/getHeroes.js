export const getHeroes = async() => {
    const url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
    const httpRequest = await fetch(url);
    const response = await httpRequest.json();
    const data = response.map((hero) => {
        return {
            id: hero.id,
            name: hero.name,
            fullname: hero.biography.fullName,
            gender: hero.appearance.gender,
            race: hero.appearance.race,
            height: hero.appearance.height,
            weight: hero.appearance.weight,
            image: hero.images.sm,
            combat: hero.powerstats.combat,
            durability: hero.powerstats.durability,
            intelligence: hero.powerstats.intelligence,
            power: hero.powerstats.power,
            speed: hero.powerstats.speed,
            strength: hero.powerstats.strength,
            publisher: hero.biography.publisher,
        }
    })
    return data;
}