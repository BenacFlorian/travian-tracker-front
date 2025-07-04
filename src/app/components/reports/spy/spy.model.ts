export interface Troops {
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;
  six: number;
  seven: number;
  eight: number;
  nine: number;
  ten: number;
  eleven: number;
}
  
export interface PlayerData {
    tribe: string;
    allianceTag: string;
    travianAllianceId: string;
    playerName: string;
    travianPlayerId: string;
    villageName: string;
    travianVillageId: string;
    sendTroops?: Troops; // pour attacker
    presentTroops?: Troops; // pour defender
    deadTroops: Troops;
    additionalsInformationsGetted?: string[]; // uniquement pour attacker
}

export interface ReportParsed {
    date: Date;
    attacker: PlayerData;
    defenders: PlayerData[];
  }
  