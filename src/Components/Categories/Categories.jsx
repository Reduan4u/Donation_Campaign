import CategoryCard from "./CategoryCard/CategoryCard";
import PropTypes from 'prop-types';

const Categories = ({ categories }) => {

    return (
        <div className="my-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 my-20">
                {
                    categories?.map(categoryCard => <CategoryCard key={categoryCard.id} categoryCard={categoryCard}></CategoryCard>)
                }
            </div>
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
}

export default Categories;