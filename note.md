
## 记录

> 安装依赖

- element - `npm i element-ui -S`
  - babel-plugin-component - `npm install babel-plugin-component -D`
- vue-router - `npm install vue-router@3.6.5`
- less - `npm install less@4.1.2`
- less-loader - `npm install less-loader@6.0.0`



## 问题

- 数组的过滤器 filter

```js
return this.menuData.filter(function(item){ return !item.children})
// 上下两条语句相等
return this.menuData.filter(item => !item.children)
```

- 解决路由重复跳转报错的问题

  - 方法1（跳转后使用catch语句对错误不再进行处理）
    ```js
    this.$router.push(item.path).catch(error => {})
    ```
  - 方法2(  在进行路由跳转时对路径进行判断如果重复即不再执行)
    ```
      
    ```