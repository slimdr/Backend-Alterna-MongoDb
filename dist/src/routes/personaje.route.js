"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personajeRoute = void 0;
const express_1 = require("express");
const personaje_controller_1 = require("../controllers/personaje.controller");
exports.personajeRoute = (0, express_1.Router)();
exports.personajeRoute.get('/', personaje_controller_1.retrieve);
exports.personajeRoute.get('/:id', personaje_controller_1.retrieveById);
exports.personajeRoute.post('/', personaje_controller_1.create);
exports.personajeRoute.put('/:id', personaje_controller_1.update);
exports.personajeRoute.delete('/:id', personaje_controller_1.remove);