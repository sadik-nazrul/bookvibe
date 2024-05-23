const getStoredReadWhishlistData = () => {
    let read = [];
    let wish = [];

    const storedRead = localStorage.getItem('read');
    if (storedRead) {
        read = JSON.parse(storedRead);
    }

    const storedWish = localStorage.getItem('wish');
    if (storedWish) {
        wish = JSON.parse(storedWish);
    }

    return {
        read,
        wish
    };
}

const saveReadBook = id => {
    const { read, wish } = getStoredReadWhishlistData();
    if (wish.includes(id)) {
        return 'exists_in_wish';
    }
    if (!read.includes(id)) {
        read.push(id);
        localStorage.setItem('read', JSON.stringify(read));
        return 'added';
    }
    return 'exists_in_read';
}

const saveWishBook = id => {
    const { read, wish } = getStoredReadWhishlistData();
    if (read.includes(id)) {
        return 'exists_in_read';
    }
    if (!wish.includes(id)) {
        wish.push(id);
        localStorage.setItem('wish', JSON.stringify(wish));
        return 'added';
    }
    return 'exists_in_wish';
}

export { getStoredReadWhishlistData, saveReadBook, saveWishBook };
