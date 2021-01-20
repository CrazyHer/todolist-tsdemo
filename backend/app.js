const koa = require("koa");
const app = new koa();
const cors = require("koa2-cors");
const koabody = require("koa-body");
const Router = require("@koa/router");
const route = new Router();
let todolist = [];
let count = 0;
app.use(cors());
app.use(koabody());

route.get("/todo/getlist", (ctx) => {
  ctx.body = {
    code: 0,
    message: "success",
    data: todolist.sort((a, b) => a.status - b.status).reverse(),
  };
});

route.put("/todo", (ctx) => {
  let { content } = ctx.request.body;
  todolist.push({
    id: count++,
    content,
    status: 0,
  });
  count++;
  ctx.body = {
    code: 0,
    message: "success",
  };
});

route.post("/todo/del", (ctx) => {
  let { id } = ctx.request.body;
  todolist = todolist.filter((v) => v.id !== id);
  count--;
  ctx.body = {
    code: 0,
    message: "success",
    todolist,
    id,
    bd: ctx.request.body,
  };
});

route.post("/todo/finish", (ctx) => {
  let { id } = ctx.request.body;
  todolist = todolist.map((v) => (v.id === id ? { ...v, status: -1 } : v));
  ctx.body = {
    code: 0,
    message: "success",
  };
});

route.post("/todo/star", (ctx) => {
  let { id } = ctx.request.body;
  todolist = todolist.map((v) => (v.id === id ? { ...v, status: 1 } : v));
  ctx.body = {
    code: 0,
    message: "success",
  };
});
route.post("/todo/unstar", (ctx) => {
  let { id } = ctx.request.body;
  todolist = todolist.map((v) =>
    v.id === id && v.status === 1 ? { ...v, status: 0 } : v
  );
  ctx.body = {
    code: 0,
    message: "success",
  };
});

app.use(route.routes()).use(route.allowedMethods());
app.listen(2333);
console.log(`服务器已经启动在2333端口`);
