"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = __importDefault(require("./carro/carro"));
var cliente_1 = __importDefault(require("./cliente/cliente"));
var compraCarro_1 = __importDefault(require("./compraCarro/compraCarro"));
var funcionario_1 = __importDefault(require("./funcionario/funcionario"));
var car = new carro_1.default('Logan', 1999, 10000);
var cliente = new cliente_1.default('Thiago', 4999);
var funcionario = new funcionario_1.default('Wolverine', 0);
var compra = new compraCarro_1.default(cliente, funcionario, car);
compra.detalharCompra();
