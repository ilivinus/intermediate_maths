function Line(x1,y1,x2,y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.points = [];
}
Line.prototype.Intercept = function(){
    return (parseFloat(this.y1) - (parseFloat(this.Gradient()) * parseFloat(this.x1)));
}
Line.prototype.xApart = function(){
    return (this.x2 - this.x1);
}
Line.prototype.Gradient = function(){
    return ((this.y2 - this.y1)/(this.x2-this.x1));
}
Line.prototype.ClockHand = function(long = 15){
    let dx = this.xApart(),
    dxInteval = Math.abs(parseFloat(dx/200)),    
    slope = this.Gradient(),
    c = this.Intercept(), counter = 0;    
    
    if(this.x2 > 0){
        for (let i = this.x1; i < this.x2; i += dxInteval) {           
            this.points.push({y : (i * slope + c).toFixed(4), x : (i).toFixed(4)});                    
            if(this.points.length % long == 0){
                break;}
        }        
    }else{
        for (var ii = this.x1; ii > this.x2; ii -= dxInteval) {            
            this.points.push({y : (ii * slope + c).toFixed(4), x : (ii).toFixed(4)});                  
            if(this.points.length % long == 0){
              break;}
        }          
        
    }
    return this.points;
}

Line.prototype.JoiningPoints = function(long = 15){
    let dx = this.xApart(),
    dxInteval = Math.abs(parseFloat(dx/200)),    
    slope = this.Gradient(),
    c = this.Intercept(), counter = 0;    
    
    if(this.x2 < 0){
        for (let i = this.x2; i < this.x1; i += dxInteval) {           
            this.points.push({y : (i * slope + c).toFixed(4), x : (i).toFixed(4)});                    
            if(this.points.length % long == 0){
                break;}
        }        
    }else{
        for (var ii = this.x2; ii > this.x1; ii -= dxInteval) {            
            this.points.push({y : (ii * slope + c).toFixed(4), x : (ii).toFixed(4)});                  
            if(this.points.length % long == 0){
              break;}
        }          
        
    }
    return this.points;
}

function Form(){

}
Form.prototype.Clock = function(radius,shift = 0,rotation = 7/6){
    //step 12, reflect, rotate === clock,cos(a+b) = cosAcosB + sinAsinB
}

Form.prototype.Circle = function(radius = 1,shift = 0,stepping = 12,rotation = 7/6){
    //formular  y = rsinO x = rcosO 0 < O < 2pI
    let max = 2 * Math.PI,
    min = 0, step = (max /stepping),    
    cordinates = []
    rad = radius - shift;
    for (let min = 0; min < max; min += step) {
        cordinates.push({x : rad * Math.sin(-(min + (Math.PI)*rotation)), y : rad * Math.cos(min + (Math.PI)*rotation)});        
    }
    return cordinates;
}

Form.prototype.Ellipse = function(a,b){
    //Formula y = bsinO, x = acosO a != b
    if(a == b) throw new Error("Cannot draw ellipse with a == b");
    let max = 2 * Math.PI,
    min = 0, step = (max /200),    
    cordinates = [];
    
    for (let min = 0; min < max; min = min + step) {
        cordinates.push({x : a * Math.sin(min), y : b* Math.cos(min)});        
    }
    return cordinates;
}

Form.prototype.Spiral = function(a){
    //r = at x = atcost y = atsint  0 < t < 4pI

    let max = 20 * Math.PI,
    step = (max /900),
    cordinates = [];
    for (let min = 0; min < max; min += step) {
        cordinates.push({x : a * min * Math.cos(min), y : a * min * Math.sin(min) });
    }
    return cordinates;
}
Form.prototype.Lamicon = function(a,b){
    //r = a +- bcost
    let max = 2 * Math.PI,
    step = (max /900),
    cordinates = [];
    for (let min = 0; min < max; min += step) {
        cordinates.push({x : (a - b * Math.sin(min)) * Math.cos(min), y : (a - b * Math.sin(min)) * Math.sin(min) });
    }
    return cordinates;
}

Form.prototype.Rose = function(a,b,c){
    //r=asinNtheta
    let max =2 * 2 * Math.PI,
    step = (max /900),
    cordinates = [];
    for (let min = 0; min < max; min += step) {
        cordinates.push({x : (a * Math.sin(b*min)) * Math.cos(min), y : a * Math.sin(c*min) * Math.sin(min) });
    }
    return cordinates;
}

Form.prototype.Laminiscate = function(radius){
    let max = 2 * Math.PI,
    step = (max /900),
    cordinates = [];
    for (let min = 0; min < max; min += step) {
        cordinates.push({ x :radius* Math.cos(min), y :radius* Math.sin(2 * min)/2 })
    }
    return cordinates;
}
Form.prototype.WattsCurve = function(){
    //r^2 = 2a^2 * cos(2x)
}

//Form.prototype.