import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button } from "@mui/material";
import "./app.css";
function App() {
  return (
    <div className="App">
      <h1 className="hola">
         Hola Mundo !
      </h1>
      <Button color="success" variant="contained">
        Button
      </Button>
    </div>
  );
}

export default App;
