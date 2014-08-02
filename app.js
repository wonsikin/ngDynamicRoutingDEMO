/**
 * Created by Administrator on 14-8-2.
 */
var app = angular.module('app', ['ngRoute']);//创建名为app的模块

//配置动态路由
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/about', {//当解析到/about路径的时候，会调用viws/about.html模板和使用aboutCtrl控制器
            title: '关于',
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl'
        })
        .when('/contact', {
            title: '测试',
            templateUrl: 'views/contact.html',
            controller: 'contactCtrl'
        }).otherwise({
            title: '首页',
            redirectTo: '/'
        });
}]);
//页面title跟着变化
app.run(['$location','$rootScope',function($location,$rootScope){
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.title;
    });
}]);
