import CategoryCard from "./CategoryCard/CategoryCard";

const Categories = ({ categories }) => {


    return (
        <div className="my-10">
            <h1 className="text-center font-bold text-5xl "> This is Catagories:{categories.length}
            </h1>
            <div className="grid sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-10 my-20">
                {
                    categories?.map(categoryCard => <CategoryCard key={categoryCard.id} categoryCard={categoryCard}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;