// 一. 创建Vue根实例
import Vue from "vue";
import App from "./App.vue";


new Vue({
    el: '#app',
    components: {
        App
    },

    template: '<App/>'
})

console.log('fuck')
// 二. 挂载App组件

const arr = [1, 2, 3].map(item => item + 1);

console.log(arr);

