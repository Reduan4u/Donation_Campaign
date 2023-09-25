
const SingleCategoryCard = ({ singleCategory }) => {

    const { id, category, title, image_url, category_bg, card_bg, text_color, price, description } = singleCategory || {};

    const handleDonate = () => {
        const addedDonatedList = [];
        const donationList = JSON.parse(localStorage.getItem('donations'))
        if (!donationList) {
            addedDonatedList.push(singleCategory);
            localStorage.setItem('donations', JSON.stringify(addedDonatedList));
            alert("Added")
        }
        else {

            const isExist = donationList.find(singleCategory => singleCategory.id == id)
            if (!isExist) {
                addedDonatedList.push(...donationList, singleCategory);
                localStorage.setItem('donations', JSON.stringify(addedDonatedList))
                alert("Added")
            }
            else {
                alert("Already Donated")
            }
        }
    }

    const cardStyle = {
        backgroundColor: card_bg,
    };
    const titleStyle = {
        backgroundColor: category_bg,
        color: text_color,
    };
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
                <h1 className="text-5xl font-bold text-black">{title}</h1>
                <p className="mt-6 text-justify text-base font-normal">{description}</p>
            </div>
        </div>
    );
};

export default SingleCategoryCard;