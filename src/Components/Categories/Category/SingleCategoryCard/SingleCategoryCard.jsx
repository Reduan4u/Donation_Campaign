
const SingleCategoryCard = ({ singleCategory }) => {
    console.log(singleCategory);

    const { id, category, title, image_url, category_bg, card_bg, text_color, price } = singleCategory || {}

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image_url} className="h-full" alt="Movie" /></figure>
            <div className="card-body">
                <button className="flex justify-start">{category}</button>
                <h2 className="card-title">{title}</h2>
                <p>${price}.00</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCategoryCard;