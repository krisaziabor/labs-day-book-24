"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Row } from "@tanstack/react-table";
import { Preorder } from "./columns";

type SelectedRowsContextType = {
  selectedRows: Row<Preorder>[];
  setSelectedRows: React.Dispatch<React.SetStateAction<Row<Preorder>[]>>;
  resetSelectedRows: () => void;
};

const SelectedRowsContext = createContext<SelectedRowsContextType | undefined>(
  undefined
);

export const SelectedRowsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedRows, setSelectedRows] = useState<Row<Preorder>[]>([]);

  useEffect(() => {
    console.log("Selected rows updated:", selectedRows);
    // Add any additional actions needed on selection change
  }, [selectedRows]);

  const resetSelectedRows = () => {
    setSelectedRows([]);
    console.log("Selected rows reset");
  };

  return (
    <SelectedRowsContext.Provider
      value={{ selectedRows, setSelectedRows, resetSelectedRows }}
    >
      {children}
    </SelectedRowsContext.Provider>
  );
};

export const useSelectedRows = () => {
  const context = useContext(SelectedRowsContext);
  if (!context) {
    throw new Error("useSelectedRows must be used within a SelectedRowsProvider");
  }
  return context;
};
