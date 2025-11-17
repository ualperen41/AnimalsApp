const PetCard = ({ animal, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg hover:scale-105 transition-transform p-4">
      <img
        src={animal.image}
        alt={animal.name}
        className="w-full h-65 object-cover"
      />
      <h3 className="text-xl font-bold">{animal.name}</h3>
      <p className="text-sm text-gray-700 font-bold">{animal.type}</p>
      <p className="text-sm text-gray-500">{animal.city}</p>
      <p className="italic text-sm text-gray-500">{animal.status}</p>

      <div className="flex gap-2">
        {onDelete && (
          <button
            onClick={() => onDelete(animal)}
            className="px-2 py-1 bg-red-400 rounded-md hover:bg-red-500 cursor-pointer"
          >
            sil
          </button>
        )}
        {onEdit && (
          <button
            onClick={() => onEdit(animal)}
            className="px-2 py-1 bg-blue-400 rounded-md hover:bg-blue-500 cursor-pointer"
          >
            düzenle
          </button>
        )}
      </div>
    </div>
  );
};

export default PetCard;
