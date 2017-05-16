define(function(){
    console.log('b')
    function bFn(){
        console.log("我是b模块函数！")
    }
    //提供接口
    return{
        bFn:bFn
    }
})