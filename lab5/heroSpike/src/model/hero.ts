
export class Hero {
    // private heroName: string;
    // private heroId: number;
    // private heroPowers: string[];

    public constructor(private heroName: string, 
                        private heroId: number, 
                        private heroPowers: string[] = []) {

    }

    public setName(newName: string): void {
        this.heroName = newName;
    }

    public getName(): string {
        return this.heroName;
    }

    public getId(): number {
        return this.heroId;
    }

    public getPowers(): string[] {
        return this.heroPowers;
    }

    public setPowers(newPowers: string[]): void {
        this.heroPowers = newPowers;
    }

    public addPower(newPower: string): void {
        this.heroPowers.push(newPower);
    }

    public removePower(powerToRemove: string) : void {
        if (this.heroPowers.indexOf(powerToRemove) != -1) {
            this.heroPowers.splice(this.heroPowers.indexOf(powerToRemove), 1);
        }
    }

    public toString() : string {
        return this.heroName + "(" + this.heroId + ") " + this.heroPowers;
    }
}