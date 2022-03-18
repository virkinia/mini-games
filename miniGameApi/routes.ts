import { Router, Application } from 'express';
import GameController from './contollers/game.controller';



const setRoutes = (app: Application): void => {
  const router = Router();

  const gameCtrl = new GameController();

  // Game
  router.route('/game/new-session').get(gameCtrl.insert);
  //router.route('/game/join-user').post(game);
  //router.route('/game/update').post(catCtrl.insert);


  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

};

export default setRoutes;