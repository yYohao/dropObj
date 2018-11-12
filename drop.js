class Drop {
    /**
     * 一个可以拖拽的对象
     * @param {* Number} width 宽度
     * @param {* Number} height  高度
     * @param {* Color} borderColor  边框颜色
     */
    constructor(width = 100, height = 100, borderColor = '#000'){
        this.width = width;
        this.height = height;
        this.borderColor = borderColor;
        this.box = null;
        this.offsetLeft = 0;
        this.offsetTop = 0;
        this.startX = 0;
        this.startY = 0;
        this.init()
    }

    init(){
        //在document中创建一个dom元素
        let box = this.box;
        box = document.createElement("div");
        box.style.width = this.width + 'px';
        box.style.height = this.height + 'px';
        box.style.border = '1px solid ' + this.borderColor;
        box.style.position = "absolute";
        document.body.appendChild(box);
        this.offsetLeft = box.offsetLeft;
        this.offsetTop = box.offsetTop;
        this.box = box;
        this.box.onmousedown = this.bClick;
    }

    bClick(event){
        //获取鼠标位置
        this.startX = event.clientX;
        this.startY = event.clientY;
        //this.offsetLeft 和 top 会随着移动变化（不知道为什么） 所以用一个参数接收最开始的位置
        let offsetLeft = this.offsetLeft;
        let offsetTop = this.offsetTop;
        //鼠标移动时间 box跟随鼠标一起移动
        this.onmousemove = function(event) {
        //获取鼠标位置
        let pointX = event.clientX;
        let pointY = event.clientY;
        //调整box位置
        this.style.left = offsetLeft + pointX - this.startX + 'px';
        this.style.top = offsetTop + pointY - this.startY + 'px';
        }
        //鼠标抬起的时候停止鼠标移动事件
        this.onmouseup = function(params) {
            this.onmousemove = null;
        }
        //因为box移动比较慢，可能跟不上鼠标，所以在鼠标离开盒子时就关闭移动事件
        this.onmouseout = function(params) {
            this.onmousemove = null;
        }
    }
}