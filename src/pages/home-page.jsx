import { useEffect, useState } from "react";
import PetCard from "../components/petCard";
import { LuPawPrint } from "react-icons/lu";

const HomePage = () => {
  const [pets, setPets] = useState([]);
  const [editPet, setEditPet] = useState(null);
  const [deletePet, setDeletePet] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5003/pets")
      .then((res) => res.json())
      .then((data) => setPets(data))
      .catch((err) => console.error(err));
  }, []);

  const myPets = pets.filter((p) => p.owner === "me");
  const otherPets = pets.filter((p) => p.owner !== "me");

  const handleDeletePet = (pets) => {
    setDeletePet(pets);
  };

  const handleEditPet = (pets) => {
    setEditPet(pets);
  };
  return (
    <div className="p-6 bg-[#27277d] min-h-screen">
      <h2 className="text-4xl font-bold text-[#f158a4] flex items-center">
        Find Your Pet
        <LuPawPrint className="text-5xl ml-3" />
      </h2>
      {/* Senin ilanların */}
      {myPets.length > 0 && (
        <>
          <h3 className="text-[#f158a4] text-3xl font-bold mb-4">
            Senin ilanların
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
            {myPets.map((pets) => (
              <PetCard
                key={pets.id}
                animal={pets}
                onEdit={handleEditPet}
                onDelete={handleDeletePet}
              />
            ))}
          </div>
        </>
      )}
      {/* Tüm ilanlar */}
      <h3 className="text-[#f158a4] text-3xl font-bold mb-4">Mevcut İlanlar</h3>
      <div className="object-cover grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {otherPets.map((pets) => (
          <PetCard key={pets.id} animal={pets} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
