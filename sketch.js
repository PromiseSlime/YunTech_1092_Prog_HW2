let x = 0
let nbarray = [];
// 初始內容
function setup() {
  alert("Press F11 for full screen experience, enjoy.")
  createCanvas(1920,1080, WEBGL); // 決定 使用 3D 方式進行渲染
  for(let i=0;i<20;i+=1){
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    nbarray.push(new myBox(-height/2+(height/5)*i,-height/2+(height/5)*i,0,40));
  }
  frameRate(40); //speed of frame
}
function draw() {
  background(80);
  // 將袋子中 所有 東西 稱為 V 執行他的相關函式
  nbarray.forEach((v)=>{v.display();});
}
// 自訂一個類別物件
class myBox{
  // 怎樣建構這個物件 只執行一次
  constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx = 1;
    this.my = 2;
  }
  // 定義一些能力 我們呼叫時 執行 
  // 能力1:show the box
  display(){
    push();
    noStroke();
    fill(175,mouseX,mouseY,90) //能力2:change color
      translate(this.x,this.y,this.z);  
      if (mouseX-width/2 > this.x-this.size/2 && 
          mouseX-width/2 < this.x+this.size/2 &&
          mouseY-height/2 > this.y-this.size/2 && 
          mouseY-height/2 < this.y+this.size/2){
        rotateX(frameCount*0.02); //rotate when cursor on it
        rotateY(frameCount*0.02); //rotate when cursor on it
        this.mx = this.mx+0.5;
        }
      rotateZ(millis() / 500); //能力3:rotate itself
      box(this.size);
    pop();
    this.move();
  }
  //能力4:XY移動規則
  move(){
    if (this.x>width/2){this.mx = -1*this.mx;}
    if (this.x<-width/2){this.mx = -1*this.mx;}  
    this.x = this.x + this.mx;
    if (this.y>height/2){this.my = -1*this.my;}
    if (this.y<-height/2){this.my = -1*this.my;}  
    this.y = this.y + this.my;
  }
}