import { GameDB } from "../models/game-schema";
import BaseCtrl from "./base.controller";

class GameController  extends BaseCtrl {
    model = GameDB
}

export default GameController;