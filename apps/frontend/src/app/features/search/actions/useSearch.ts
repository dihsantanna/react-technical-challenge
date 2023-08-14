'use client';

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const useSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
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

  useEffect(() => {
    const params = new URLSearchParams(searchParams as unknown as URLSearchParams);

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

      router.replace(`${pathname}${params.toString() ? `?${params.toString()}` : ''}`);

  }, [search]);

  return {
    search,
    handleChange
  };
}
