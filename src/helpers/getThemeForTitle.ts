import articles from '../data/articles.json';

export const getSubThemeForTitle = (title?: string) => {
    let subTheme;
    
    for (const { subthemes } of articles) {
        subTheme = subthemes.filter(s => s.title === title)
    }
   
    return subTheme?.pop();
}