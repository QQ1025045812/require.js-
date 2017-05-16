define(function(){
    console.log('a')
    function aFn(){
        console.log("我是a模块函数！")
    }
    //提供接口
    return{
        aFn:aFn
    }
})
// define(['a'],function(){
//     console.log('a')
//     function aFn(){
//         console.log("我是a模块函数！")
//     }
//     //提供接口
//     return{
//         aFn:aFn
//     }
// })