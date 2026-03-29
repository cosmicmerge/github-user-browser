import ReactDOM from "react-dom/client";
import Header from "./Component/header";
import Body from "./Component/body";

function App() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="flex-1 overflow-y-auto">
                <Body />
            </main>
            
            {/* Optional Footer */}
            <footer className="bg-gray-800 text-white py-3 text-center text-sm">
                <p>© 2024 GitHub Explorer | Data from GitHub REST API</p>
            </footer>
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);