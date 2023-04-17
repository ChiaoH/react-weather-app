import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="btn btn-warning">Hi!</div>
        Weather App
        <footer>
          This app was coded by{" "}
          <a
            href="https://www.linkedin.com/in/wu-chiao-huang-642a07255/"
            target="_blank"
            rel="noreferrer"
          >
            Wu-chiao
          </a>
          , and is{" "}
          <a
            href="https://github.com/ChiaoH/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
