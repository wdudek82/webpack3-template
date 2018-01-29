import 'babel-runtime/regenerator';
import 'webpack-hot-middleware/client';
import './main.css';
import './index.html';

let a = async (args) => {
  const { foo, bar } = args
  await console.log('Hello from the future!', foo, bar);
  console.log('Done');
}

a({ foo: 'Paulina', bar: 'Neevor' });
