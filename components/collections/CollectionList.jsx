export function CollectionList({ collections }) {
    if (!collections || collections.length === 0) {
        return <p>No collections available</p>;
    }

    return (
        <ul>
            {collections.map((collection) =>(
                <li key={collection.id}>
                    {collection.title}
                </li>
            ))}
        </ul>
    );
}