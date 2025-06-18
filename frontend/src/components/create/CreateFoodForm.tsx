
import { useState } from "react";
import { categories } from "../../data/mockData";
import axios from "axios";

interface CreateFoodFormProps {
  onCancel: () => void;
}

const CreateFoodForm = ({ onCancel }: CreateFoodFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: categories[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement create functionality

    const name = formData.name
    const price = formData.price
    const category = formData.category
    axios.post("http://localhost:4000/meal", {name, price, category})
    .then((res)=>{
     const data = res.data
     console.log(data.message)

    })
    alert("meal created successfully")
    onCancel()
    
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-card-foreground mb-6">Add New Food Item</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">
            Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">
            Price
          </label>
          <input
            type="number"
            step="0.01"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">
            Category
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Create Item
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-secondary text-secondary-foreground px-4 py-2 rounded-md font-medium hover:bg-secondary/80 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateFoodForm;
