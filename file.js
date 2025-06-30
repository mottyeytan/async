
//1

const fs = require('fs');
const path = require('path')

const fileName = 'text.txt';

fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err){
        console.log(err.message);
        return;
    }
    console.log("")
    console.log("file content:")
    console.log(data)
    console.log("")
    
    
});


fs.stat(fileName, (err, stats) => {
    if(err){
        console.log(err)
        return;
    }
    console.log("file size:")
    console.log(stats.size)
    console.log("")
    console.log("date of creation:")
    console.log(stats.birthtime.toISOString())

} ) 


//2

const directoryPath = './'


console.log(directoryPath)

fs.readdir(directoryPath, (err, items) => {
    if(err){
        console.log(err)
        return;
    }
    console.log(`this directory holds ${items.length} items`)

    items.forEach((item, index) => {
        const itemPath = path.join(directoryPath, item)

        fs.stat(itemPath, (err, stats) =>{
            if(err){
                console.log(`${itemPath}: ${err.message}`)
            } else {
                if(stats.isFile()){
                    console.log(`file: ${itemPath}`)
                }
            }

                
            
            
        })
    });
})


//3

function timer(n){
    console.log(n)

    if (n > 0){
        setTimeout(()=>{
            timer(n-1)}, 1000)
    }else{
        console.log("times is up")
    }
}

timer(5)

//4

const name = "quotes.txt"

fs.readFile(name, 'utf-8', (err, data) =>{
    if(err){
        console.log(err.message)
        return;
    }

    const lines = data.split('\n');
    
    const nonEmptyLines = lines.filter(line => line.trim() !== '');
    
    const randomIndex = Math.floor(Math.random() * nonEmptyLines.length)

    const randomLine = nonEmptyLines[randomIndex];

    console.log(`random line: ${randomLine}`)
})

//5

const os = require('os');

let count = 0;

const memory = setInterval(() => {
    const total = os.totalmem();
    const free = os.freemem();

    const percentege = ((free/total) * 100).toFixed(2);

    console.log(`free memory: ${percentege}%`)
    count++

    if (count >= 5){
        clearInterval(memory);
        console.log("memory logging complte")
    }
}, 2000);










