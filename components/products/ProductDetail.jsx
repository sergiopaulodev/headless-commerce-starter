export function ProductDetail({ product }) {
    const hasImages = product.images && product.images.length > 0;

    return (
        <article>
            <h1>{product.title}</h1>
            {product.description && <p>{product.description}</p>}
        
        {product.price ? (
            <p>
                {product.price.amount} {product.price.currency}
            </p>
            ) : (
                <p>Precio no disponible</p>
            )
        }
        
        {hasImages ? (
            <img
                src={product.images[0].url}
                alt={product.images[0].alt ?? product.title}
            />
        ) : (
            <div className="product-image--placeholder">
                Imagen no disponible
            </div>
        )

        }
        
        </article>
    );
}