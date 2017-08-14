import "../scss/search.scss";
import Mdsearchlist from "./searchlist.js"
import Mainhead from "./homehead.js"
import Mainfooter from "./homefooter.js"
export default {
	head:function(){
		$("#header").load("./../html/headsearch.html #headsearch",function(){
			console.log("ok");
			$("#headsearch").find(".back").on("tap",function(){
				Mainhead.head();
				Mainhead.content();
				Mainfooter.footer();
				$("#footer").css({
					display:"block"
				})
				
			})
			$("#headsearch").find(".sou").on("tap",function(){
				var zhi=$("#headsearch").find(".input").val()
//				console.log(zhi);
				if(zhi==""){
					alert("内容不能为空")
				}else{
					if(localStorage.getItem("search")){
						var arr=JSON.parse(localStorage.getItem("search"));
						var a=0
						for(var i of arr){
							if(zhi!=i){
								console.log(1)
								a++
							}
						}
						if(a==arr.length){arr.push(zhi)}
						localStorage.setItem("search",JSON.stringify(arr))
					}else{
						var arr=[];
						arr.push(zhi)
//						console.log(arr)
						localStorage.setItem("search",JSON.stringify(arr))
						
					}
					Mdsearchlist.head(zhi);
					Mdsearchlist.content(zhi);
				
			
				}
				
			})
			
		})
	},
	content:function(){
		$("#content").load("./../html/headsearch.html #contentsearch",function(){
			console.log("ok");
			if(localStorage.getItem("search")){
				var hot=JSON.parse(localStorage.getItem("search"));
				$(".hosity").find(".as").html("")
				for(var it of hot){
					
			    			$(".hosity").find(".as").append("<a >"+it+"</a>")
			    			
			    		}
				
				$(".hosity").find(".right").on("tap",function(){
					localStorage.removeItem("search");
					$(".hosity").find(".as").html("暂无历史搜索")
				})
			}
			
			    $.ajax({
			    	url:"http://list.mogujie.com/module/mget?code=sketch%2ChotWord&callback=?",
			    	type:"get",
			    	data:{},
			    	success:function(resu){
//			    		console.log(resu.data.hotWord.data);
			    		var hot=resu.data.hotWord.data
			    		for(var it of hot){
			    			$(".hot").find(".as").append("<a style='color:"+it.color+"'>"+it.frontword+"</a>")
			    			
			    		}
			    		
			    		$("#contentsearch").find("a").on("tap",function(){
						 		console.log("aaaaa")
						 		Mdsearchlist.head($(this).html());
								Mdsearchlist.content($(this).html());
						 })
						    		
			    		
			    		
			    	}
			    })
			   
			 
			    
			    
			    
			    
			    
			    
			    
		})
	}
}
