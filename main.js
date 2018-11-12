window.onload = function (param) { 
    //获取可拖拽对象的位置
    const box = document.getElementById("box");
    let bLeft = box.offsetLeft;
    let bTop = box.offsetTop;
    let bWidth = box.offsetWidth;
    let bHeight = box.offsetHeight;
    
    
    //鼠标点击事件
    document.onmousedown = function (event) { 
        let e = event || window.event;

        //获取鼠标位置
        let pointX = e.clientX;
        let pointY = e.clientY;
        //鼠标在box中的位置
        let pOffsetLeft = pointX - bLeft;
        let pOffsetTop = pointY - bTop;
        //判断鼠标点击是否在box内部
        if((pointX - bLeft) > 0 && (pointX - bLeft) < bWidth && (pointY - bTop) > 0 &&
         (pointY - bTop) < bHeight){
            console.log(pointX, pointY);
            //鼠标移动
            function move(event) { 
                //获取鼠标位置
                let mPointX = event.clientX;
                let mPointY = event.clientY;
            
                //box移动
                box.style.left = mPointX - pointX + bLeft + 'px';
                box.style.top = mPointY - pointY + bTop + 'px';
                console.log(bLeft, bTop);
                //鼠标抬起事件
               
            }
            document.addEventListener("mousemove", move);
            //鼠标抬起事件
            document.onmouseup = function (event) { 
                let uPointX = event.clientX;
                let uPointY = event.clientY;
                //重置box位置
                box.style.left = uPointX - pOffsetLeft + 'px';
                box.style.top = uPointY - pOffsetTop + 'px';
                bLeft = box.offsetLeft;
                bTop = box.offsetTop;
                //移除鼠标移动时间
                document.removeEventListener("mousemove", move);
            }
            
        }

        
     }
 }

 