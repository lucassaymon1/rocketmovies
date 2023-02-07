import { Route, Routes } from "react-router-dom"

import { MyMovies } from "../Pages/MyMovies"
import { NewMovie } from "../Pages/NewMovie"
import { Preview } from "../Pages/Preview"
import { Profile } from "../Pages/Profile"


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MyMovies />} />
      <Route path="/new" element={<NewMovie />} />
      <Route path="/preview/:id" element={<Preview />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}