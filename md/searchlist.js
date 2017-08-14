import "../scss/searchlist.scss";
import Mdsearch from "./headsearch.js"
import Mdlist from "./list.js"
import Mainhead from "./homehead.js"
import Mainfooter from "./homefooter.js"
export default {
	head:function(zhi){
		$("#header").load("./html/searchlist.html #homehead",function(){
			console.log(zhi);
			$("#homehead .input").find("span").eq(1).html(zhi)
			$("#homehead .liuyan").on("tap",function(){
				Mainhead.head();
				Mainhead.content();
				Mainfooter.footer();
				$("#footer").css({
					display:"block"
				})
			})
			
		})
	},
	content:function(zhi){
		$("#content").load("./html/searchlist.html #listcontent",function(){
			console.log("ok");
			var a=0
			$("#listcontent .xia").on("tap",function(){
//				console.log($("#listcontent .listul1"),"aaa")
				if(a==0){
					$("#listcontent .listul1").animate({
						height:"100%",
						opacity:1
					},500)
					a=1
				}else{
					$("#listcontent .listul1").animate({
						height:"0",
						opacity:0
					},500)
					a=0
				}
				
			})
			Mdlist.content(zhi)
			
			
			   
			    
			    
			    
			    
			    
			    
			    
			    
		})
	}
}
