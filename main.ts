import Carro from "./carro/carro";
import Cliente from "./cliente/cliente";
import CompraCarro from "./compraCarro/compraCarro";
import Funcionario from "./funcionario/funcionario";

let car = new Carro('Logan', 1999, 10000);

let cliente = new Cliente('Thiago', 4999);

let funcionario = new Funcionario('Wolverine', 0);

let compra = new CompraCarro(cliente, funcionario, car);

compra.detalharCompra();