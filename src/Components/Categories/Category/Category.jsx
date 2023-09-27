import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCategoryCard from "./SingleCategoryCard/SingleCategoryCard";

const Category = () => {
    const [singleCategory, setSingleCategory] = useState();
    const { category } = useParams();
    const categories = useLoaderData();
    useEffect(() => {
        const findCategory = categories?.find((singleCategory) => singleCategory.category == category);
        setSingleCategory(findCategory);
    }, [category, categories])

    return (
        <div className="my-10 w-10/12 m-auto">
            <SingleCategoryCard singleCategory={singleCategory}></SingleCategoryCard>
        </div>
    );
};

export default Category;