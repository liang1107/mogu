import "../scss/che.scss";
import Mdsearchlist from "./searchlist.js"
import Mainhead from "./homehead.js"
import Mainfooter from "./homefooter.js"
import Mdkind from "./kind.js"
export default {
	head:function(k){
		$("#header").load("./../html/che.html #chehead",function(){
			console.log("ok");
			$("#chehead").find(".back").on("tap",function(){
				if(k=="kind"){
					Mdkind.head();
					Mdkind.content();
					Mainfooter.footer(1);
					$("#footer").css({
						display:"block"
					});
					console.log($("#footer").find("li").eq(1))
				
				}else{
					Mainhead.head();
					Mainhead.content();
					Mainfooter.footer(0);
					$("#footer").css({
						display:"block"
					})
				}
				
				
				
			})
		})
	}
		,
	content:function(){
		$("#content").load("./../html/che.html #checontent",function(){
			$("#checontent").find(".guang").on("tap",function(){
				Mainhead.head();
				Mainhead.content();
				Mainfooter.footer();
				$("#footer").css({
					display:"block"
				})
				
			})
		})
			
	}
}
