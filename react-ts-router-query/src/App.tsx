import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home/Home'
import './App.css'

export default function App() {
    return (
        <Routes>

            <Route path='/' element={<Home />} />

        </Routes>
    )
}