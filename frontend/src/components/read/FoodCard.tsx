
import { FoodItem } from "../../types/FoodItem";
import axios from "axios";

interface FoodCardProps {
  item: FoodItem;
  onEdit: (item: FoodItem) => void;
}

const FoodCard = ({ item, onEdit }: FoodCardProps) => {
  const handleDelete = () => {
    // TODO: Implement delete functionality
    const id = item._id

    console.log("Delete item:", id);
    axios.delete("http://localhost:4000/meal", { data: { id }})
    .then((res)=>{
      const data = res.data
      if(data.error){
        console.log( "Error:" + data.error)
      } 
      console.log(data)
      alert("the meal has been deleted successfully")
    })

  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-card-foreground mb-2">{item.name}</h3>
        <p className="text-2xl font-bold text-primary">${item.price}</p>
        <span className="inline-block bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm mt-2">
          {item.category}
        </span>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(item)}
          className="flex-1 bg-primary text-primary-foreground px-3 py-2 rounded text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="flex-1 bg-destructive text-destructive-foreground px-3 py-2 rounded text-sm font-medium hover:bg-destructive/90 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
