import Vue from 'vue';

// 引入兼容文件
import '@hai2007/polyfill/Promise.js';

// 引入启动界面
import App from './App.vue';

// 引入基础和公共样式
import '@hai2007/style/normalize.css';
import './style/common.css';

// 引入路由
import router from './router';

//根对象
window.vm = new Vue({

    //挂载点
    el: document.getElementById('root'),

    // 路由
    router,

    // 启动vue
    render: createElement => createElement(App)

});
