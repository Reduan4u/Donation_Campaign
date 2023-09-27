import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

const SingleCategoryCard = ({ singleCategory }) => {

    const { id, title, image_url, text_color, price, description } = singleCategory || {};

    const handleDonate = () => {
        const addedDonatedList = [];
        const donationList = JSON.parse(localStorage.getItem('donations'))
        if (!donationList) {
            addedDonatedList.push(singleCategory);
            localStorage.setItem('donations', JSON.stringify(addedDonatedList));
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Donation Completed',
                showConfirmButton: false,
                timer: 1000
            })
        }
        else {

            const isExist = donationList.find(singleCategory => singleCategory.id == id)
            if (!isExist) {
                addedDonatedList.push(...donationList, singleCategory);
                localStorage.setItem('donations', JSON.stringify(addedDonatedList))
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Donation Completed',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Already Donated',
                    footer: '<a href="https://a08-donation-campaign.netlify.app/">Donate More</a>'
                })
            }
        }
    }

    const textColor = {
        backgroundColor: text_color,
    };
    const buttonPosition = {
        bottom: '7%',
    }
    return (

        <div>
            <div className="relative">
                <img className="w-full mix-blend-multiply" src={image_url} alt="" />
                <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gray-900 opacity-25"></div>
                <div className="absolute left-10" style={buttonPosition}>
                    <button style={textColor} onClick={handleDonate} className="text-xl font-semibold px-7 btn border-none text-white rounded">Donate ${price}</button>
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black">{title}</h1>
                <p className="mt-6 text-justify text-base font-normal">{description}</p>
            </div>
        </div>
    );
};

SingleCategoryCard.propTypes = {
    singleCategory: PropTypes.object,
}

export default SingleCategoryCard;