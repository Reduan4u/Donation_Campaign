import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CategoryCard = ({ categoryCard }) => {
    const { id, category, title, image_url, category_bg, card_bg, text_color } = categoryCard || {}

    const cardStyle = {
        backgroundColor: card_bg,
    };
    const titleStyle = {
        backgroundColor: category_bg,
        color: text_color,
    };
    const textColor = {
        color: text_color,
    };

    return (
        <Link to={`/categories/${category}/${id}`}>
            <div className="card shadow-xl " style={cardStyle} >
                <figure><img src={image_url} className="w-full" alt="Shoes" /></figure>
                <div className="">
                    <h1 className="font-medium text-sm inline-flex rounded px-6 py-2  m-4" style={titleStyle}>{category}</h1>
                    <p className="text-xl font-semibold mx-4 mb-4" style={textColor}>{title}</p>
                </div>
            </div>
        </Link >
    );
};

CategoryCard.propTypes = {
    categoryCard: PropTypes.object.isRequired,
}

export default CategoryCard;