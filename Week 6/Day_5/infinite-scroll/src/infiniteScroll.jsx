import React, { useCallback, useEffect, useRef, useState } from "react";

const infiniteScroll = () => {
    // State to hold the list of items, whether there are more items to load, and the current page number for pagination.
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const loader = useRef(null);

    const fetchItems = useCallback(async () => {
        const newItems = await fetchMoreItems(page);
        setItems((prev) => [...prev, ...newItems]);
        setHasMore(newItems.length > 0);
    },[page])

    useEffect(() => {
        fetchItems();
    },[fetchItems])

    useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPage((prev) => prev + 1);
            }
        },
        { threshold: 1.0 }
    );

    if (loader.current) {
        observer.observe(loader.current);
    }

    return () => {
        if (loader.current) {
            observer.unobserve(loader.current);
        }
    };
}, [hasMore]);

    return (
        <div>
            <ul>
                {items.map((item, index) => {
                    <li key={index}>{item}</li>
                })}
            </ul>
            <div ref={loader} className='loader'>
                {hasMore ? 'Loading... more items' : 'No more item to load.'}
            </div>
        </div>
    )
}
// Simulate an API call to fetch more items using setTimeout to mimic network delay 
// and return a new set of items based on the current page number.
async function fetchMoreItems(page) {
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            const newItems = Array.from(
                { length: 10 },
                (_, i) => `Item ${(page - 1) * 10 + i + 1}`
            );
            resolve(newItems);
        }, 1000);
    });

    return data; // ✅ critical
}

export default infiniteScroll