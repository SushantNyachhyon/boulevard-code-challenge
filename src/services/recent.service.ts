const storeRecentSearch = async (value: string): Promise<void> => {
    const recents: string[] =
        JSON.parse(localStorage.getItem('recents') as string)
        || [value.toLowerCase()];

    if (!recents.includes(value.toLowerCase())) {
        recents.push(value.toLowerCase());
    }
    localStorage.setItem('recents', JSON.stringify(recents));
};


const getRecentSearch = (): string[] =>
    JSON.parse(localStorage.getItem('recents') as string) || null;

export const Recent = { storeRecentSearch, getRecentSearch };
