import React, { useState } from "react";
import { saveAs } from "file-saver";
import { MonaContext } from "../context/monaContext";
import { useContext } from "react";

export const Buttons = () => {
  const { contentMarkdown, setContentMarkdown } = useContext(MonaContext);
  const [name, setName] = useState("markdownEditor.md");

  const createFile = () => {
    const blob = new Blob([contentMarkdown], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, name);
  };
  const readFile = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    if (!file) return;

    fileReader.readAsText(file);

    fileReader.onload = () => {
      setContentMarkdown(fileReader.result);
      setName(e.target.files[0].name);
    };
    fileReader.onerror = () => {
      console.log(fileReader.error);
    };
  };
  return (
    <div>
      <input
        className="form-control btn-outline-light  btn-sm"
        type="file"
        multiple={false}
        onChange={readFile}
      />
      <button
        type="button"
        className="btn btn-outline-light  btn-sm"
        onClick={createFile}>
        Guardar archivo
      </button>
    </div>
  );
};
