import Protected from "./components/Protected";
import Public from "./components/Public";

import useAuth from "./hooks/useAuth";

function App() {
    const {token, isLogin} = useAuth();
    return isLogin ? <Protected token={token} /> : <Public />;
}

export default App;