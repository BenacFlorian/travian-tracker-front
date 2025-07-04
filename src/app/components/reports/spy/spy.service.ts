import { Injectable } from '@angular/core';
import { Troops, PlayerData, ReportParsed } from './spy.model';
import { StoreReportService } from '../../../services/store-report.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpyService {
  constructor(private storeReportService: StoreReportService) {}

  storeSpyReport(pastedDom: HTMLDivElement): Observable<any> {
    const report = this.parseReport(pastedDom.innerHTML);
    return this.storeReportService.storeSpyReport(report)
  }

  extractIdFromHref(href: string, prefix: string): string {
    const match = href.match(new RegExp(`${prefix}(\\d+)`));
    return match ? match[1] : '';
  }

  private parseDateFromReport(dateText: string): Date {
    // Nettoyer le texte de la date
    const cleanDateText = dateText.trim();
    
    // Format EU: jj.mm.aa, 24h (ex: 15.03.24, 14:30)
    const euPattern = /(\d{1,2})\.(\d{1,2})\.(\d{2}),\s*(\d{1,2}):(\d{2})/;
    const euMatch = cleanDateText.match(euPattern);
    if (euMatch) {
      const [, day, month, year, hour, minute] = euMatch;
      return new Date(Date.UTC(2000 + parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute)));
    }

    // Format US: mm/jj/aa, 12h (ex: 03/15/24, 2:30 PM)
    const usPattern = /(\d{1,2})\/(\d{1,2})\/(\d{2}),\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i;
    const usMatch = cleanDateText.match(usPattern);
    if (usMatch) {
      const [, month, day, year, hour, minute, ampm] = usMatch;
      let hour24 = parseInt(hour);
      if (ampm.toUpperCase() === 'PM' && hour24 !== 12) hour24 += 12;
      if (ampm.toUpperCase() === 'AM' && hour24 === 12) hour24 = 0;
      return new Date(Date.UTC(2000 + parseInt(year), parseInt(month) - 1, parseInt(day), hour24, parseInt(minute)));
    }

    // Format UK: jj/mm/aa, 12h (ex: 15/03/24, 2:30 PM)
    const ukPattern = /(\d{1,2})\/(\d{1,2})\/(\d{2}),\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i;
    const ukMatch = cleanDateText.match(ukPattern);
    if (ukMatch) {
      const [, day, month, year, hour, minute, ampm] = ukMatch;
      let hour24 = parseInt(hour);
      if (ampm.toUpperCase() === 'PM' && hour24 !== 12) hour24 += 12;
      if (ampm.toUpperCase() === 'AM' && hour24 === 12) hour24 = 0;
      return new Date(Date.UTC(2000 + parseInt(year), parseInt(month) - 1, parseInt(day), hour24, parseInt(minute)));
    }

    // Format ISO: aa/mm/jj, 24h (ex: 24/03/15, 14:30)
    const isoPattern = /(\d{2})\/(\d{1,2})\/(\d{1,2}),\s*(\d{1,2}):(\d{2})/;
    const isoMatch = cleanDateText.match(isoPattern);
    if (isoMatch) {
      const [, year, month, day, hour, minute] = isoMatch;
      return new Date(Date.UTC(2000 + parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute)));
    }

    // Si aucun format reconnu, essayer le parsing natif de Date
    const fallbackDate = new Date(cleanDateText);
    if (!isNaN(fallbackDate.getTime())) {
      // Convertir en UTC en créant une nouvelle date avec les composants UTC
      return new Date(Date.UTC(
        fallbackDate.getUTCFullYear(),
        fallbackDate.getUTCMonth(),
        fallbackDate.getUTCDate(),
        fallbackDate.getUTCHours(),
        fallbackDate.getUTCMinutes(),
        fallbackDate.getUTCSeconds()
      ));
    }

    // Si tout échoue, retourner la date actuelle en UTC
    console.warn(`Format de date non reconnu: "${cleanDateText}". Utilisation de la date actuelle en UTC.`);
    const now = new Date();
    return new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds()
    ));
  }

  extractTroops(tbody: HTMLTableSectionElement): Troops {
    const tds = Array.from(tbody.querySelectorAll('td'));
    const troops: any = {};
    tds.slice(0, 11).forEach((td, i) => {
      troops[this.getNumberInText(i + 1)] = parseInt(td.textContent || '0', 10) || 0;
    });
    return troops;
  }

  getNumberInText(index: number): string {
    switch (index) {
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
      default:
        return 'unknown';
    }
  }

  parseRole(roleDiv: Element, role: 'attacker' | 'defender'): PlayerData {
    const tribeIcon = roleDiv.querySelector('i.tribeIcon');
    const tribe = Array.from(tribeIcon?.classList || []).find(c => c !== 'tribeIcon') || '';

    const headline = roleDiv.querySelector('.troopHeadline');
    const allianceA = headline?.querySelector('span.inline-block > a');
    const allianceTag = allianceA?.textContent?.trim() ||  (allianceA as any)?.innerText || '';
    const travianAllianceId = allianceA ? allianceA.getAttribute('href')?.split('/').pop() || '' : '';

    const playerA = headline?.querySelector('a.player');
    const playerName = playerA?.textContent?.trim() || '';
    const travianPlayerId = playerA ? this.extractIdFromHref(playerA.getAttribute('href') || '', '/profile/') : '';

    const villageA = headline?.querySelector('a.village');
    const villageName = villageA?.textContent?.trim() || '';
    const travianVillageId = villageA ? this.extractIdFromHref(villageA.getAttribute('href') || '', '\\?d=') : '';

    const table = roleDiv.querySelector('table');
    const tbodies = table?.querySelectorAll('tbody') || [];
    const send = tbodies.length > 1 ? this.extractTroops(tbodies[1]) as Troops : {} as Troops;
    const dead = tbodies.length > 2 ? this.extractTroops(tbodies[2]) as Troops : {} as Troops;

    const additionalInfo: string[] = [];
    if (role === 'attacker') {
      const extraTable = roleDiv.querySelector('table.additionalInformation');
      const spans = extraTable?.querySelectorAll('td div span') || [];
      spans.forEach(span => additionalInfo.push(span.textContent?.trim() || ''));
    }

    return {
      tribe,
      allianceTag,
      travianAllianceId,
      playerName,
      travianPlayerId,
      villageName,
      travianVillageId,
      ...(role === 'attacker' ? { sendTroops: send } : { presentTroops: send }),
      deadTroops: dead,
      ...(role === 'attacker' ? { additionalsInformationsGetted: additionalInfo } : {})
    };
  }

  parseReport(html: string): ReportParsed {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const content = doc.querySelector('#content');
    if (!content) throw new Error('Élément #content introuvable');

    // Extraction de la date du rapport
    const reportWrapper = doc.querySelector('#reportWrapper');
    const timeDiv = reportWrapper?.querySelector('.time');
    const textDiv = timeDiv?.querySelector('.text');
    const dateText = textDiv?.textContent?.trim() || '';
    const reportDate = this.parseDateFromReport(dateText);

    const attackerDiv = content.querySelector('.role.attacker');
    if (!attackerDiv) throw new Error('Attaquant introuvable');

    const defenderDivs = Array.from(content.querySelectorAll('.role.defender'));
    if (defenderDivs.length === 0) throw new Error('Aucun défenseur trouvé');

    const defenders = defenderDivs.map(div => this.parseRole(div, 'defender'));

    return {
      date: reportDate,
      attacker: this.parseRole(attackerDiv, 'attacker'),
      defenders: defenders
    };
  }
}
