var number = function(busStops){
    console.log(busStops[0])
    ///first = # of ppl getting on
    ///second = # of pple getting off
    let passengers = 0
    for (let i = 0; i < busStops.length; i++){
      console.log(busStops[i])
       let [addppl , subppl ] = busStops[i]
      passengers += addppl
      passengers -=subppl
    }
    return passengers
}