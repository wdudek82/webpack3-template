import 'babel-runtime/regenerator';
import 'react-hot-loader/patch';
import 'babel-register';
import 'webpack-hot-middleware/client?reload=true';
import './main.css';
import './index.html';
import { debug } from 'util';
import './app';

let a = async (args) => {
  const { foo, bar } = args
  await console.log('Hello from the future!', foo, bar);
  console.log('Done');
}

a({ foo: 'Paulina', bar: 'Neevor' });

console.log('Hello, neevor!');