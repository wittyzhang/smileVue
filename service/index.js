
const Koa = require('koa');

const app = new Koa();

const { connect } = require('./database/init.js');


// app.use(async (ctx) => {
//   ctx.body = '<h1>hello world</h1>';
// });

;(async () => {
  await connect();
})();

app.listen(3535, () => {
  console.log('[server] starting in port 3535');
});
