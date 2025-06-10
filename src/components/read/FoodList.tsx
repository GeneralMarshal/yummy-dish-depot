
import { FoodItem } from "../../types/FoodItem";
import FoodCard from "./FoodCard";

interface FoodListProps {
  items: FoodItem[];
  onEdit: (item: FoodItem) => void;
}

const FoodList = ({ items, onEdit }: FoodListProps) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No food items found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <FoodCard 
          key={item.id} 
          item={item} 
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default FoodList;
