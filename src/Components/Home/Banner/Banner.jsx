import PropTypes from 'prop-types';

const Banner = ({ handleInputChange }) => {

    return (
        <div className=" mb-10 hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/PDrXhfj/fc1f79e18cdc1a12320b9b10ec3e253d.jpg)' }}>
            <div className="hero-overlay bg-white bg-opacity-75"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                    <form onSubmit={handleInputChange} className="flex flex-col sm:flex-row lg:flex-row md:flex-row justify-center mx-2 mt-5 relative z-10 pt-6 gap-2 lg:gap-0 md:gap-0 sm:gap-0">
                        <input type="search" placeholder="Search here..." className=" lg:rounded-r-none sm:rounded-l-lg md:rounded-l-lg lg:rounded-l-lg py-3 px-4 text-black font-semibold" />
                        <button style={{ backgroundColor: "#FF444A" }} className="text-xl font-semibold px-7 border-none text-white py-3 sm:rounded-r-lg md:rounded-r-lg lg:rounded-r-lg ">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleInputChange: PropTypes.func,
}

export default Banner;