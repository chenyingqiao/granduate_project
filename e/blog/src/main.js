import Vue from 'vue'
import App from './vue/App.vue'
import Sync from './vue/Sync.vue'
import VueRouter from 'vue-router'
require("./tpl/require/css/init.css")

Vue.use(VueRouter);
var ComponentsCache={};
// //异步载入组件
// let App=function(){
// 	let callback=resolve=>require(["./App.vue"],resolve);
// 	return callback;
// 	// if(!ComponentsCache.App){
// 	// 	ComponentsCache.App=Vue.component("app", callback);
// 	// }
// 	// return ComponentsCache.App;
// };
// let Sync=function(){
// 	let callback=resolve=>require(['./Sync.vue'],resolve);
// 	return callback;
// 	// if(!ComponentsCache.Sync){
// 	// 	ComponentsCache.Sync=Vue.component("sync",callback);
// 	// }
// 	// return ComponentsCache.Sync;
// };
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: App},
  { path: '/bar', component: Sync}
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
