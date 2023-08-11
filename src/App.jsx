import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Reset from "./styled/Reset";
import GlobalStyle from "./styled/GlobalStyle";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Reset />
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
