class Rectangle
{
    protected width: number
    protected height: number

    constructor(width:number, height:number) {
        this.width = width
        this.height = height
    }

    public getWidth():number {
        return this.width
    }

    public setWidth(width: number) {
        this.width = width
    }

    public getHeight(): number {
        return this.height
    }

    public setHeight(height: number) {
        this.height = height
    }

    public getArea(): number { 
        return (this.width * this.height)
    }

    public isSquare(): boolean
    {
        return this.width == this.height
    }
}

class Square extends Rectangle
{

    constructor(size:number) {
        super(size, size)
    }

    public setWidth(width: number) { // anti-pattern
        super.setWidth(width);
        super.setHeight(width);
    }

    public setHeight(height: number) { // anti-pattern
        super.setHeight(height);
        super.setWidth(height);
    }
}

class RectangleFactory
{
    public static newSquare(side: number): Rectangle
    {
        return new Rectangle(side, side);
    }

    public static newRectangle(width: number, height:number): Rectangle
    {
        return new Rectangle(width, height);
    }
}



function use(r: Rectangle) {
        r.setHeight(10);
        console.log("Expected area of " + r.getWidth()*10 + ", got " + r.getArea());
}


let rc = new Rectangle(2, 3);
use(rc);

let sq = new Square(5);
sq.setHeight(2); // anti-pattern
sq.setWidth(3); // anti-pattern
use(sq);

rc = RectangleFactory.newRectangle(2,3);
use(rc);

sq = RectangleFactory.newSquare(10);
use(sq);
