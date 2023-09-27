import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const AllCategoryDonation = () => {
  const [DonationCategory, setDonationCategory] = useState([]);

  useEffect(() => {
    fetch("donationcard.json")
      .then((res) => res.json())
      .then((data) => setDonationCategory(data));
  }, []);
  //   console.log(DonationCategory);
  return (
    <>
      <section className="container p-4 md:p-16 mx-auto mt-12 lg:mt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {DonationCategory.map((cards) => (
            <DonationCard key={cards.id} cards={cards}></DonationCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllCategoryDonation;
