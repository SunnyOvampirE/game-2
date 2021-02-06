class Speech{
    constructor(x,y,w,h,text){
      this.text=text;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
    
    
    display(){
        push();
        fill("lightblue");
        stroke("blue");
        strokeWeight(2);
        ellipseMode(RADIUS);
        ellipse(this.x,this.y,this.w,this.h);
        fill("black");
        stroke("yellow");
        strokeWeight(0.5);
        textSize(24);
        textFont("Georgia");
        if(this.text.indexOf(".") !=-1){
        var index=this.text.indexOf(".");
        index++;
        var text1=this.text.slice(0,index);
        text(text1,this.x-this.w/2,this.y);
        var text2=this.text.slice(index);
        text(text2,this.x-this.w/2,this.y+30);
        } else if(this.text.indexOf("!") !=-1){
            var index=this.text.indexOf("!");
            index++;
            var text1=this.text.slice(0,index);
            text(text1,this.x-this.w/2,this.y);
            var text2=this.text.slice(index);
            text(text2,this.x-this.w/2,this.y+30);
            } else if(this.text.indexOf("?") !=-1){
                var index=this.text.indexOf("?");
                index++;
                var text1=this.text.slice(0,index);
                text(text1,this.x-this.w/2,this.y);
                var text2=this.text.slice(index);
                text(text2,this.x-this.w/2,this.y+30);
                }
        else{
        text(this.text,this.x-this.w/2,this.y);
        }
        pop();
    }
    
} 