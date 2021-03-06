"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const pokemons_1 = require("./routes/pokemons");
class App {
    constructor() {
        this.pokeRoutes = new pokemons_1.Pokemons();
        this.app = express();
        this.config();
        this.pokeRoutes.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
