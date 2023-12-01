import useAuth from "./hooks/useAuth";
import Home from "./pages/Home.jsx";

function App() {
    const {token, isLogin} = useAuth();
    console.log(token)
    console.log(isLogin)
    return <Home/>
}

export default App;