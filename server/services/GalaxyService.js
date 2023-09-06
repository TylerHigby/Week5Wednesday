import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class GalaxyService {


  async createGalaxy(body) {
    const newGalaxy = await dbContext.Galaxy.create(body)
    return newGalaxy
  }

  async getGalaxy(query) {
    const galaxy = await dbContext.Galaxy.find(query)
    return galaxy
  }

  async editGalaxy(galaxyId, updates) {
    const originalGalaxy = await dbContext.Galaxy.findById(galaxyId)
    if (!originalGalaxy) throw new Error('Unable to find galaxy at ${galaxyId}')
    originalGalaxy.name = updates.name != undefined ? updates.name : originalGalaxy.name
    originalGalaxy.size = updates.size != undefined ? updates.size : originalGalaxy.size
    originalGalaxy.age = updates.age != undefined ? updates.age : originalGalaxy.age
    await originalGalaxy.save()
    return originalGalaxy
  }

  async deleteGalaxy(galaxyId) {
    const galaxyToRemove = await dbContext.Galaxy.findById(galaxyId)
    if (!galaxyToRemove) {
      throw new BadRequest('no galaxy with id: ' + galaxyId)
    }
    await galaxyToRemove.remove()
    return `removed the galaxy: ${galaxyToRemove.name}`
  }

}


export const galaxyService = new GalaxyService()