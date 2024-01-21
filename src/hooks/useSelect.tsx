import React, { useState } from "react";

export const useSelect = () => {
  const [select, setSelect] = useState<string>("");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };
  return { select, setSelect, handleSelect };
};
