import { useRef, useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const timeoutId = useRef<null | NodeJS.Timeout>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    const debounce = setTimeout(() => {
      setSearch(e.target.value);
      console.log(e.target.value);
    }, 700);

    timeoutId.current = debounce;
  }

  return {
    search,
    handleChange
  };
}