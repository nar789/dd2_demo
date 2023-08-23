;(function(){
	module.exports=function(_g){

		var app = _g.app;
		var http = _g.http;

		function route(){
			app.get('/',function(req,res){
				res.render('index.html',{});
			});
			app.get('/add',function(req,res){
				res.render('add.html',{});
			});
			app.get('/pushup',function(req,res){
				res.render('pushup.html',{});
			});
			app.get('/squart',function(req,res){
				res.render('squart.html',{});
			});
			app.get('/neck',function(req,res){
				res.render('neck.html',{});
			});
			app.get('/arm',function(req,res){
				res.render('arm.html',{});
			});

			//1. enetry point
			app.listen(9999,function(){
			  console.log('DD2 listen on *:9999');
			});
		}


		var publicReturn = {
			route:route,
		}
		return publicReturn;
	}

})();



