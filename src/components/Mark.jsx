import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 as CodeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import MarkDown from "markdown-to-jsx";
import { MonaContext } from "../context/monaContext";
import { useContext } from "react";

export default function Mark() {
  const { contentMarkdown } = useContext(MonaContext);
  return (
    <div>
      <div className="card-body ">
        <MarkDown
          options={{ overrides: { pre: PreBlock } }}
          style={{ height: "100%", width: "100%" }}>
          {contentMarkdown}
        </MarkDown>
      </div>
    </div>
  );
}
const CodeBlock = ({ className, children }) => {
  let lang = "text"; // default monospaced text
  if (className && className.startsWith("lang-")) {
    lang = className.replace("lang-", "");
  }
  return (
    <SyntaxHighlighter language={lang} style={CodeStyle}>
      {children}
    </SyntaxHighlighter>
  );
};

// markdown-to-jsx uses <pre><code/></pre> for code blocks.
const PreBlock = ({ children, ...rest }) => {
  if ("type" in children && children["type"] === "code") {
    return CodeBlock(children["props"]);
  }
  return <pre {...rest}>{children}</pre>;
};
