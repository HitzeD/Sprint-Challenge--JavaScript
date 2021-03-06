class CuboidMaker{
    constructor(length,width,height){
        this.width = width;
        this.length = length;
        this.height = height;
    };

    volume(){
        return this.length * this.width * this.height;
    };

    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker(4,5,5);



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods
// using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(obj){
        super(obj);
    }

    cubeVolume(){
        return Math.pow(this.length,3);
    }

    cubeSurfaceArea(){
        return 6 * (Math.pow(this.length,2));
    }
}

const medCube = new CubeMaker(4,4,4);

console.log(medCube.cubeVolume());
console.log(medCube.cubeSurfaceArea());