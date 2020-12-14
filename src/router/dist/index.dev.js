"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _subway = _interopRequireDefault(require("@/views/subway"));

var _nume = _interopRequireDefault(require("@/views/subway/numes/nume1.vue"));

var _organization = _interopRequireDefault(require("@/views/organization"));

var _archives = _interopRequireDefault(require("@/views/archives"));

var _newlyAdded = _interopRequireDefault(require("@/views/newlyAdded"));

var _category = _interopRequireDefault(require("@/views/newlyAdded/pages/category.vue"));

var _names = _interopRequireDefault(require("@/views/newlyAdded/pages/names.vue"));

var _source = _interopRequireDefault(require("@/views/newlyAdded/pages/source.vue"));

var _all = _interopRequireDefault(require("@/views/subway/numes/pages/all.vue"));

var _daishenhe = _interopRequireDefault(require("@/views/subway/numes/pages/daishenhe.vue"));

var _weishenbao = _interopRequireDefault(require("@/views/subway/numes/pages/weishenbao.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var originalPush = _vueRouter["default"].prototype.push; //修改原型对象中的push方法

_vueRouter["default"].prototype.push = function push(location) {
  return originalPush.call(this, location)["catch"](function (err) {
    return err;
  });
};

var routes = [{
  path: '/',
  name: 'subway',
  component: _subway["default"]
}, {
  path: '/organ',
  name: 'organ',
  component: _organization["default"]
}, {
  path: '/archives',
  name: 'archives',
  component: _archives["default"]
}, {
  path: '/newlyAdded',
  name: 'newlyAdded',
  component: _newlyAdded["default"]
}, {
  path: '/category',
  name: 'category',
  component: _category["default"]
}, {
  path: '/source',
  name: 'source',
  component: _source["default"]
}, {
  path: '/names',
  name: 'names',
  component: _names["default"]
}, {
  path: '/mune1',
  name: 'nume1',
  component: _nume["default"],
  children: [{
    path: 'all',
    name: 'all',
    component: _all["default"]
  }, {
    path: 'daishenhe',
    name: 'daishenhe',
    component: _daishenhe["default"]
  }, {
    path: 'weishenbao',
    name: 'weishenbao',
    component: _weishenbao["default"]
  }]
}];
var router = new _vueRouter["default"]({
  routes: routes
}); // router.beforeEach((to,path)=>{
//   console.log(to.path);
//   next()
// })

var _default = router;
exports["default"] = _default;