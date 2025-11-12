  import {Children, createContext, useEffect, useState, type ReactNode} from 'react';

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

  //authprovider will wrap all the children around context
  const AuthProvider = ({children}:{children: ReactNode}) =>{
    const [user, setUser] =useState<User |null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        //fetch if the user cookies are valid skip login
    }, []);

        const login = async(email: string, password: string) => { };
        const signup = async(name: string, email:string, password: string) => {};
        const logout = async () => {};

        //creating values
        const value = {
            user,
            isLoggedIn,
            login,
            logout,
            signup,
        }; 
        //now should return all the stakes above
        return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

  };