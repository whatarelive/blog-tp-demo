import { useState, useEffect } from 'react';
import { SubThemes } from '../interfaces/interfaces';
import articles from '../data/articles.json';


export const useThemes = () => {
  const [themes, setThemes] = useState<SubThemes[]>([]);

  useEffect(() => {
    const theme = articles[0]
    if (theme) setThemes( theme.subthemes )
      
  }, [])

  return {
    themes,
    articles
  }
}
