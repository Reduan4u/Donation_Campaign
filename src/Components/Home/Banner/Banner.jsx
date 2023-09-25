import { useState } from "react";

const Banner = () => {

    const [searchValue, setSearchValue] = useState('');
    const handleSearch = () => {
        //console.log(searchValue);
    };
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="my-10">
            <h1 className="text-center font-bold text-5xl ">I Grow By Helping People In Need</h1>
            <div className="flex justify-center mt-5">
                <input type="search" name="" id="" placeholder="Search here..." className="border rounded-lg px-4" value={searchValue} onChange={handleInputChange} />
                <button onClick={handleSearch} className="btn btn-primary">Search</button>
            </div>
        </div>
    );
};

export default Banner;