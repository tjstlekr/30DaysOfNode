
/*
What is MongoDb ?
Classified as a No SQL database , MongoDB is a scalable, open source, high performance , document-oriented database designed by keeping developers agility in mind. It is document-oriented which means that it does not store data in tables and rows as we would in relational databases like MySQL, In this we store data in JSON-like documents with dynamic schema.
Advantages :

Dynamic schema : If we have an flexible schema then it is ideal for JSON-like documents as in MongoDB however it is difficult to implement it in a good manner in Relational databases.
Scalability : MongoDB is highly scalable
Cheap : Can be downloaded free of cost.
 */




const mongoClient = require('mongodb');

const new_db = 'mongodb://localhost:27017/new_db';

mongoClient.connect(new_db, function (error, db) {
    if (error) throw  error;
    console.log('Database demo_db created successfully');
    db.close();
});