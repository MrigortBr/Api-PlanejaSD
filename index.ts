import { sign } from 'jsonwebtoken';

const valor = sign({ id: 3 }, 'ad');

console.log(valor);
