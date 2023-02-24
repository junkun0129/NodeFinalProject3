module.exports = (http)=>{
    const soketIO = require("socket.io")(http, {
        cors:{
            origin: "https://node-final-project2-client.vercel.app"
        }
    })

    soketIO.on("connection", (socket)=>{
        // console.log(">>>>>>>", socket, ">>>>>>>>>")

        socket.on("oi", (data)=>{
            console.log(data, "ikuzoooooooooooooo")
        })

        socket.on("encount", (data)=>{
            
            socket.emit("screenSwitch", "hit");
            
        })

        socket.on("back", (data)=>{
            socket.emit("backSwitch", "backback")
        })


    })
    

}
