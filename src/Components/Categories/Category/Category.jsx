import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCategoryCard from "./SingleCategoryCard/SingleCategoryCard";

const Category = () => {
    const [singleCategory, setSingleCategory] = useState();
    const { id } = useParams();
    const categories = useLoaderData();

    useEffect(() => {
        const findCategory = categories?.find((singleCategory) => singleCategory.id == id);
        setSingleCategory(findCategory);

    }, [id, categories])

    return (
        <div className="my-10 w-10/12 m-auto">
            <SingleCategoryCard singleCategory={singleCategory}></SingleCategoryCard>
        </div>
    );
};

export default Category;