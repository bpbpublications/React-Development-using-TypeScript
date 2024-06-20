import { useState, useEffect, useId } from "react";

let idCounter = 0;

export function useCustomId() {
  const newGuid = useId();
  const [id, setId] = useState(`generated-id-${newGuid}`);

  useEffect(() => {
    setId(`generated-id-${idCounter++}`);
  }, []);

  return id;
}
