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

			//1. enetry point
			app.listen(8823,function(){
			  console.log('DD2 listen on *:8823');
			});
		}


		var publicReturn = {
			route:route,
		}
		return publicReturn;
	}

})();



