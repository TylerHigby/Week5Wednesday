import { planetsService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .post('', this.createPlanet)
      .get('', this.getPlanet)
  }

  async createPlanet(request, response, next) {
    try {
      const body = request.body
      const newPlanet = await planetsService.createPlanet(body)
      response.send(newPlanet)
    } catch (error) {
      next(error)
    }
  }

  async getPlanet(request, response, next) {
    try {
      const planet = await planetsService.getPlanet(request.query)
      response.send(planet)
    } catch (error) {
      next(error)
    }
  }

}