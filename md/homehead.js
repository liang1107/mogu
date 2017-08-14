import "../scss/mainhead.scss";
import Mdsearch from "./headsearch.js"
import Mdmainlist from "./mainlist.js"
import Mdche from "./che.js"
import Mashop from "./shop.js"
export default {
	head:function(){
		$("#header").load("./html/homehead.html #homehead",function(){
			console.log("ok");
			$("#homehead").find(".input").on("tap",function(){
				
				Mdsearch.head();
				Mdsearch.content();
				$("#footer").css({
					display: "none"
				})
			})
			$("#homehead").find(".che ").on("tap",function(){
				if(localStorage.getItem("id")){
//					用户登录过后在这里显示
					Mashop.head()
					Mashop.content()
				}else{
					Mdche.head("home");
					Mdche.content();
					$("#footer").css({
						display: "none"
					})
				}
			})
		})
	},
	content:function(){
		$("#content").load("./html/homehead.html #homecontent",function(){
			console.log("ok");
			
			    $.ajax({
			    	url:"http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604&callback=?",
			    	type:"get",
			    	data:{},
			    	success:function(resu){
//			    		console.log(resu);
			    		var banner=resu.data["51822"].list;
			    		for(var itm of banner){
			    			var src=itm.image_800
//			    			console.log(src)
			    			$("#swiper-container .swiper-wrapper").append("<div class=swiper-slide><img src="+src+" /></div>")
			    		}
			    		 var swiper = new Swiper('#swiper-container', {
					        pagination: '.swiper-pagination',
					        autoplayDisableOnInteraction: false,
					        autoplay:2000,
							loop:true
					    });
					    var lis=resu.data["51827"].list;
//					    console.log(lis);
					    for (var it of lis) {
					    	$("#homecontent").find(".list3").append("<div class='list3-1'><p>"+it.title+"</p><p>"+it.description+"</p><img src="+it.image+" /></div>")
					    	
					    	
					    }
					    
					     var it=resu.data["41119"].list;
					     
//					     console.log(it)
					   var   time=Number(it[0].time)
//					     console.log(time)
					     setInterval(function(){
					     	$("#homecontent").find(".qiang").html("")
					     	time=time-1
						    
						    	
						    	var h=parseInt(time/3600)
						    	h=h<10? '0'+h:h;
						    	var m=parseInt((time-h*3600)/60);
						    		m=m<10? '0'+m:m;
						    	var s=parseInt((time-h*3600-m*60));
						    		s=s<10? '0'+s:s;
//						    		console.log(h,m,s)
						    	$("#homecontent").find(".qiang").append("<p><span>"+it[0].title+"</span>&nbsp;.&nbsp;<span>"+it[0].viceTitle+
						    	"</span>&nbsp;<span>"+h+"</span>&nbsp;:&nbsp;<span>"+m+"</span>&nbsp;:&nbsp;<span>"+s+"</span><span>more</span></p>")
						   
					    },1000)
					     
					   var it1=resu.data["41119"].list[0].list;
//					   console.log(it1)
					   for (var xa of it1) {
					   	$("#zuoyou .swiper-wrapper").append(" <div class='swiper-slide'><img src="+xa.transparentImg+
					   	" /><p>"+xa.title+
					   	"</P><p><span>￥"+xa.salePrice+"</span><span>￥"+xa.price+"</span></p></div>")
					   }
					    var swiper = new Swiper('#zuoyou', {
						        pagination: '.swiper-pagination',
						        slidesPerView: 3.5,
						        spaceBetween: 10,
						        freeMode: true
						       
						    });
					   var it2=resu.data["51833"].list;
//					   console.log(it2)
					   for (var i=0;i<it2.length;i++) {
					   	if(i<3){
//					   		console.log(it2[i].viceTitle.replace("}","").replace("{",""))
					   		var di2=it2[i].viceTitle.replace("}","").replace("{","")
					   		$("#cu .chao1").append("<div><div> <p>"+it2[i].title+"</p><p>"+di2+
					   		"</p></div><img src="+it2[i].image+" /></div>")
					   	}else{
					   		
					   		var di2=it2[i].viceTitle.replace("}","").replace("{","")
					   		$("#cu .chao2").append("<div><div> <p>"+it2[i].title+"</p><p>"+di2+
					   		"</p></div><img src="+it2[i].image+" /></div>")
					   	}
					   }
					   
					    var it3=resu.data["51836"].list;
//					    console.log(it3);
					    for (var na of it3) {
					    	$("#re .nav").append("<dl><dt><img src="+na.image+" /></dt><dd>"+na.title+"</dd></dl>")
					    }
			    
			    		Mdmainlist.content()
			    	}
			    })
			   
			   
			   
			   
			    
			    
			    
			    
			    
			    
			    
			    
		})
	}
}
