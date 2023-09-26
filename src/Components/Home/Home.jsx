import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import Banner from "./Banner/Banner";
import { useEffect, useState } from "react";

const Home = () => {

    const categories = useLoaderData();

    const [filterData, setFilterData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {
        const data = categories.filter(filterData => filterData.category.toLowerCase().includes(searchValue.toLowerCase()))
        setFilterData(data);

    }, [categories, searchValue])

    const handleInputChange = (event) => {
        event.preventDefault();
        setSearchValue(event.target[0].value);

    };
    return (
        <div >
            <Banner handleInputChange={handleInputChange}></Banner>
            <div className="w-10/12 m-auto">
                {
                    filterData.length > 0 ? <Categories categories={filterData} ></Categories> : <Categories categories={categories} ></Categories>
                }
            </div>
        </div>
    );
};

export default Home;