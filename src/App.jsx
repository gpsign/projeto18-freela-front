import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Reset from "./styled/Reset";
import GlobalStyle from "./styled/GlobalStyle";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { AuthProvider, DataProvider } from "./context/index.js";

function App() {
	return (
		<AuthProvider>
			<DataProvider>
				<BrowserRouter>
					<Reset />
					<GlobalStyle />
					<Routes>
						<Route path='/home' element={<Home />}></Route>
						<Route path='/' element={<Login />}></Route>
						<Route path='/signup' element={<SignUp />}></Route>
						<Route path='/profile' element={<Profile />}></Route>
					</Routes>
				</BrowserRouter>
			</DataProvider>
		</AuthProvider>
	);
}

export default App;
