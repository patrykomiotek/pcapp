"use client";

import { Input } from "@/ui/Input";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ChangeEventHandler, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

export const SearchMembersForm = () => {
  const searchFieldRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const handleChange: ChangeEventHandler<HTMLInputElement> =
    useDebouncedCallback((event) => {
      const params = new URLSearchParams(searchParams);
      const value = event.target.value;
      if (value) {
        params.set("query", value);
        // params.set("department", value);
      } else {
        params.delete("query");
      }
      console.log(`${pathName}?${params.toString()}`);
      replace(`${pathName}?${params.toString()}`);
    }, 400);

  return (
    <div>
      <form>
        <Input
          label="Search"
          ref={searchFieldRef}
          onChange={handleChange}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </form>
    </div>
  );
};
