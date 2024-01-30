import { sign } from 'jsonwebtoken';

const valor = sign({ id: 3 }, ' ');

console.log(valor);
