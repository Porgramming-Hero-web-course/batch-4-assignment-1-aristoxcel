

const getProperty =<X,Y extends keyof X> (obj:X, property:Y)=>{
    return obj[property]
}
