onmessage = (e) =>{
    console.log(`专用线程接收数据-${e.data}`);
    setTimeout(()=>{
        let worker = new Worker("./dw-sub-ping-pong.js")
        worker.onmessage=(e)=>{
            console.log(`专用线程从专用子线程中接收数据-${e.data}`);
        }
        worker.postMessage("专用线程过了1s后再次发送数据")
    },1000)
    postMessage("专用线程发送数据11111")
}