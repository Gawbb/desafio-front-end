import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [files, setFiles] = useState([]);

  const handleRemoveFile = (index) => {
    const newFiles = files.filter((file, i) => {
      if (i !== index) {
        return file;
      } else {
        return;
      }
    });
    setFiles(newFiles);
  };

  return (
    <AppContext.Provider value={{ files, setFiles, handleRemoveFile }}>
      {children}
    </AppContext.Provider>
  );
};
