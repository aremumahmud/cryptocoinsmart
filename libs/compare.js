function compare(date){
   let dt1 = new Date(date).getTime()
   let dt2 = new Date().getTime()
   let milit = dt2-dt1
   return ((milit/1000)/3600)/24
}

module.exports = compare