import mongoose from "mongoose"

const planetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  class: {type: String, required: true}
})

const Planet = mongoose.model('Planet', planetSchema)
export default Planet