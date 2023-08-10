import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Reset from "./styled/Reset";
import GlobalStyle from "./styled/GlobalStyle";

function App() {
	return (
		<BrowserRouter>
			<Reset />
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Login />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
