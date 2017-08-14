import "../scss/mainfooter.scss";
import Mainhead from "./homehead.js"
import Mainfooter from "./homefooter.js"
import Mdche from "./che.js"
import Mddeng from "./deng.js"
import Mdkind from "./kind.js"
import Mamy from "./my.js"
import Mashop from "./shop.js"
export default {
	footer:function(index){
		$("#footer").load("./html/homefooter.html #homefooter",function(){
			$("#footer").find("li").eq(index).addClass("active").siblings().removeClass("active");

			$("#homefooter").find("li").on("tap",function(){
			
				$(this).addClass("active").siblings().removeClass("active");
				var index=$(this).index()
				console.log(index);
				switch (index){
					case 0:
						Mainhead.head();
						Mainhead.content();
						Mainfooter.footer();
						$("#footer").css({
							display: "block"
						})
						break;
					case 1:
						Mdkind.head();
						Mdkind.content();
						break;
					case 2:
						if(localStorage.getItem("id")){
							Mashop.head()
							Mashop.content()
						}else{
							Mdche.head();
							Mdche.content();
							$("#footer").css({
								display: "none"
							})
						}
						
						break;
					case 3:
						if(localStorage.getItem("id")){
							console.log(1111)
							
								Mamy.head();
								Mamy.content(localStorage.getItem("id"));
								Mainfooter.footer(3);
						}else{
							Mddeng.head();
							Mddeng.content();
							$("#footer").css({
								display: "none"
							})
						}
						
						break;
					default:
						break;
				}
			})
		})
	}
}
