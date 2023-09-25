import { useState } from "react";

const Banner = () => {

    const [searchValue, setSearchValue] = useState('');
    const handleSearch = () => {
    };
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className=" mb-10 hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/PDrXhfj/fc1f79e18cdc1a12320b9b10ec3e253d.jpg)' }}>
            <div className="hero-overlay bg-white bg-opacity-75"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                    <div className="flex justify-center mt-5 relative z-10 pt-6 ">
                        <input type="search" id="" name="" placeholder="Search here..." className="rounded-l-lg px-4 text-black font-semibold" value={searchValue} onChange={handleInputChange} />
                        <button onClick={handleSearch} style={{ backgroundColor: "#FF444A" }} className="text-xl font-semibold px-7 border-none text-white py-3 rounded-r-lg capitalize">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;