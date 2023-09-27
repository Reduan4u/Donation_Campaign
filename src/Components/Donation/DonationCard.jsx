import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DonationCard = ({ categoryCard }) => {

    const { id, category, title, image_url, category_bg, card_bg, text_color, price } = categoryCard || {};

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
    const buttonColor = {
        backgroundColor: text_color,
    };

    return (
        <div className="card card-side shadow-xl" style={cardStyle}>
            <figure className="w-2/5"><img src={image_url} className="h-full w-full" alt="Movie" /></figure>
            <div className="p-6">
                <h1 className="font-medium text-sm inline-flex rounded px-6 py-2" style={titleStyle}>{category}</h1>
                <h2 className="card-title text-2xl font-semibold py-2">{title}</h2>
                <p className="text-base font-semibold pb-5" style={textColor}>${price}.00</p>

                <Link to={`/categories/${category}/${id}`}>
                    <div className="card-actions justify-start">
                        <button style={buttonColor} className="text-xl font-semibold px-7 btn border-none text-white rounded capitalize">View Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    categoryCard: PropTypes.object,
}

export default DonationCard;