//[],依赖的模块，文件名也就是模块名
require(['a','b'],function(aM,bM){//注意a和a.js路径区别，a相对于data-main,a.js相对于页面
    console.log("依赖的模块加载成功后执行的回调函数")
    aM.aFn();
    bM.bFn();
})