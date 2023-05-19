const dbConnect = require('./mongodb');

const insert = async() =>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            {name:'max 1', brand:'micromax', price:220, category:'mobile'},
            {name:'max 2', brand:'micromax1', price:320, category:'mobile'},
            {name:'max 3', brand:'micromax2', price:620, category:'mobile'}

        ]
    );
    if(result.acknowledged){
        console.log("data inserted")
    }
}
insert();