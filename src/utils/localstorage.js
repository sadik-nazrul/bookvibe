const getStoredReadWhishlistData = () => {
    const storedRead = localStorage.getItem('read');
    if (storedRead) {
        return JSON.parse(storedRead);
    }
    return []
}

const saveReadBook = id => {
    const storedRead = getStoredReadWhishlistData();
    const exist = storedRead.find(bookId => bookId === bookId);
    if(!exist){
        storedRead.push(id);
        localStorage.setItem('read', JSON.stringify(storedRead))
    }
    return exist;
}

export { getStoredReadWhishlistData, saveReadBook }