import { useState, useCallback } from "react";
import { DragDropZone } from "./DragDropZone";

export default function App() {
  const [selectedFiles, setSelectedFiles] = useState<File[] | undefined>([]);

  const handleSelectedFiles = useCallback(
    (files: File[] | undefined) => {
      setSelectedFiles(files);
    },
    [setSelectedFiles]
  );

  const handleExecute = useCallback(() => {
    if (!selectedFiles) return;
    let fileNameWithLine = "";
    for (const file of selectedFiles) {
      fileNameWithLine += `\n - ${file.name}`;
    }
    alert(`[Selected files] ${fileNameWithLine}`);
  }, [selectedFiles]);

  return (
    <div className="App">
      <h1>React: File drag & drop</h1>
      <p>
        Files can be selected by drag & drop or in a selection dialog.
        <br />
        (sample accept extensions: ".txt", ".csv", ".png", ".jpg")
      </p>

      {selectedFiles && selectedFiles?.length > 0 && (
        <button type="button" onClick={handleExecute}>
          <span>Execute something</span>
        </button>
      )}
      <DragDropZone onSelectedFiles={handleSelectedFiles} />
    </div>
  );
}
