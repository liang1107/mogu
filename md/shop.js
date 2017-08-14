import "./../scss/shop.scss"
import Mainhead from "./homehead.js"
import Mainfooter from "./homefooter.js"
import Maindeng from "./deng.js";
export default {
	head:function(){
		$("#header").load("./../html/shop.html #shophead",function(){
			
			
		})
	},
	content:function(){
		$("#content").load("./../html/shop.html #shopcontent",function(){
			
			
			
		})
	}
}
