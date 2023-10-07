import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "./styled/Reset";
import GlobalStyle from "./styled/GlobalStyle";
import { AuthProvider, DataProvider } from "./context/index.js";
import { SignUp, Login, Home, Cat } from "./pages/index.js";

function App() {
	return (
		<AuthProvider>
			<DataProvider>
				<BrowserRouter>
					<Reset />
					<GlobalStyle />
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='/signup' element={<SignUp />} />
						<Route path='/home' element={<Home />} />
						<Route path='/home' element={<Home />} />
						<Route path='/cat/:catId' element={<Cat />} />
					</Routes>
				</BrowserRouter>
			</DataProvider>
		</AuthProvider>
	);
}

export default App;
