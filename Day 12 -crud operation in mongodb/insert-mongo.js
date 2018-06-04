const mongoClient = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbName = 'user';
mongoClient.connect(url, (error, client) =>{
    if (error) throw error;
    console.log('connection established');

    let db = client.db(dbName);

    let data = {name: 'Tejas', age:'23', email:'tjstlekr@gmail.com'};

    let collectionName = 'user_info';
    db.collection(collectionName).insertOne(data, (err, client) => {
        if (err) throw err;
        // client.close()
    });
});