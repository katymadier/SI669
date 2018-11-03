import { Hero } from './hero';

var nextHeroId: number = 100;

export class HeroManager {

    private heroes: Object = {}; 

    public constructor() {

    }

    public createHero(heroName: string, heroPowers: string[] = []) {
        let heroId = this.getNextHeroId();
        let hero = new Hero(heroName, heroId, heroPowers);
        this.heroes[heroId] = hero;
    }

    private getNextHeroId(): number {
        return nextHeroId++;
    }

    public getHeroById(id: number): Hero {
        return this.heroes[id];
    }

    public getHeroByName(name: string): Hero {
        let heroList = this.getHeroes();
        for (let i in heroList) {
            if (heroList[i].getName() === name) {
                return heroList[i];
            }
        }
        return undefined;
    }

    public getHeroes(): Hero[] {
        let heroesList: Hero[] = [];
        for (let key in this.heroes) {
            heroesList.push(this.heroes[key]);
        }
        return heroesList;
    }

    public removeHero(hero: Hero) {
        delete this.heroes[hero.getId()];
    }

    public removeHeroById(id: number) {
        delete this.heroes[id];
    }
}