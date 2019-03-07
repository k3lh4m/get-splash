export const hasLocalStorageKey = (key: string) => {
	return localStorage.getItem(key);
}

export const addRecentSearchesToLocalStorageKey = (key: string, searchKeywords: string[]) => {
	const stringData = JSON.stringify(searchKeywords);

	localStorage.setItem(key, stringData)
}