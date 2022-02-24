// sync
const {readFileSync,writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');
console.log(first,second);
writeFileSync('./content/third.txt',`This is the third txt file: ${first} ${second}`,{flag:'a'});

// async
const {readFile,writeFile} = require('fs');
// const fs = require{'fs'};

readFile('./content/first.txt', 'utf-8',(err,result)=>{
    if(err){
        return; 
    }else{
        const first = result;
        readFile('./content/second.txt','utf-8',(err,result)=>{
            if(err){
                return;
            }else{
                const second = result;
                writeFile('./content/fourth.txt',`Hello World. ${first} ${second}`,(err,result)=>{
                    if(err){
                        return;
                    }else{
                        console.log(result);
                    }
                })
            }
        })
    }
})