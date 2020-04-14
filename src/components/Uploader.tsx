import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Uploader: React.FC<{ onUpload: (s: string) => void }> = ({ onUpload, children }) => {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        onUpload(reader.result as string);
      };
      reader.readAsText(acceptedFiles[0]);
    },
    [onUpload]
  );

  const dragOpts = { multiple: false, onDrop };
  const { getRootProps, isDragActive } = useDropzone(dragOpts);

  return (
    <div {...getRootProps()}>
      {isDragActive && (
        <div className="absolute w-full h-full bg-purple-a50 text-3xl flex items-center justify-center text-purple-800">
          <div className="p-12 bg-gray-300 rounded flex items-center justify-center border-4 border-purple-800">
            Drop your CEPGP.lua file here
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Uploader;
