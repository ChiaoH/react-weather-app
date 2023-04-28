import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stockholm" />
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
          <br />
          Photo by{" "}
          <a
            href="https://unsplash.com/@tepapa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
          >
            Museum of New Zealand Te Papa Tongarewa
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com/photos/O6GOnACSjo4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
          >
            Unsplash
          </a>
        </footer>
      </div>
    </div>
  );
}
