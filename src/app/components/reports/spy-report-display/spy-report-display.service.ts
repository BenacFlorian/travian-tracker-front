import { Injectable } from '@angular/core';
import { LkpTroop, Player, Report, Tribe, Troop } from '../../../models/db.model';

@Injectable({
  providedIn: 'root'
})
export class SpyReportDisplayService {
  constructor() {}

  getTitle(report: Report) {
    const attackingVillageName = report.attacking_village.name;
    const targetDefender = report.report_2_defenders.find(defender => defender.is_village_target);
    
    if (targetDefender) {
      return `${attackingVillageName} espionne ${targetDefender.defender_village.name}`;
    }
    
    // Fallback si aucun village cible n'est trouvé
    return `${attackingVillageName} espionne un village`;
  }

  isSpyReportForResource(report: Report) {
    const additionalInfo = report.additional_informations;
    // test if all value is int represent in a string
    const isAllInt = additionalInfo.every(info => !isNaN(Number(info)));
    return isAllInt;
  }

  getTroopTooltip(lkpTroops: LkpTroop[], troopIndex: number): string {
    const troop = lkpTroops.find(troop => troop.position === troopIndex);
    if (troop) {
      return troop.name;
    }
    return '';
  }

  getReportLink(id: number | undefined, server_url: string = 'https://ttq.x2.europe.travian.com/', type: 'alliance' | 'player' | 'village') {
    if(!id) return '';
    switch(type){
      case 'alliance':
        return `${server_url}/alliance/${id}`;
      case 'player':
        return `${server_url}/profile/${id}`;
      case 'village':
        return `${server_url}/karte.php?d=${id}`;
    }
  }

  getDefenderTribeBgImagePath(tribe: Tribe) {
    return tribe.bg_img_path;
  }

  getTroopImagePath(lkpTroops: LkpTroop[], troopIndex: number) {
    const troop = lkpTroops.find(troop => troop.position === troopIndex);
    if (troop) {
      return troop.img_path;
    }
    return '';
  }

  getTroopsCount(troopsIndex: number, troops: any){
    if(!troops) return 0;
    return troops[this.getLabelIndex(troopsIndex)];
  }

  getLabelIndex(num: number) {
    switch(num){
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      case 6:
        return 'six';
      case 7:
        return 'seven';
      case 8:
        return 'eight';
      case 9:
        return 'nine';
      case 10:
        return 'ten';
      case 11:
        return 'eleven';
    }
    return '';
  }

  getHeroImagePath() {
    return 'assets/hero/hero.png';
  }

  getDeadTroopImagePath() {
    return 'assets/hero/deadTroops.png';
  }
  getDefaultTroopImagePath() {
    return 'assets/hero/troops.png';
  }
  getDefaultAttackingImagePath() {
    return 'assets/hero/attack.png';
  }

  getDefaultHospitalImagePath(){
    return 'assets/hero/hospital.png'
  }
}
