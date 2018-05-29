const mongoClient = require('mongodb');

const new_db = "mongodb://localhost:27017/demo_db";
mongoClient.connect(new_db, (error, db) => {
    if (error) throw error;

    let data = {'Name': 'Tejas', 'age': 23, 'email': 'tjstlekr@gmail.com'}

    db.collection("details").insertOne(data, (error, collection) => {
        if (error) throw error;
        console.log('Record inserted successfully');
        console.log(collection);
    });
});