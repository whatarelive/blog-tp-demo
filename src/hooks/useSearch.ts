import { useEffect, useState } from "react";
import { getSearchTheme } from "../helpers/getSearchTheme";

interface Props {
    search: string
}

export const useSearch = ({search}: Props) => {
    const [listSearch, setListSearch] = useState<string[]>([]);

    useEffect(() => {
        const list = getSearchTheme(search);
        setListSearch(list);
    }, [search])

  return {
    listSearch
  }
}
