import express from "express"
import * as profileController from "../controller/profileController.js"
import * as profileControllerBaru from "../controller/profileControllerBaru.js"

const web = express.Router()


web.get('/:username', profileController.publicProfile)
web.get('/:profile/:username', profileControllerBaru.publicProfile)

export default web
