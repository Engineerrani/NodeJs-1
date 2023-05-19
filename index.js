// const app = require('./app');

// console.log(app.z())
// var x = 20;
// const arr = [2,3,4,5,6,7,8,9,8,9];
// let result =  arr.filter((item)=>{
// return item > 8;
// })
// console.log(result);

// const fs = require('fs')

// fs.writeFileSync('hello.txt', "Learning node js");

// var colors = require('colors');

// const http = require('http');

// http.createServer((req, res)=>{
//     res.write("hi rani this side");
//     res.end();
// }).listen(4500);

// console.log('hello rani'.rainbow)


// const http = require('http');
// const data = require('./data');
// //make a server/create header and API body/put data in another file
// http.createServer((req, res)=>{
// res.writeHead(200, {'Content-Type': 'application\json'});
// res.write(JSON.stringify(data))
// res.end();
// }).listen(5000)

// console.log(process.argv)


//input from command line
// const fs = require('fs');

// const input = process.argv;
// if(input[2]=='add')
// {
// fs.writeFileSync(input[3], input[4])
// }else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("invalid input")
// }

////nodemon index.js add data.txt 'hi rani this side'.....run in command line
/////nodemon index.js remove data.txt



///show the file list(create a muliple file) with the file system
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files')
// for(i=0; i<5; i++)
// {
//     // fs.writeFileSync("hello"+i+".txt", "a simple text file"); OR
//     fs.writeFileSync(dirPath+`/hello ${i}.txt`, "a simple text file")
// }


// fs.readdir(dirPath, (err, files)=>{
//     files.forEach((item)=>{
//         console.log("file name is", item)
//     }) OR
// // console.warn(files)
// })


///crud
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple.txt`

// fs.writeFileSync(filePath, 'this is the simple text')
// fs.readFile(filePath, 'utf-8', (err,item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath, ' here add the extra text', (err)=>{
//     if(!err){
//         console.log('file is updated')
//     }
// })

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
//     if(!err){
//         console.log("file name is updated")
//     }
// })
// fs.unlinkSync(`${dirPath}/fruit.txt`)

/////async
// console.log('task 1 completed');

// setTimeout(()=>{
//     console.log('task 2 completed');
// }, 2000)

// console.log('task 3 completed')

///eg./drawback

// let a = 20;
// let b = 0;

// setTimeout(()=>{
//     b = 30;
// },2000)

// console.log(a+b);


/////how to handle( whatever logic takes the time how to handle that logic) **use Promise**

// let a = 20;
// let b = 0;

// let waitingData = new Promise((resolve, reject)=>{
// setTimeout(()=>{
//     resolve(30)
// },2000)

// })
// waitingData.then((data)=>{
//     b = data;
//     console.log(a+b);
// })

/////express framework

// const express = require('express');
// const app = express();

// app.get('/', (req, res)=>{
//    // console.log('data sent by browser', req.query.name)
//    res.send(`
//    <h1>Welcome, this is home page'</h1> <a href="/about">Go to About Page </a>
// `)
// });
// app.get('/about', (req, res)=>{
//    res.send(`
//    <input type="text" placeholder="Enter Name" value= ${req.query.name} />
//    <button>Click Me</button>
//    <a href="/">Go to Home Page </a>`
//    )
// });
// app.get('/help', (req, res)=>{
//    res.send('Hello, this is hello page')
// });
// app.listen(5000);


////**************** */make html file and access it
// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname, 'public')
// // console.log(publicPath)

// app.set('view engine', 'ejs')

// // app.use(express.static(publicPath));

// // remove an extension from URL
// app.get('', (_, res)=>{
//    res.sendFile(`${publicPath}/index.html`)
// })
// ///template engine/any template engine always use views name folder(use for make the dynamic pages)
// app.get('/profile', (_, res)=>{
//    const user = {
//       name: 'Rani Maurya',
//       email: 'maurya@practice.com',
//    city: 'Mumbai',
//    skills: ['php', 'js', 'reactjs', 'nodejs','java']
//    }
//    res.render('profile', {user})
// })
// app.get('/login', (_, res)=>{
// res.render('login');
// })
// app.get('/about', (_, res)=>{
//    res.sendFile(`${publicPath}/about.html`)
// })
// app.get('/help', (_, res)=>{
//    res.sendFile(`${publicPath}/help.html`)
// })
// //kuchh bhi type kro home page dikhe(or 404 page)
// app.get('*', (_, res)=>{
//    res.sendFile(`${publicPath}/404.html`)
// })
// app.listen(5000);


////Middleware


const express  = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();

// app.use(reqFilter)

route.use(reqFilter);
// app.get('/', (req, res)=>{
//    res.send('Welcome to home page')
// })

// app.get('/users', (req, res)=>{
//    res.send('Welcome to users page')
// })
// //if u don't want to apply any middleware then use app.get//if u want middleware then use route.get
// route.get('/about', (req, res)=>{
//    res.send('Welcome to about page')
// })

// route.get('/contact', (req, res)=>{
//    res.send('Welcome to contact page')
// })
//  app.use('/', route);



// app.listen(5000);


//mongodb start
//******connect database mongodb to nodejs
// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const database = 'e-comm';
// const client = new MongoClient(url);

// async function getData() {
//    let result =await client.connect();
//    let db = result.db(database);
//    let collection = db.collection('products');
//    let data =await collection.find({}).toArray();
//    console.log(data);
// }


// getData();

/////////////////////////*********Read data from mongodb////handle promise (using both method [async/await] and [.then]) */
const dbConnect = require('./mongodb')

//***using(.then method)

// dbConnect().then((res)=>{
//    res.find().toArray().then((data)=>{
//       console.log(data)
//    })
// })

//*** using the async/await */

const main = async() =>{
   let data = await dbConnect();
   data = await data.find().toArray();
   console.warn(data)
}
main();