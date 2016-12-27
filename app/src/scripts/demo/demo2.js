// var commonUtil = require('../common/common');
// console.log(commonUtil)

var myApp=angular.module('myApp',[]);
myApp.controller('demoCon',['$scope',function($scope){
	var user=[
		{name:'marry',email:'marry@163.com'},
		{name:'doe',email:'doe@xinlang.com'}
	]
	$scope.user=user;
	$scope.isShow=true;
	$scope.isHide=false;
	$scope.counter=0;
	$scope.add=function(){
		this.counter++;
	}
	$scope.items=[];
	$scope.addItem=function(event){
		if(event.keyCode == '13'){
			this.items.unshift(this.item)
			$scope.item='';
		}
	}
	$scope.books=[
		{
			name:'javaScript高级程序设计',
			publite:true,
			ishas:false,
			updated:1480592321726
		},
		{
			name:'Angular权威指南',
			publite:false,
			ishas:true,
			updated:1480512321336
		},
		{
			name:'Vue实战',
			publite:true,
			ishas:false,
			updated:1480591121726
		},
		{
			name:'Node全栈开发',
			publite:false,
			ishas:true,
			updated:1480521321726
		}
	]
	$scope.price=199.99;
	$scope.friends=[
		{
			name:'maryy',
			phone:'18010172436'
		},
		{
			name:'hello',
			phone:'18023412436'
		},
		{
			name:'dawei',
			phone:'18011234436'
		},
		{
			name:'Doy',
			phone:'18010171234'
		},
		{
			name:'key',
			phone:'18010123436'
		},
		{
			name:'ziex',
			phone:'18010323236'
		}
	]
	$scope.searchText='';
	$scope.search=function(obj){
		if($scope.searchText !=''){
			if(obj.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) !=-1 || obj.phone.toLowerCase().indexOf($scope.searchText.toLowerCase()) !=-1){
				return true;
			}else{
				return false;
			}
		}else{
			return true;
		}
	}
}])
myApp.controller('demo2',['$scope',function($scope){
	$scope.userInfo=[
		{
			first:'Keith',
			last:'jess',
			gen:'Female',
			salary:123335,
			salarys:123335,
			birthday:new Date('2007-07-11')
		},
		{
			first:'FANG',
			last:'vane',
			gen:'Male',
			salary:123335,
			salarys:123335,
			birthday:new Date('1988-03-11')
		},
		{
			first:'SARA',
			last:'rose',
			gen:'Female',
			salary:232342,
			salarys:232342,
			birthday:new Date('1983-10-12')
		},
		{
			first:'AAM',
			last:'hot',
			gen:'Male',
			salary:668805,
			salarys:668805,
			birthday:new Date('1986-03-22')
		},
		{
			first:'MARK',
			last:'bear',
			gen:'Female',
			salary:68000,
			salarys:68000,
			birthday:new Date('1968-03-22')
		}
	]

	$scope.setColumn='name';  //设置默认的排序字段
	$scope.sortReverse=false;  //默认的排序方式


	//设置排序字段
	$scope.setSort=function(column){
		//如果传递过来的排序字段和当前点击的字段一致，则要降序 否则升序
		$scope.sortReverse=$scope.setColumn==column?!$scope.sortReverse:false;

		$scope.setColumn = column;		
	}
	//设置类
	$scope.getClass=function(column){
		if($scope.setColumn == column){
			return $scope.sortReverse?'up':'down';
		}
	}
	/*$scope.isShow=false;

	$scope.desc=0;
	$scope.one='';
	$scope.col='FirstName';

	$scope.c='';
	$('#list td').on('click',function(){
		$scope.isShow=true;
		if( $(this).find('span').hasClass('up') ){
			$(this).find('span').addClass('down').removeClass('up').parent().siblings().find('span').removeClass();
		}else{
			$(this).find('span').addClass('up').removeClass('down').parent().siblings().find('span').removeClass();
		}
	})*/

	$scope.firstText='';
	$scope.lastText='';

	$scope.give=function(obj){
		if($scope.firstText !=''){
			if(obj.first.toLowerCase().indexOf($scope.firstText.toLowerCase()) !=-1 ){
				return true;
			}else{
				return false;
			}
		}else if( $scope.lastText !='' ){
			if(obj.last.toLowerCase().indexOf($scope.lastText.toLowerCase()) !=-1 ){
				return true;
			}else{
				return false;
			}
		}else{
			return true;
		}
	}
}])
myApp.controller('myController',['$rootScope','$scope','$log','$timeout','$interval','$http','$q',function($rootScope,$scope,$log,$timeout,$interval,$http,$q){

	//$log

	//$log.log('输出')   //打印输出
	//$log.info('信息输出') //加叹号输出信息
	//$log.warn('警告输出') //加警告框输出
	//$log.error('错误输出') //输出错误信息
	//$log.debug('显示蓝色信息') //输出显示蓝色信息

	//$timeout
	var timer=null;
	$scope.gameStart=function(){
		$log.debug('游戏开始 start');
		// timer=$timeout(function(){
		// 	$scope.gameOver();
		// },2000)
		timer=$interval(function(){
			$log.info(new Date()*1);
		},1000,5)
	}
	$scope.gameOver=function(){
		$log.info('游戏结束 over');
		//$timeout.cancel(timer);
		$interval.cancel(timer);
	} 
	// $http({
	// 	url:'/mock/livelist.json'
	// }).then(function(data){
	// 	$log.log(data)
	// },function(msg){	
	// 	$log.error('错误输出'+msg)
	// })

	// $http.get('/mock/livelist.json')
	// 	 .done(function(data){
	// 		$log.info(data)
	//   	 })
	// 	 .fail(function(msg){
	// 		$log.error('错误')
	// 	 })




	// $http.get('/api/getLivelist.php?id=99&key=val')
	// 	.then(function(data){
	// 		$log.log(data)
	// 	},function(msg){
	// 		$log.error(msg)
	// 	})


	// $http({
	// 	url:'/api/getLivelist.php',
	// 	method:'post',
	// 	data:{id:99,key:'val'}//,
	// 	// headers:{
	// 	// 	'content-type':
	// 	// }
	// }).then(function(data){
	// 	$log.log(data);
	// },function(msg){
	// 	$log.error('错误')
	// })

	//$http.jsonp('http://')

	//$q
	var data={id:3,name:'marry'};
	var defer=$q.defer();
	$timeout(function(){
		defer.resolve(data);
	},3000)
	defer.promise.then(function(data){
		$log.log('接收数据'+data)
	},function(msg){
		$log.log('错误'+msg)
	})
}])

