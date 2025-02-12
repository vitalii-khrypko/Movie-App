import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <AppRoutes />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
