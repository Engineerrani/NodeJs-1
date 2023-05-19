const dbConnect = require('./mongodb');

const updateData = async()=>{
    let data = await dbConnect();
    let result = await data.updateMany(
        { name:"max 1"}, {$set: {name:'max pro 5'}}
        );
   console.warn(result)
}
updateData();