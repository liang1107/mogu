import "../scss/kind.scss";
import "../scss/mainfooter.scss";
import Mdsearchlist from "./searchlist.js"
import Mainhead from "./homehead.js"
import Mainfooter from "./homefooter.js"
import Mdche from "./che.js"
import Mashop from "./shop.js"
import Mdsearch from "./headsearch.js"
export default {
	head:function(){
		$("#header").load("./../html/kind.html #kindhead",function(){
			console.log("ok");
			$("#kindhead").find(".input").on("tap",function(){
				
				Mdsearch.head();
				Mdsearch.content();
				Mainfooter.footer(0);
				$("#footer").css({
					display: "block"
				})
			})
			$("#kindhead").find(".che ").on("tap",function(){
				if(localStorage.getItem("id")){
//					用户登录过后在这里显示
					Mashop.head()
					Mashop.content()
				}else{
					Mdche.head("kind");
					Mdche.content();
					$("#footer").css({
						display: "none"
					})
				}
			})
		})
	}
		,
	content:function(){
		$("#content").load("./../html/kind.html #kindcontent",function(){
			console.log("aaaa")
			$.ajax({
				type:"get",
				url:"http://mce.mogucdn.com/jsonp/multiget/3?pids=41789%2C4604&callback=?",
				success:function(data){
//					console.log(data.data[41789].list)
					for (var it of data.data[41789].list) {
						$("#kindcontent .nav1").append("<a maitKey="+it.maitKey+" miniWallkey="+it.miniWallkey+">"+it.title+"</a>")
					}
					$("#kindcontent .nav1 a").eq(0).addClass("aw").siblings().removeClass("aw");
					$.ajax({
							type:"get",
								url:"http://mce.mogujie.com/jsonp/makeup/3?pid=41888&_=1501153329666&callback=?",
								success:function(data){
//									console.log(data.data.categoryNavigation.list)
									for (var ita of data.data.categoryNavigation.list) {
										$("#kindcontent .right .right1").append("<div><img src="+ita.image+" /><p>"+ita.title+"</p></div>")
									}
								}
						})
					
					$.ajax({
							type:"get",
								url:"https://list.mogujie.com/search?cKey=h5-cube&fcid=10062603&page=1&_version=1&pid=&q=&cpc_offset=0&_=1501156292323&callback=?",
								success:function(data){
//									console.log(data.result.wall.docs)
									for (var itb of data.result.wall.docs) {
										$("#kindcontent .right .right3").append("<div><img src="+itb.img+
										" /><p>"+itb.title+"</p><p><span>￥"+itb.price+
										"</span><span class=iconfont>"+itb.cfav+"&#xe601;</span></p></div>")
									}
								}
						})
					
					
					
					
					
					$("#kindcontent .nav1 a").on("tap",function(){
						$(this).addClass("aw").siblings().removeClass("aw")
						var maitKey=$(this).attr("maitKey")
						var miniWallkey=$(this).attr("miniWallkey")
//						console.log(maitKey,miniWallkey);
						
					
							$.ajax({
							type:"get",
								url:"http://mce.mogujie.com/jsonp/makeup/3?pid="+maitKey+"&_=1501153329666&callback=?",
								success:function(data){
									$("#kindcontent .right .right1").html("")
//									console.log(data.data.categoryNavigation.list)
									for (var ita of data.data.categoryNavigation.list) {
										$("#kindcontent .right .right1").append("<div><img src="+ita.image+" /><p>"+ita.title+"</p></div>")
									}
								}
						})
					
					$.ajax({
							type:"get",
								url:"https://list.mogujie.com/search?cKey=h5-cube&fcid="+miniWallkey+"&page=1&_version=1&pid=&q=&cpc_offset=0&_=1501156292323&callback=?",
								success:function(data){
//									console.log(data.result.wall.docs)
									$("#kindcontent .right .right3").html("")
									for (var itb of data.result.wall.docs) {
										$("#kindcontent .right .right3").append("<div><img src="+itb.img+
										" /><p>"+itb.title+"</p><p><span>￥"+itb.price+
										"</span><span class=iconfont>"+itb.cfav+"&#xe601;</span></p></div>")
									}
								}
						})
						
						
						
						
						
						
						
						
					})
					
				}
			});
		})
			
	}
}