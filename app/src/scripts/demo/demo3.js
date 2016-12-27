var myApp=angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/home',{
			templateUrl:'/app/src/scripts/tpls/home.html',
			controller:'homeController',
			caseInsensitivematch:true
		})
		.when('/list',{
			templateUrl:'/app/src/scripts/tpls/list.html',
			controller:'listController',
			caseInsensitivematch:true
		})
		.when('/find/:id/:name',{  //product
			templateUrl:'/app/src/scripts/tpls/find.html',
			controller:'findController',
			caseInsensitivematch:true
		})
		.when('/my',{
			templateUrl:'/app/src/scripts/tpls/my.html',
			controller:'myController as serviceCon',
			caseInsensitivematch:true,
			resolve:{
				serviceDate:function($http){
					return $http.get('/api/getLivelist.php')
						.then(function(result){
							return result.data.data;
						})
				}
			}
		})
		.when('/service/:id',{
			templateUrl:'/app/src/scripts/tpls/detail.html',
			controller:'DetailController',
			controllerAs:'DetailCon',
			caseInsensitivematch:true
		})
		.when('/search/:searchtext',{
			templateUrl:'/app/src/scripts/tpls/search.html',
			controller:'searchController'
		})
		.when('/set',{
			templateUrl:'/app/src/scripts/tpls/set.html',
			controller:'setController',
			caseInsensitivematch:true
		})
		// .otherwise({
		// 	redirectTo:'/home'
		// })
		.otherwise('/home');
}])
myApp.controller('homeController',['$scope',function($scope){

}])
myApp.controller('listController',['$scope','$q','$timeout',function($scope,$q,$timeout){
	$scope.items=[
		{
			type:'电子产品',
			data:'1年内',
			products:['手机','笔记本电脑','吹风机','台式机电脑']
		},
		{
			type:'厨房用品',
			products:['电饭煲','电烤箱','电炒锅'],
			data:'2年内'
		},
		{
			type:'小家电',
			products:['小风扇','运动水壶','加湿器'],
			data:'半年内'
		},
		{
			type:'生活用品',
			products:['金属用品','水晶工艺','玻璃工艺品','钱包钱夹','清洁套装'],
			data:'3个月'
		},
		{
			type:'家用电器',
			products:['电视机','电冰箱','全自动洗衣机'],
			data:'1年半'
		}
	]

	$scope.val='';
	
	/*$scope.keyUp=function(event){
		var obj=[];		
		if(event.keyCode=='13'){	
			var defer=$q.defer();
			$scope.addClass=function(column){
				if($scope.val !=''){
					if(column.products.indexOf($scope.val) !=-1){
						//$scope.decide=true;
						obj.push('decide');
						return 'bg';
					}else{
						//$scope.decide=false;
						obj.push('no');
					}
					defer.resolve(obj);
				}
			}	
			defer.promise
				 .then(function(data){
					if(data.indexOf('decide') ==-1){
						//console.log('暂无此商品！')
						alert('没有找到您要的商品！');
					}else{
						console.log('找到了')
					}
				})		
		}else{
			return '';
		}
	}*/

}])

//product
myApp.controller('findController',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
	$scope.msg='欢迎来到  find  页面';
	//$routeParams  这个对象用于接收路由传递的参数
	var id=$routeParams.id,
		name=$routeParams.name,
		datas=null;
	$http({
		url:'/api/getLivelist.php',
		method:'post',
		data:{
			id:$routeParams.id,
			name:$routeParams.name
		}
	}).then(function(result){
		datas = result.data.data;
		$scope.datas=datas;
	})
}])
//service
myApp.controller('myController',['$scope','serviceDate','$location','$rootScope','$log','$route',function($scope,serviceDate,$location,$rootScope,$log,$route){
	var vm=this;
	vm.serviceListDate = serviceDate;
	vm.toSearch=function(){
		if(vm.search){
			$location.url('/search/'+vm.search);      //跳转至指定路径
		}
	}

	$scope.$on('$routeChangeStart',function(event,current,previous,next){
		//console.log(event)
		if(!confirm('确定要离开该路由'+current.$$route.originalPath+'吗？')){
			event.preventDefault();
		}
	})
	$scope.$on('$routeChangeSuccess',function(){
		$log.info('ok');
	})
	$scope.$on('$routeUpdate',function(){

	})
	vm.reloadDate=function(){
		$route.reload();   //重新加载路由 重新刷新路由
	}
}])
myApp.controller('DetailController',['$scope','$routeParams',function($scope,$routeParams){
	var vm=this;
	vm.id=$routeParams.id;
}])
myApp.controller('searchController',['$scope','$routeParams',function($scope,$routeParams){
	$scope.search=$routeParams.searchtext;
}])


/*myApp.controller('countryController',['$scope',function($scope){
	//$scope.name='中国';
	this.name='中国';
}])
myApp.controller('provinceController',['$scope',function($scope){
	//$scope.name='北京';
	this.name='北京';
}])
myApp.controller('cityController',['$scope',function($scope){
	//$scope.name='上海';
	this.name='上海';
}])*/