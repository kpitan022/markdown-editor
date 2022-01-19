import React, { useContext } from "react";
import Editor from "@monaco-editor/react";
import { MonaContext } from "../context/monaContext";

export default function Monaco() {
  const { contentMarkdown, setContentMarkdown } = useContext(MonaContext);
  return (
    <Editor
      height="100%"
      theme="vs-dark"
      defaultLanguage="markdown"
      value={contentMarkdown}
      onChange={(value) =>
        setContentMarkdown(value) && console.log(contentMarkdown)
      }
    />
  );
}
