import {Router} from 'express';
import { getAllUsers, userLogin, userSigUp } from '../controllers/user-controllers.js';
import {LoginValidator, signupValidator, validate} from '../utils/validators.js'

const userRoutes= Router();

userRoutes.get("/",getAllUsers);
userRoutes.post("/signup",validate(signupValidator),userSigUp);
userRoutes.post("/login",validate(LoginValidator),userLogin);

export default userRoutes;