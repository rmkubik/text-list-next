import { createContext } from "react";

// The defaultValue in createContext is only used if the AuthContext.Provider
// is not correctly placed in the React Tree somewhere. We want it to be null
// so that is obvious something is wrong.
//
// https://stackoverflow.com/questions/49949099/react-createcontext-point-of-defaultvalue
export default createContext(null);
