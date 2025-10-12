import {connect} from 'mongoose'
import { disconnect } from 'process';

export default async function  connectionToDatabase() {
    try{
        await connect(process.env.MONGODB_URL)
    }catch(error){
        console.log(error);
        throw new Error("Cannot Connect To MongoDB");
    }
}

async function disconnectFromDatabase(){
    try{
        await disconnect();
    }catch(error){
        throw new Error("Could not Disctonnect From MongoDB");
    }
}

export{connectionToDatabase,disconnectFromDatabase};