import Header from "./components/Header";
import Home from "./containers/Home";
import PageNoteFound from "./containers/PageNoteFound";
import GameInfo from "./containers/GameInfo"
import {Routes, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header />
            <main>

			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/GameInfo/:id" element={<GameInfo/>} />
				<Route path="*" element={<PageNoteFound/>} />

			</Routes>

            </main>
        </div>
    );
}

export default App;