//创建服务
	//factory  工厂方法   (服务需要return 一个object对象出去)
	/*myApp.factory('User',function(){
		var user={
			id:'5',
			name:'marry',
			email:'marry@souhu.com',
			sex:0
		}
		var _getUser=function(){
			return user;
		}
		var _setUser=function(id,name,email){
			user.id=id;
			user.name=name;
			user.email=email;
		}
		return {
			getUser:_getUser,
			setUser:_setUser
		}
	})*/
	
	//service 方法
	/*myApp.service('User',function(){
		var user={
			id:'3',
			name:'marry',
			email:'marry163.qq.com',
			sex:0
		}
		this.getUser=function(){
			return user;
		}
		this.setUser=function(id,name,email){
			user.id=id;
			user.name=name;
			user.email=email;
		}
	})*/
	//provider 方法
	/*myApp.provider('User',function(){
		var user={
			id:'5',
			name:'marry',
			email:'marry.souhu.com',
			sex:1
		}
		var _getUser=function(){
			return user;
		}
		var _setUser=function(id,name,email){
			user.id=id;
			user.name=name;
			user.email=email;
		}
		this.$get=function(){
			return {
				getUser:_getUser,
				setUser:_setUser
			}
		}
	})*/
	//自定义 过滤器
	myApp.filter('gender',function(){
		return function(g){
			switch(g){
				case 0:
					return '男';
					break;
				case 1:
					return '女';
					break;
				default:
					return "其他";
					break;
			}
		}
	})
myApp.controller('showController',['$scope','User','$log','$rootScope',function($scope,User,$log,$rootScope){
	$scope.user=User.getUser();
	$rootScope.types='golabl';
	$scope.names='局部';
	$scope.getSave=function(){
		User.setUser($scope.id,$scope.name,$scope.email);
	}
}])
myApp.controller('myTemplate',['$scope',function($scope){
	//$scope.template='/app/src/scripts/tpls/template.string';
}])
/*$.ajax('/mock/liveback.json')
.done(function(data){
	alert(data)
})
.fail(function(){
	alert('失败')
})*/

/*$.when($.ajax('/mock/liveback.json'),$.ajax('/mock/liveback.json'))
.done(function(){
	console.log('成功')
})
.fail(function(){
	console.log('失败')
})
.done(function(){
	console.log('done')
})*/

/*var dfd=$.Deferred();//创建一个新的的反而热点对象
var wait=function(dfd){
	var tast=function(){
		alert('hello');
		dfd.resolve();
	}
	setTimeout(tast,3000)
	return dfd.promise();
}
var d=wait(dfd);
$.when(d)
.done(function(){
	alert('ok')
})
.fail(function(){
	alert('error')
})*/










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
		.when('/find/:id/:name',{
			templateUrl:'/app/src/scripts/tpls/find.html',
			controller:'findController',
			caseInsensitivematch:true
		})
		.when('/my',{
			templateUrl:'/app/src/scripts/tpls/my.html', //service
			controller:'myController',
			controllerAs:'searchCon',
			caseInsensitivematch:true,
			resolve:{
				serviceDate:function($http){
					return $http.get('/api/getLivelist.php')
						.then(function(result){
							//console.log(result)
							return result.data.data;
						})
				}
			}
		})
		.when('/set',{
			templateUrl:'/app/src/scripts/tpls/set.html',
			controller:'setController',
			caseInsensitivematch:true
		})
		/*.when('/search/:searchtext',{
			templateUrl:'/app/src/scripts/tpls/search.html',
			controller:'searchController',
			controllerAs:'searchCon'
		})*/
		// .otherwise({
		// 	redirectTo:'/home'
		// })
		.otherwise('/home');
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
myApp.controller('myController',['$scope','serviceDate','$location',function($scope,serviceDate,$location){
	var vm=this;
	vm.serviceListDate=serviceDate;
	//console.log($location)

	vm.toSearch=function(){
		if(vm.search){
			$location.url('/search/'+vm.search);  //跳转至指定路由
		}
	}
}])
myApp.controller('searchController',['$scope','$routeParams',function($scope,$routeParams){
	var vm=this;
	vm.id=$routeParams.id;
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
