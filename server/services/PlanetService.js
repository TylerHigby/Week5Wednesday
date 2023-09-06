import { dbContext } from "../db/DbContext.js"

class PlanetsService {


  async createPlanet(body) {
    const newPlanet = await dbContext.Planet.create(body)
    await newPlanet.populate('galaxy')
    return newPlanet
  }
  async getPlanet(query) {
    const planet = await dbContext.Planet.find(query).populate('galaxy')
    return planet
  }

  async getPlanetsByGalaxyId(galaxyId) {
    const planets = await dbContext.Planet.find({ galaxyId: galaxyId }).populate('galaxy')
    return planets
  }

}

export const planetsService = new PlanetsService()