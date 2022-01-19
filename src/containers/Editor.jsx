import { Buttons } from "../components/Buttons";
import Mark from "../components/Mark";
import Monaco from "../components/Monaco";
import { MonaProvider } from "../context/monaContext";
import { Box } from "./Box";
import { BoxMonaco } from "./Boxmonaco";

function MyEditor() {
  return (
    <MonaProvider>
      <div className="container-fluid">
        <div className="row">
          <h1 className="App-h1">Markdown Editor</h1>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <BoxMonaco>
                  <Monaco />
                </BoxMonaco>
              </div>
              <div className="col-md-6">
                <Box>
                  <Buttons />
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
