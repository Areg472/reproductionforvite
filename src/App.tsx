import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Homepage} from './pages/homepage.tsx';
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {Fourofour} from "@/pages/404.tsx";


function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Router>
                <Routes>
                    <Route>
                        <Route path="*" element={<Fourofour/>}/>
                        <Route path="/" element={<Homepage/>}/>
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App
