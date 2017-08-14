import "../scss/list.scss";
export default{
     content:function(zhi){
        $("#content #like .list").load("./html/list.html #list",function(){
        	var url="https://list.mogujie.com/search?cKey=h5-shopping&fcid=&pid=9750&searchTag=&sort=pop&page=1&_version=61&_=1501075806494&callback=?"
				
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