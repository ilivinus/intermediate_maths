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

Line.prototype.JoiningPoints = function(density){
    let dx = this.xApart(),
    dxInteval = parseFloat(dx/density),    
    slope = this.Gradient(),
    c = this.Intercept();    

    for (var i = this.x1; i < this.x2; i += dxInteval) {
        this.points.push({y : (i * slope + c).toFixed(4), x : (i).toFixed(4)});        
    }
}
