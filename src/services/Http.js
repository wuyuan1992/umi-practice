export default class Http{
    static get(url){
        return new Promise((resolve, reject)=>{
            console.log(url);
            let data= [
                {
                    id: 1,
                    setup: '1111111',
                    punchline: '22222'
                },{
                    id: 2,
                    setup: 'aaaaaaa',
                    punchline: 'dddddddd'
                }
            ];

            setTimeout(()=>{
                resolve(data);
            }, 3000)
        })
    }
}