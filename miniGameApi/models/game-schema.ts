

import mongoose, { Schema } from 'mongoose';
import { Game, Group, User } from './game.model';



const UserSchema = new Schema<User>({
    name: {type: String},
    turn:  {type: Number},
    points: {type: Number}
})

const GroupSchema = new Schema<Group>({
    turn: {type: Number, default: 0},
    team: {type: [UserSchema] }
})


const GameSchema = new Schema<Game>({
    _id: { type: Schema.Types.ObjectId },
    users: { type: [String] },
    groups: { type: [GroupSchema] }  
});

const GameDB = mongoose.model<Game>("Game", GameSchema)
export { GameDB, Game }