import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Reset from "./styled/Reset";
import GlobalStyle from "./styled/GlobalStyle";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { LoginDataProvider } from "./context/login";
 
function App() {
	return (
		<LoginDataProvider>
			<BrowserRouter>
				<Reset />
				<GlobalStyle />
				<Routes>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/" element={<Login />}></Route>
					<Route path="/signup" element={<SignUp />}></Route>
				</Routes>
			</BrowserRouter>
		</LoginDataProvider>
	);
}

export default App;
