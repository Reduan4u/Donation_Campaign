import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [noDonation, setNoDonation] = useState(false);
    const [seAll, setSeeAll] = useState(false)


    useEffect(() => {
        const donationsList = JSON.parse(localStorage.getItem('donations'));
        if (donationsList) {
            setDonations(donationsList);
        } else {
            setNoDonation("No Donation Yet")
        }
    }, []);

    const handleDelete = () => {
        localStorage.clear();
        setDonations([]);
        setNoDonation("No Donation Yet")


    }

    return (
        <div>
            {
                noDonation ? <p className="h-[80vh] flex justify-center items-center">{noDonation}</p>
                    : (
                        <div>


                            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-10 w-10/12 m-auto my-10">
                                {seAll ? donations.map((categoryCard) => (<DonationCard key={categoryCard.id} categoryCard={categoryCard}> </DonationCard>))
                                    :
                                    donations.slice(0, 4).map((categoryCard) => (<DonationCard key={categoryCard.id} categoryCard={categoryCard}> </DonationCard>))
                                }
                            </div>
                            <div className="flex justify-center gap-10">
                                {donations.length > 4 && <button onClick={() => setSeeAll(!seAll)} className="text-xl font-semibold px-7 py-3 border-none  text-white  bg-green-600 rounded capitalize">
                                    {seAll ? "See Less" : "See All"}
                                </button>}
                                {donations.length > 0 && <button onClick={handleDelete} className="text-xl font-semibold px-7 border-none  text-white py-3  bg-green-600 rounded capitalize"> Delete List</button>}
                            </div>

                        </div>
                    )};
        </div>
    );
};

export default Donation;