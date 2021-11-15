module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    // parser: 'babel-eslint'// 注释这个就不用严格校验了
  },
  // 全局对象
  globals: {
    // 全局服务
    '$lib': true,
    'user_token': true,
    'user_name': true,
    'cordova': true,
    'StatusBar': true,
    'LCalendar': true
  }
}
