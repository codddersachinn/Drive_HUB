const mongoose =require('mongoose');

//const url="mongodb+srv://sachinmdhs3:IJDqzWNaISjTWMp6@cluster0.ejiphzz.mongodb.net/?retryWrites=true";
const url="mongodb+srv://sachinmdhs3:1fsmWUkARyXIkBxd@cluster0.1b8ml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// asynchronous functions - return promise
mongoose.connect(url)
.then((result) => {
 console.log('database connected');   
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;
