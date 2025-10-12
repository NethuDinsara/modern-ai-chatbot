import { error } from 'console'
import app from './app.js'
import connectionToDatabase from './db/connection.js'

//connections and listeneres
const PORT=process.env.PORT || 5001;
connectionToDatabase()
.then(()=>{
  app.listen(PORT,()=>console.log("Server Open and Connected to the DataBase"))
})
.catch((error) => console.log(error))



