import "../scss/deng.scss";
import Mdsearchlist from "./searchlist.js"
import Mainhead from "./homehead.js"
import Mainfooter from "./homefooter.js"
import Maince from "./ce.js"
import Mamy from "./my.js"
export default {
	head:function(){
		$("#header").load("./../html/deng.html #denghead",function(){
			console.log("ok");
			$("#denghead").find(".back").on("tap",function(){
				Mainhead.head();
				Mainhead.content();
				Mainfooter.footer();
				$("#footer").css({
					display:"block"
				})
				
			})
		})
	}
		,
	content:function(){
		$("#content").load("./../html/deng.html #dengcontent",function(){
			$("#dengcontent .btnzhu").on("tap",function(){
				Maince.head();
				Maince.content();
			})
			
			$("#dengcontent #lu").on("tap",function(){
				var nameid=$("#dengcontent .nameid").val();
				var password=$("#dengcontent .password").val();
				if(nameid==""||password==""){
					alert("用户名或密码不能为空")
				}else{
					var arr=JSON.parse(localStorage.getItem("user"))
					var cun=0
					for (var user of arr) {
						if(user.nameid==nameid){
							cun=1
							if(user.password==password){
								Mamy.head();
								Mamy.content(user.nameid);
								Mainfooter.footer(3);
								console.log(user.nameid)
								localStorage.setItem("id",user.nameid)
							}else{
								alert("密码错误")
							}
							
						}
						if(cun==0){
							alert("用户名不存在")
						}
					}
					
				}
			})
			
		})
			
	}
}
