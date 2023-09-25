import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import Banner from "./Banner/Banner";

const Home = () => {

    const categories = useLoaderData();

    return (
        <div >
            <Banner ></Banner>
            <div className="w-10/12 m-auto">
                <Categories categories={categories} ></Categories>
            </div>
        </div>
    );
};

export default Home;