
const CategoryCard = ({ categoryCard }) => {

    const { id, category, title, image_url, category_bg, card_bg, text_color } = categoryCard || {}



    return (
        <div className="card bg-base-100 shadow-xl bg-red-300">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="">
                <button className="btn btn-active btn-ghost m-4">{category}</button>
                <p className="mx-4 mb-4 ">{title}</p>

            </div>
        </div>
    );
};

export default CategoryCard;