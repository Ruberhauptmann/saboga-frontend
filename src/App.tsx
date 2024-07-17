import './App.css'
import LoginForm from './Form.tsx'

function App() {
    fetch('/api/v1/users/me')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });

    return (
        <div>
            <h1 className="text-3xl">
                Hello world!
            </h1>
            < LoginForm/>
        </div>
    )
}

export default App
