import React, { createContext, useState } from "react";

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
