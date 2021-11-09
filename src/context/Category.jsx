import React, { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const SubCategoryContent = createContext();

function CategoryProvider({ children }) {
  const [subName, setSubName] = useState("All");

  return (
    <SubCategoryContent.Provider value={{ subName, setSubName }}>
      {children}
    </SubCategoryContent.Provider>
  );
}
export default CategoryProvider;
