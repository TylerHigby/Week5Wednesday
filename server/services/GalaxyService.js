import { dbContext } from "../db/DbContext.js"

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

}


export const galaxyService = new GalaxyService()