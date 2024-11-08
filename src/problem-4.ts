type Circle = {
    shape:"circle";
    radius : number;
};

type Rectangle = {
    shape:"rectangle";
    height : number;
    width : number;
}

const calculateShapeArea= (shape:Circle | Rectangle)=>{
    if (shape.shape === 'circle') {
        return Math.PI * shape.radius* shape.radius
    }
    else if (shape.shape === 'rectangle') {
        return shape.height * shape.width
    }
}

