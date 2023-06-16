var Rectangle = function(width, height){
    this.width = width;
    this.height = height;
    };
    Rectangle.prototype.getArea  = function(){
    return this.width * this.height;
    };
    var rect = new Rectangle(3,4);
    document.write(rect.getArea()); //12
    
    document.write("<br>");
    
    var Square = function(width){
         Rectangle.call(this, width, width);
    };
    Square.prototype  = new Rectangle();
    var sq = new Square(5);
    document.write(sq.getArea()); //25
    console.dir(sq);