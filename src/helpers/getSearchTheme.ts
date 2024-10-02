import articles from '../data/articles.json';

export const getSearchTheme = (search: string) => {
    const themeTitle: string[] = [];

    for (const { subthemes } of articles) {
        for (const { title } of subthemes) {
            if (title.includes(search)) {
                themeTitle?.push(title);
            }
        }
    }
  
  return themeTitle;
}
