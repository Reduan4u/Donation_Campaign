import { Link } from "react-router-dom";

const CategoryCard = ({ categoryCard }) => {

    const { id, category, title, image_url, category_bg, card_bg, text_color } = categoryCard || {}


    return (
        <Link to={`/categories/${category}/${id}`}>
            <div className="card shadow-xl bg-red-300">
                <figure><img src={image_url} className="w-full" alt="Shoes" /></figure>
                <div className="">
                    <button className="btn btn-active btn-ghost m-4">{category}</button>
                    <p className="mx-4 mb-4">{title}</p>
                </div>
            </div></Link>
    );
};

export default CategoryCard;