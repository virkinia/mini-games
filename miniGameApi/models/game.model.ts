import { ObjectId } from "mongodb";

export interface Group {
    team: User[],
    turn: number
}

export interface User {
    name: string,
    turn?: number,
    points?: number
}


export interface Game extends Document  {
    _id: ObjectId;
    users: string[];
    groups: Group [];
    options: string[];
    options_guessed: string[];
    game_id: number;
    round: number;
    ranking: User[];

}


export class Game implements Game {
    _id: ObjectId;
    users: string[];
    groups: Group [];
    options: string[];
    options_guessed: string[];
    game_id: number;
    round: number;
    ranking: User[];

    constructor() {
        this.users = [];
        this.groups = [];
        this.options = [];
        this.options_guessed = [];
        this.game_id = 0;
        this.round = 0;
        this.ranking = [];
    }
}


