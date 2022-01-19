import Mark from "../components/Mark";
import Monaco from "../components/Monaco";
import { MonaProvider } from "../context/monaContext";
import { Box } from "./Box";

function MyEditor() {
  return (
    <MonaProvider>
      <div className="container-fluid">
        <div className="row">
          <h1 className="App-h1">Markdown Editor</h1>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <Box>
                  <Monaco />
                </Box>
              </div>
              <div className="col-md-6">
                <Box>
                  <Mark />
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MonaProvider>
  );
}

export default MyEditor;
