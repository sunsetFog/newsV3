export default {
    state: {
      bean: "豌豆"
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        /*
            报错：Parameter 'state' implicitly has an 'any' type.
            解决：
            在tsconfig.JSON文件compilerOptions里加 "noImplicitAny": false,
        */
        bean: function(state) {
            return state.bean;
        }
    }
}