export interface Report {
    id: number;
    type: 'SPY' | 'BATTLE';
    attacking_village_id: number;
    owner_alliance_id: number;
    attacking_troops_id: number;
    dead_troops_id: number;
    date: Date;
    additional_informations: string[];
    to_heal_troops_id: number;
    attacking_village: Village;
    attacking_troop: Troop;
    dead_troop: Troop;
    to_heal_troop?: Troop;
    owner_alliance: Alliance;
    report_2_defenders: Report2Defender[];
}
export interface Village {
    id: number;
    coordonate_x: number;
    coordonate_y: number;
    travian_village_id: number;
    is_capital: boolean;
    name: string;
    created_at: Date;
    player_id: number;
    player: Player;
}
  
export interface Player {
    id: number;
    travian_player_id: number;
    name: string;
    created_at: Date;
    alliance_id: number | null;
    tribe_id: number;
    tribe: Tribe;
    alliance?: Alliance;
}
  
export interface Tribe {
    id: number;
    name: string;
    language: string;
    bg_img_path: string;
    icon_img_path: string;
    lkp_troopss: LkpTroop[];
}
  
export interface LkpTroop {
    id: number;
    position: number;
    name: string;
    language: string;
    img_path: string;
}

export interface Alliance {
    id: number;
    tag: string;
    travian_alliance_id: number;
    server_id: number;
    name: string | null;
    created_at: Date;
}
  
export interface Troop {
    id: number;
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
    created_at: Date;
}

export interface Report2Defender {
    id: number;
    is_village_target: boolean;
    defender_village_id: number;
    report_id: number;
    present_troops_id: number;
    dead_troops_id: number;
    to_heal_troops_id: number;
  
    defender_village: Village;
    present_troop: Troop;
    dead_troop: Troop;
    to_heal_troop?: Troop;
}
  