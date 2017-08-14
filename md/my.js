import "./../scss/my.scss"
import Mainhead from "./homehead.js"
import Mainfooter from "./homefooter.js"
import Maindeng from "./deng.js";
export default {
	head:function(){
		$("#header").load("./../html/my.html #myhead",function(){
			$("#myhead").find(".back").on("tap",function(){
				Mainhead.head();
				Mainhead.content();
				Mainfooter.footer(0);
				$("#footer").css({
					display:"block"
				})
				
			})
			$("#myhead").find(".zhuxiao").on("tap",function(){
				localStorage.removeItem("id")
				Maindeng.head();
				Maindeng.content();
				
			})
		})
	},
	content:function(user){
		$("#content").load("./../html/my.html #mycontent",function(){
			console.log(user)
			$("#mycontent .name span").html(user)
			
		})
	}
}
