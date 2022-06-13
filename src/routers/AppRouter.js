import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom"
import { JournalScreen } from "../journal/JournalScreen"
import { AuthRouter } from "./AuthRouter"


export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
<Route 
path="/*"
element={ <AuthRouter /> } />
<Route 
path="/"
element={ 


<JournalScreen />} 

/>


<Route path="*" element={<Navigate replace to="/auth/login" />} /> 

    </Routes>
    </BrowserRouter>
  )
}
