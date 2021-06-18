export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchdate: string, orbitType: string, operational: boolean) {
       this.name = name;
       this.type = type;
       this.launchDate = launchdate;
       this.orbitType = orbitType;
       this.operational = operational;


    }

    shouldShowWarning(): boolean {
         return this.type === 'Space Debris'
        
        
        
    }


}

