import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import Swal from 'sweetalert2';

const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [noDonation, setNoDonation] = useState(false);
    const [seAll, setSeeAll] = useState(false)

    useEffect(() => {
        const donationsList = JSON.parse(localStorage.getItem('donations'));
        if (donationsList) {
            setDonations(donationsList);
        } else {
            setNoDonation("No Donation Yet !!!")
        }
    }, []);

    const handleDelete = () => {
        localStorage.clear();
        setDonations([]);
        setNoDonation("No Donation Yet !!!")
        let timerInterval
        Swal.fire({
            title: 'Deleting Donation List',
            html: 'I will close in <b></b> milliseconds.',
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('ok')
            }
        })

    };

    return (
        <div>
            {
                noDonation ? <p className="h-[80vh] flex justify-center text-center items-center text-5xl font-extrabold">{noDonation}</p>
                    : (
                        <div>
                            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-10 w-10/12 m-auto my-10">
                                {seAll ? donations.map((categoryCard) => (<DonationCard key={categoryCard.id} categoryCard={categoryCard}> </DonationCard>))
                                    :
                                    donations.slice(0, 4).map((categoryCard) => (<DonationCard key={categoryCard.id} categoryCard={categoryCard}> </DonationCard>))
                                }
                            </div>
                            <div className="flex justify-center gap-10">
                                {donations.length > 4 && !seAll && (
                                    <button
                                        onClick={() => setSeeAll(true)}
                                        className="text-xl font-semibold px-7 py-3 border-none text-white bg-green-600 rounded capitalize"
                                    >
                                        See All
                                    </button>
                                )}
                                {donations.length > 0 && <button onClick={handleDelete} className="text-xl font-semibold px-7 border-none  text-white py-3  bg-green-600 rounded capitalize"> Delete List</button>}
                            </div>
                        </div>
                    )};
        </div>
    );
};

export default Donation;