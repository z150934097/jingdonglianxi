// 通过类名的方法获取元素

  function getClass(classname,obj){
            var obj=obj||document;
             if(document.getElementsByClassName!=undefined){
	           return obj.getElementsByClassName(classname);
            }else{
	            var qita=document.getElementsByTagName("*");
              var arr=[];
	           for(var i=0;i<qita.length;i++){
              //compare(qita[i].className,classname)
		          if(compare(qita[i].className,classname)){
			       arr.push(qita[i]);
		           }
	            }
	         return arr;
             }
  }
  function compare(oldclass,newclass){    //防止多个类名识别不了
      var arr=oldclass.split(" ");
      for(i=0;i<arr.length;i++){
          if(arr[i]==newclass){
            return true;
          }
      }
      return false;
  }
//getStyle 获取属性，解决兼容
 function getStyle(obj,attr){
   if(obj.currentStyle==undefined){
    return getComputedStyle(obj,null)[attr]
   }else{
    return obj.currentStyle[attr]
   }
 }      
//
function getText(obj,val){
	if(val==undefined){
		if(obj.innerText){
            return obj.innerText;
        }else{
    	    return obj.textContent;
        }
    }
    else{
    	if(obj.innerText){
            return obj.innerText=val;
        }else{
    	    return obj.textContent=val;
             }
        }
	}
    
//简化CSS
 function $(selector,obj){
        if(typeof selector=="string"){
          var obj=obj||document;
          if(selector.charAt(0)=="."){//获取字符串的下标 
            return getClass(selector.substring(1),obj);
          }else if(selector.charAt(0)=="#"){
            return document.getElementById(selector.substring(1));
          }else if(/^[a-z][a-z1-6]{0,9}$/g.test(selector)){
            return obj.getElementsByTagName(selector);
          }else if(/^<[a-z][a-z1-6]{0,9}>$/.test(selector)){
          return document.createElement(selector.slice(1,-1));
           }               
        }else if(typeof selector=="function"){
          window.onload=function(){
             selector();
          }
        }


    }






 //去除字符串空格 第一个输入字符串，第二个是去除的位置
 //去掉字符串里面的空格
            
         function trim(str,type){
       type=type||'lr';
        if(type=='r'){
          return str.replace(/\s*$/g,"");
        }
        if(type=='l'){
          return str.replace(/^\s*/g,"");
        }
        if(type=='a'){
          return str.replace(/\s*/g,"")
        }
        if(type=='lr'){
          return str.replace(/^\s*|\s*$/g,"")
        }
     }


      //获取子元素的第一个节点 ,type是否获取文本
     function getFirst(parent,type){
             return getStr(parent)[0];
     }
     //获取子元素的最后一个节点
     function getLast(parent,type){
      return getStr(parent)[getStr(parent).length-1];
     }
     //获取任意一个子节点
     function getNum(parent,index,type){
      return getStr(parent)[index];
     }
     //获取下一个兄弟节点
     function getNext(xiongdi){
            var next=xiongdi.nextSibling
            if(next==null){
              return false;
            }
            while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
                 next=next.nextSibling;
                 if(next==null){
                return false;
               }
            }
            return next;
     }
     //获取上一个兄弟节点
     function getPrevious(xiongdi){
            var next=xiongdi.previousSibling
            if(next==null){
              return false;
            }
            while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
                 next=next.nextSibling;
                 if(next==null){
                return false;
               }
            }
            return next;
     }
           //获取子元素
            function getStr(parent,type){ //a是不获取文本，b是获取文本
              var child=parent.childNodes;
              var newarr=[];
              type=type||"a";
              if(type=="a"){
                      for(var i=0;i<child.length;i++){ 
                  if(child[i].nodeType==1){
                    newarr.push(child[i]);
                  }
                      }
              }
              if(type=="b"){
                for(var i=0;i<child.length;i++){ 
                  if(child[i].nodeType==1||(child[i].nodeType==3&&trim(child[i].nodeValue)!="")){
                    newarr.push(child[i])
                  }
                      }
              }
              return newarr   
           }

//obj是要插入的元素
//afterobj是要插在谁后面
function insertAfter(obj,afterobj){
        var next=getNext(afterobj);
        if(next==false){
          afterobj.parentNode.appendChild(obj)
        }else{
          afterobj.parentNode.insertBefore(obj,next)
        }
      }


//判断某个元素是否包含有另外一个元素
function contains (parent,child) {//返回 true  parent 包含 child    返回false 不是包含关系
	if(parent.contains){//如果对象支持contains
		// 如果  父对象 包含 子对象   并且  父对象不等于 子对象 返回 true 
		return parent.contains(child) && parent!=child;
	}else{
		//父对象 包含 子对象  16   父对象 在子对象之前 4  = 20
		return (parent.compareDocumentPosition(child)===20);
	}
}
//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
function checkHover (e,target) {
	//target 对象 
	if(getEvent(e).type=="mouseover"){
		return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
			!((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
	}else{
		return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
			!((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
	}
}

/*
  hover(obj,overfun,outfun)  鼠标移入移除事件 
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
	if(overfun){
	    obj.onmouseover=function  (e) {
			if(checkHover(e,obj)){
				overfun.call(obj);
			}
	    }
	}
	if(outfun){
		obj.onmouseout=function  (e) {
			if(checkHover(e,obj)){
				outfun.call(obj);
			}
	    }
	}
}

//获得事件对象
function getEvent (e) {
	return e||window.event;
}