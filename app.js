const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/authMiddleware');

app.use(express.json());

const mongo_url = "mongodb://127.0.0.1:27017/Monastery360"
main().then(() => {
    console.log("connected to database");
}).catch((err) => {
    console.log(err);
});
async function main(){
    await mongoose.connect(mongo_url);
}

app.use('/api/auth', authRoutes);

// Example protected route
app.get('/api/protected', authMiddleware, (req, res) => {
    res.json({ message: `Hello, ${req.user.email}! This is a protected route.` });
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
})