import "../scss/list.scss";
export default{
     content:function(zhi){
        $("#content #listcontent .list").load("./html/list.html #list",function(){
        	var url="http://list.mogujie.com/search?_version=61&q="+zhi+"&cKey=46&_mgjuuid=ad54f18e-1dc6-47f9-9e50-10ecbfc24a9a&ppath=&page=1&maxPrice=&sort=pop&userId=&cpc_offset=&priceList=&_=1500980417345&callback=?"
				
				$.ajax({
					url:url,
					type:"get",
			    	success:function(resu){
//			    		console.log(resu.result.wall.docs);
			    		var list=resu.result.wall.docs;
			    		for (var item of list) {
			    			var list=$("<div class='list1'></div>");
			    			$("#list").append(list);
			    			var img1=$("<img src="+item.img+" />")
			    			var img=$("<div class='img'></div>")
			    			list.append(img);
			    			img.append(img1);
			    			var p=$("<div class='p'></div>");
			    			list.append(p);
			    			var a=$("<div class='as'></div>");
			    			p.append(a);
			    			var p1=$("<p>￥<span>"+item.price+"</span><span class='right iconfont'>"+item.cfav+  "&#xe601;</span></p>")
			    			p.append(p1);
			    			for (var bb of item.props) {
			    				a.append("<a>"+bb+"</a>")
			    			}
			    			
			    		}
			    	}
				})
       
        })
        }
}