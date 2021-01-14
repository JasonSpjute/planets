import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class GalaxyService{
    async delete(id) {
        let gone = await dbContext.Galaxies.findByIdAndDelete(id)
        if(!gone){
            throw new BadRequest("invalid id")
        }
    }
    async edit(body) {
        let updated = await dbContext.Galaxies.findOneAndUpdate({_id: body.id}, body, {new: true})
        if(!updated){
            throw new BadRequest('invalid id')
        }
        return updated
    }
    async create(body) {
        return await dbContext.Galaxies.create(body)
    }
    async getAll(query = {}) {
        return await dbContext.Galaxies.find(query)
    }
    async getOne(id) {
        let galaxy = await dbContext.Galaxies.findById(id)
        if(!galaxy) {
            throw new BadRequest("Invalid Id")
        }
        return galaxy
    }

}

export const galaxyService = new GalaxyService()