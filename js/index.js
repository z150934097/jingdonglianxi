window.onload=function(){
	//banner上面的图片
	topp();
	function topp(){
	var headTop=$('.head-top')[0];
	var topMin=$('.min-box',$('.box',headTop)[0])[0];
	topMin.onmouseover=function(){
		this.style.cssText='background: url(image/top-min.png) no-repeat scroll 0px -19px;'
	}
	topMin.onmouseout=function(){
		this.style.cssText='background: url(image/top-min.png) no-repeat scroll 0px 0px;'
	}
	topMin.onclick=function(){
		headTop.style.display='none'
	}
	}
	//送至北京
	var szbj=$('.hanzi',$('.head-left')[0])[0];
	xiala(szbj,246)
	function xiala(szbj,a){
	hover(szbj,function(){
		var list=$('.list',szbj)[0];
		if (!list) {return;};
		var as=list.getElementsByTagName('a');
		list.style.display='block';
		animate(list,{height:a},100)
	},function(){
					var list=$('.list',this)[0];
					if (!list) {return;};
					var as=list.getElementsByTagName('a');
					list.style.display='none';
					animate(list,{height:0},100)
				})
	}
	//banner里的选项卡
//	var links=$('.banner0-leftbox');console.log(links)
//	bannerLeftBoxbox();
//	function bannerLeftBoxbox(){
//		var links=$('.banner0-leftbox');
//		var bannerLeftBox=$('.banner0-left')[0];
//		var lists=$('.banner0-leftOne',$('.banner0-left-right',bannerLeftBox)[0]);console.log(lists)
//		
//		for (var i=0;i<links.length;i++) {
//			 links.index=i;
//			links[i].onmouseover=function(){
//				lists[i].style.cssText='display: block';
//			}
//			links[i].onmouseout=function(){
//				lists[this.index].style.display='none';
//			}
//		}
//	}
	//我的京东
	var wdjd=$('.hanzi',$('.head-right')[0])[0]; 
	xiala(wdjd,193)
//手机京东
var sjjd=$('.hanzi',$('.head-right')[0])[2];
	xiala(sjjd,195)
	//关注京东
	var gzjd=$('.hanzi',$('.head-right')[0])[1];
	xiala(gzjd,100)
	//客户服务
	var khfw=$('.hanzi',$('.head-right')[0])[3];
	xiala(khfw,160)
	//网站导航
	var wzdh=$('.hanzi',$('.head-right')[0])[4];
	xiala(wzdh,188)
//按需加载
window.onscroll=function(){
      anxujiazai();
    }
    var axjz=$('.axjz');
//  console.log(axjz)
    var ofT=[];
    var clientH=document.documentElement.clientHeight;
    for (var ii=0;ii<axjz.length;ii++) {
      ofT.push(axjz[ii].offsetTop);
//    console.log(ofT)
    }
    function anxujiazai(){
      var doc=document.body.scrollTop?document.body:document.documentElement;
      var sto=doc.scrollTop;
      for (var i=0;i<ofT.length;i++) {
        if (sto+clientH>=ofT[i]) {
          var gg=axjz[i].getElementsByTagName('img');
//        console.log(gg)
          for (var j=0;j<gg.length;j++) {
            gg[j].src=gg[j].getAttribute('asrc');
          }
          
        }
      }
    }
    anxujiazai();

var fixed=getClass("fixed")[0];
  var onebottom=getClass("onebottom")[0];
     rightSolid(fixed,onebottom)
     for(var i=0;i<7;i++){
      var fu=getClass("fixed")[i];
      var zi=getClass("rightsolidbottom")[i];
      rightSolid(fu,zi);
     }

  function rightSolid(mouse,change){
        mouse.onmouseover=function(){
          animate(change,{right:30},300,Tween.Quad.easeIn)
        }
        mouse.onmouseout=function(){
          animate(change,{right:-30},400,Tween.Bounce.easeOut)
        }
  }





//   // 一楼选项卡
  var onechose=getClass("one-top-right")[0].getElementsByTagName("div");
  var oneimg=getClass("onechose");
  wheel(onechose,oneimg);

// 二楼选项卡
  var twochose=getClass("two-top-right")[0].getElementsByTagName("div");
  var twoimg=getClass("twochose");
  wheel(twochose,twoimg)

//三楼选项卡
  var threechose=getClass("three-top-right")[0].getElementsByTagName("div");
  var threeimg=getClass("threechose");
  wheel(threechose,threeimg);
  //四楼选项卡
  var fourchose=getClass("four-top-right")[0].getElementsByTagName("div");
  var fourimg=getClass("fourchose");
  wheel(fourchose,fourimg)
  //五楼选项卡
  var fivechose=getClass("five-top-right")[0].getElementsByTagName("div");
  var fiveimg=getClass("fivechose");
  wheel(fivechose,fiveimg)
  //六楼选项卡
  var sixchose=getClass("six-top-right")[0].getElementsByTagName("div");
  var siximg=getClass("sixchose");
  wheel(sixchose,siximg)
  //七楼选项卡
  var sevenchose=getClass("seven-top-right")[0].getElementsByTagName("div");
  var sevenimg=getClass("sevenchose");
  wheel(sevenchose,sevenimg)
  //八楼选项卡
  var eightchose=getClass("eight-top-right")[0].getElementsByTagName("div");
  var eightimg=getClass("eightchose");
  wheel(eightchose,eightimg)
  //九楼选项卡
  var ninechose=getClass("nine-top-right")[0].getElementsByTagName("div");
  var nineimg=getClass("ninechose");
  wheel(ninechose,nineimg)
  //十楼选项卡
  var tenchose=getClass("ten-top-right")[0].getElementsByTagName("div");
  var tenimg=getClass("tenchose");
  wheel(tenchose,tenimg)


  function wheel(chose,img){ //chose是上面的选项 img是下面的图片
    for(i=0;i<img.length;i++){
    chose[i].index=[i];
    chose[0].className="onechosechange"
    chose[i].onmouseover=function(){
      for(var j=0; j<chose.length; j++){
        img[j].style.display="none";
        chose[j].className="onechosenochange"
      }
            img[this.index].style.cssText="display:block;"
            chose[this.index].className="onechosechange"
    }
   }
  }



   //banner轮播图

    var img=getClass("bannerimgs")[0].getElementsByTagName('a');
    var divs=getClass("lunbo")[0].getElementsByTagName('div');
    var num=0;                                                   //在开始前就应该让第一张图片的透明度为1，其他的透明度为0
    divs[0].className="bannergundong"
    img[0].style.opacity="1";
    img[img.length-1].style.opacity="0";
    var k=setInterval(move,2000)
    function move(){
      num++;
    if(num==img.length){num=0;}
    for(var i=0;i<img.length;i++){
       animate(img[i],{opacity:0},500);//循环让不显示的z-index变成空；
       divs[i].className="banneryuan";
       }
        animate(img[num],{opacity:1},500)
        divs[num].className="bannergundong"
    }

        // console.log(num);
        
  //鼠标移入banner时候全部停止轮播,移出是可以继续
  var bannerbj=getClass("banner")[0];
   bannerbj.onmouseover=function(){
    clearInterval(k);
   }
   bannerbj.onmouseout=function(){
    k=setInterval(move,2000);
   }
  //banner处左右箭头，
    var leftBtn=getClass("bannerLeftbtn")[0];//之前获取到的是下层半透明的层级，点击事件发生不了
    var rightBtn=getClass("bannerRightbtn")[0];
//  console.log(rightBtn)
    rightBtn.onclick=function(){     //当点击没有反应的时候，可以在时间里面输出一些东西
      move()
    }
    leftBtn.onclick=function(){
       num--;
    if(num==-1){num=img.length-1;}
    for(var i=0;i<img.length;i++){
       animate(img[i],{opacity:0},500);//循环让不显示的z-index变成空；
       divs[i].className="banneryuan";
       }
        animate(img[num],{opacity:1},500)
        divs[num].className="bannergundong"
    }
    //banner轮播按钮
    for(var i=0;i<divs.length;i++){
      divs[i].index=i;
      divs[i].onclick=function(){
         for(var j=0;j<divs.length;j++){
          animate(img[j],{opacity:0},500);
          divs[j].className="banneryuan";
         }
         divs[this.index].className="bannergundong";
        animate(img[this.index],{opacity:1},500)
      }
    }


//banner下面的轮播图
   var bannerxiawheel=getClass("bannerbottomwheel")[0];//固定的盒子
   var bannerLbtn=getClass("banner-bottomzjt")[0];//左箭头
   var bannerRbtn=getClass("banner-bottomyjt")[0];//右箭头
   var bannerxiadiv=getClass("bannerbottomWheelimg")[0];//轮播的长幅

  onlyBtn(bannerLbtn,bannerRbtn,bannerxiadiv,1000)
  function onlyBtn(lbtn,rbtn,div,length){//左按钮 右按钮  放图片的整个长条  每次移动的长度
    l=0;
    function move(){
       l++;
       if(l==4){
        l=0
       }
       animate(div,{marginLeft:-l*length},500)
    }
    rbtn.onclick=function(){
      move()
    }
    lbtn.onclick=function(){
        l--;
        if(l==-1){
          l=3;
        }
        animate(div,{marginLeft:-l*length},500)
    
    }
  }





//天天低价竖直轮播
  var ttdjWheel=getClass("ttdjWheel")[0];
  var ttdjdiv=getClass("TTDJ")[0];
      d=0;
    setInterval(TTDJMOVE,3000);
    function TTDJMOVE(){
     // alert(1)
       d--;
       if(d==-1){
        d=4
       }
       animate(ttdjdiv,{marginTop:-d*120},500)
    }




  // 一楼水平轮播图
  var onewheel=getClass("onewheel")[0];//固定盒子
  var onediv=getClass("one-bodymiddle-box2")[0]; //放所有图片的
  var oneimgs=getClass("one-bodymiddle-box2")[0].getElementsByTagName("img");
  var oneimgW=parseInt(getStyle(oneimgs[0],"width"));
  var oneyuan=getClass("oneLunbo")[0].getElementsByTagName("div");
  var onerBtn=getClass("one-bodymiddleyjt")[0];
  var onelBtn=getClass("one-bodymiddlezjt")[0];
  floorwheel(onewheel,onediv,oneimgs,oneimgW,oneyuan,onelBtn,onerBtn)

  //二楼轮播图
 var twowheel=getClass("twowheel")[0];//固定盒子
  var twodiv=getClass("twoWheelimg")[0]; //放所有图片的
  var twoimgs=getClass("twoWheelimg")[0].getElementsByTagName("div");
  var twoimgW=parseInt(getStyle(twoimgs[0],"width"));
  var twoyuan=getClass("twoLunbo")[0].getElementsByTagName("div");
  var tworBtn=getClass("two-bodymiddleyjt")[0];
  var twolBtn=getClass("two-bodymiddlezjt")[0];
  floorwheel(twowheel,twodiv,twoimgs,twoimgW,twoyuan,twolBtn,tworBtn)



 //   //三楼水平轮播图
 var threewheel=getClass("threeWheel")[0];//固定盒子
  var threediv=getClass("threeWheelimg")[0]; //放所有图片的
  var threeimgs=getClass("threeWheelimg")[0].getElementsByTagName("img");
  var threeimgW=parseInt(getStyle(threeimgs[0],"width"));
  var threeyuan=getClass("threeLunbo")[0].getElementsByTagName("div");
  var threerBtn=getClass("three-bodymiddleyjt")[0];
  var threelBtn=getClass("three-bodymiddlezjt")[0];
  floorwheel(threewheel,threediv,threeimgs,threeimgW,threeyuan,threelBtn,threerBtn)


 //  //四楼水平轮播图
 var fourwheel=getClass("fourWheel")[0];//固定盒子
  var fourdiv=getClass("fourWheelimg")[0]; //放所有图片的
  var fourimgs=getClass("fourWheelimg")[0].getElementsByTagName("img");
  var fourimgW=parseInt(getStyle(fourimgs[0],"width"));
  var fouryuan=getClass("fourLunbo")[0].getElementsByTagName("div");
  var fourrBtn=getClass("four-bodymiddleyjt")[0];
  var fourlBtn=getClass("four-bodymiddlezjt")[0];
  floorwheel(fourwheel,fourdiv,fourimgs,fourimgW,fouryuan,fourlBtn,fourrBtn)


 // //五楼水平轮播图
 var fivewheel=getClass("fiveWheel")[0];//固定盒子
  var fivediv=getClass("fiveWheelimg")[0]; //放所有图片的
  var fiveimgs=getClass("fiveWheelimg")[0].getElementsByTagName("img");
  var fiveimgW=parseInt(getStyle(fiveimgs[0],"width"));
  var fiveyuan=getClass("fiveLunbo")[0].getElementsByTagName("div");
  var fiverBtn=getClass("five-bodymiddleyjt")[0];
  var fivelBtn=getClass("five-bodymiddlezjt")[0];
  floorwheel(fivewheel,fivediv,fiveimgs,fiveimgW,fiveyuan,fivelBtn,fiverBtn)


    //六楼水平轮播图
  var sixwheel=getClass("sixwheel")[0];//固定盒子
  var sixdiv=getClass("sixWheelimg")[0]; //放所有图片的
  var siximgs=getClass("sixWheelimg")[0].getElementsByTagName("div");
  var siximgW=parseInt(getStyle(siximgs[0],"width"));
  var sixyuan=getClass("sixLunbo")[0].getElementsByTagName("div");
  var sixrBtn=getClass("six-bodymiddleyjt")[0];
  var sixlBtn=getClass("six-bodymiddlezjt")[0];
  floorwheel(sixwheel,sixdiv,siximgs,siximgW,sixyuan,sixlBtn,sixrBtn)

  //七楼水平轮播图
  var sevenwheel=getClass("sevenwheel")[0];//固定盒子
  var sevendiv=getClass("sevenWheelimg")[0]; //放所有图片的
  var sevenimgs=getClass("sevenWheelimg")[0].getElementsByTagName("div");
  var sevenimgW=parseInt(getStyle(sevenimgs[0],"width"));
  var sevenyuan=getClass("sevenLunbo")[0].getElementsByTagName("div");
  var sevenrBtn=getClass("seven-bodymiddleyjt")[0];
  var sevenlBtn=getClass("seven-bodymiddlezjt")[0];
  floorwheel(sevenwheel,sevendiv,sevenimgs,sevenimgW,sevenyuan,sevenlBtn,sevenrBtn)

  //八楼水平轮播图
  var eightwheel=getClass("eightwheel")[0];//固定盒子
  var eightdiv=getClass("eightWheelimg")[0]; //放所有图片的
  var eightimgs=getClass("eightWheelimg")[0].getElementsByTagName("div");
  var eightimgW=parseInt(getStyle(eightimgs[0],"width"));
  var eightyuan=getClass("eightLunbo")[0].getElementsByTagName("div");
  var eightrBtn=getClass("eight-bodymiddleyjt")[0];
  var eightlBtn=getClass("eight-bodymiddlezjt")[0];
  floorwheel(eightwheel,eightdiv,eightimgs,eightimgW,eightyuan,eightlBtn,eightrBtn)

  //九楼水平轮播图
  var ninewheel=getClass("ninewheel")[0];//固定盒子
  var ninediv=getClass("nineWheelimg")[0]; //放所有图片的
  var nineimgs=getClass("nineWheelimg")[0].getElementsByTagName("div");
  var nineimgW=parseInt(getStyle(nineimgs[0],"width"));
  var nineyuan=getClass("nineLunbo")[0].getElementsByTagName("div");
  var ninerBtn=getClass("nine-bodymiddleyjt")[0];
  var ninelBtn=getClass("nine-bodymiddlezjt")[0];
  floorwheel(ninewheel,ninediv,nineimgs,nineimgW,nineyuan,ninelBtn,ninerBtn)


//十楼水平轮播图
  var tenwheel=getClass("tenWheel")[0];//固定盒子
  var tendiv=getClass("tenWheelimg")[0]; //放所有图片的
  var tenimgs=getClass("tenWheelimg")[0].getElementsByTagName("a");
  var tenimgW=parseInt(getStyle(tenimgs[0],"width"));
  var tenyuan=getClass("tenLunbo")[0].getElementsByTagName("div");
  var tenrBtn=getClass("ten-bodymiddleyjt")[0];
  var tenlBtn=getClass("ten-bodymiddlezjt")[0];
  floorwheel(tenwheel,tendiv,tenimgs,tenimgW,tenyuan,tenlBtn,tenrBtn)

  //十一楼左水平轮播图
  var elevenonewheel=getClass("elevenonewheel")[0];//固定盒子
  var elevenonediv=getClass("elevenoneWheelimg")[0]; //放所有图片的
  var elevenoneimgs=getClass("elevenoneWheelimg")[0].getElementsByTagName("a");
  var elevenoneimgW=parseInt(getStyle(elevenoneimgs[0],"width"));
  var elevenoneyuan=getClass("elevenoneLunbo")[0].getElementsByTagName("div");
  var elevenonerBtn=getClass("elevenone-bodymiddleyjt")[0];
  var elevenonelBtn=getClass("elevenone-bodymiddlezjt")[0];
  floorwheel(elevenonewheel,elevenonediv,elevenoneimgs,elevenoneimgW,elevenoneyuan,elevenonelBtn,elevenonerBtn)


//十一楼右水平轮播图
  var eleventwowheel=getClass("eleventwowheel")[0];//固定盒子
  var eleventwodiv=getClass("eleventwoWheelimg")[0]; //放所有图片的
  var eleventwoimgs=getClass("elevenoneWheelimg")[0].getElementsByTagName("a");
  var eleventwoimgW=parseInt(getStyle(eleventwoimgs[0],"width"));
  var eleventwoyuan=getClass("eleventwoLunbo")[0].getElementsByTagName("div");
  var eleventworBtn=getClass("eleventwo-bodymiddleyjt")[0];
  var eleventwolBtn=getClass("eleventwo-bodymiddlezjt")[0];
  floorwheel(eleventwowheel,eleventwodiv,eleventwoimgs,eleventwoimgW,eleventwoyuan,eleventwolBtn,eleventworBtn)




  //（固定的盒子，放所有图片的div，所有的图片,每张图片的宽度，按钮,左箭头，右箭头）
  function floorwheel(wheelbj,div,imgs,imgW,btn,leftBtn,rightBtn){
  div.style.width=imgs.length*imgW+"px";
  var index=0;
  var  j=setInterval(move,2000)
  function move(){
       index++;
       if(index==imgs.length){
        index=0
       }
        for(var i=0;i<imgs.length;i++){
          // console.log(imgs.length)
          btn[i].className="nochangexiaoheidian";//这里应该注意多类名问题，应该保留获取的时候用的类名
          // console.log(btn[i]) 
        }
        btn[index].className="changexiaoheidian";
   // console.log(index);
       animate(div,{marginLeft:-index*imgW},500)
  }
    
    //鼠标移入移出停止
   wheelbj.onmouseover=function(){
        clearInterval(j)
   }
   wheelbj.onmouseout=function(){
    j=setInterval(move,2000)
   }
  // //鼠标移到按钮停留在指定图片
    for(var i=0;i<imgs.length;i++){
      btn[i].index=i;
      btn[i].onmouseover=function(){
        animate(div,{marginLeft:-this.index*imgW},500)
        for(var j=0;j<imgs.length;j++){
          btn[j].className="nochangexiaoheidian";
        }
        btn[this.index].className="changexiaoheidian";
      }
    }

  
    //左右箭头
    rightBtn.onclick=function(){
      move()
    }
    leftBtn.onclick=function(){
        index--;
        if(index==-1){
          index=imgs.length-1;
        }
        for(var i=0;i<imgs.length;i++){
          btn[i].className="nochangexiaoheidian";
        }
        btn[index].className="changexiaoheidian";
        animate(div,{marginLeft:-index*imgW},500)
    }
  }



// 鼠标移入图片图片会动一下
  var ttdjImg=getClass("ttdjBodyLeftChange")[0].getElementsByTagName("img");
  // console.log(ttdjImg)
  for(var i=0;i<ttdjImg.length;i++){
mouseoverMove(ttdjImg[i],ttdjImg[i])
  }
  // mouseoverMove(ttdjImg[i],ttdjImg[i])
  // mouseoverMove(ttdjImg[2],ttdjImg[2])
   function mouseoverMove(change,move){
   change.onmouseover=function(){
      animate(move,{marginLeft:10},300)
    }
    change.onmouseout=function(){
      animate(move,{marginLeft:0},300)
    }
  }
   
   tiaolou();
   function tiaolou(){
   var floor=$('.tiaoz');
// console.log(floor[1])
   	var off=[];
   	var btns=$('.btns');
   	var nums=$('.num');
   	var zi=$('.font');
   	for(var i=0;i<floor.length;i++){
   		off.push(floor[i].offsetTop);
//   		 console.log(off)
   	    btns[i].ind=i;
   	    btns[i].onclick=function(){
   		animate(document.body,{scrollTop:off[this.ind]});
   		animate(document.documentElement,{scrollTop:off[this.ind]});
   	  }
   	}
   	console.log(off)
   	window.onscroll=function(){
   		var doc=document.body.scrollTop?
   		        document.body:document.documentElement;
   		var stop=doc.scrollTop;
   		for(var m=0;m<off.length;m++){
   			if(stop>=off[m]){
   				for(var n=0;n<off.length;n++){
   					nums[n].style.display='block';
   					zi[n].style.display='none';
   				}
   				nums[m].style.display='none';
   				zi[m].style.display='block'
   			}
   		}
   	}
	}
	var fhdb=document.querySelector('.rightsolidsixbottom a');
	fhdb.onclick=function(){
		$('html,body').animate({scrollTop:0});
	}
}
