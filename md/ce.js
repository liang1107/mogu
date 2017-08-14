import "../scss/deng.scss";
import Mdsearchlist from "./searchlist.js"
import Mainhead from "./homehead.js"
import Mainfooter from "./homefooter.js"
import Maindeng from "./deng.js"
export default {
	head:function(){
		$("#header").load("./../html/ce.html #denghead",function(){
			console.log("ok");
			$("#denghead").find(".back").on("tap",function(){
				Mainhead.head();
				Mainhead.content();
				Mainfooter.footer(0);
				$("#footer").css({
					display:"block"
				})
				
			})
		})
	}
		,
	content:function(){
		$("#content").load("./../html/ce.html #dengcontent",function(){
			$("#dengcontent #zhu1").on("tap",function(){
				var nameid=$("#dengcontent .nameid").val();
				var password=$("#dengcontent .password").val();
				console.log(nameid,password)
				if(localStorage.getItem("user")){
					var bu=0
					var user=JSON.parse(localStorage.getItem("user"));
					for (var it of user) {
						if(nameid==it.nameid){
							alert("用户名已经存在")
							bu=1
						}
					}
					if(bu==0){
						user.push({"nameid":nameid,"password":password});
						localStorage.setItem("user",JSON.stringify(user))
						Maindeng.head();
						Maindeng.content();
						alert("1注册成功")
					}
				}else{
					var user=[];
					var users={"nameid":nameid,"password":password}
					user.push(users)
					localStorage.setItem("user",JSON.stringify(user));
					Maindeng.head();
					Maindeng.content();
					alert("2注册成功")
				}
//				if(nameid==""||password==""){
//					alert("用户名或密码为空")
//				}else{
//					localStorage.setItem("nameid",nameid);
//					localStorage.setItem("password",password);
//					Maindeng.head();
//					Maindeng.content();
//				}
			})
		})
			
	}
}
