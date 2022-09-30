function controlSocket (){
    this.Socket = undefined
}
controlSocket.prototype.connect = function (path){
   this.Socket =  io(path,{
   	transports:[
      'websocket',
      'polling',
      'flashsocket'
   	]
   })
   return this.Socket
}

controlSocket.prototype.emit = function (ev , data){
    var strDt = JSON.stringify(data)
    if(strDt.indexOf(' +*+*+ ') == -1 && ev.indexOf(' +*+*+ ') == -1){
        this.Socket.emit('data' , ev +' +*+*+ '+ strDt)
    }else{
         throw new Error('cannot use the symbol " +*+*+ " in string')
    }
    
}
