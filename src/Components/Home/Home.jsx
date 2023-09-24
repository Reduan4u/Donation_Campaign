import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import Banner from "./Banner/Banner";

const Home = () => {

    const categories = useLoaderData();


    return (
        <div className="w-10/12 m-auto">
            <Banner></Banner>
            <Categories categories={categories}></Categories>
            <div>

            </div>
        </div>
    );
};

export default Home;