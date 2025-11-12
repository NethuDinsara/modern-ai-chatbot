  import {createContext} from 'react';

  type User = {
    name:string;
    email:string;
  };

  type UserAuth = {
    isLoggedIn: boolean;
        user: User | null;
    login:(email: string, password: string) =>Promise<void>; //not retrunign anything from the promise
    signup:(name: string, email:string, password: string)=>Promise<void>;
    //once we logout BE should remove the cookies
    logout:()=>Promise<void>;

  };

  const AuthContext = createContext<UserAuth | null>(null);
  //since we are using typescript we should provide a value tho