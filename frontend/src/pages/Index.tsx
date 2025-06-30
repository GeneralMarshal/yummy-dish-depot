
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FoodList from "../components/read/FoodList";
import CreateFoodForm from "../components/create/CreateFoodForm";
import EditFoodForm from "../components/update/EditFoodForm";
import { foodItems, categories } from "../data/mockData";
import { FoodItem } from "../types/FoodItem";

import axios from "axios"
import { useAuth } from "@/hooks/useAuth";


const Index = () => {
  const { dispatch } = useAuth()
  const navigate = useNavigate()

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isCreating, setIsCreating] = useState(false);
  const [editingItem, setEditingItem] = useState<FoodItem | null>(null);
  const [allItems, setAllItems] = useState<FoodItem | null>(null)
  const [filteredItems, setFilteredItems] = useState<FoodItem[] | []>([])

  // so i have to edit the filteredItems  to get data from the back end

  // const filteredItems = selectedCategory === "all" 
  //   ? foodItems 
  //   : foodItems.filter(item => item.category === selectedCategory);

  useEffect(()=>{
    async function fetchData(){
      try{
        const user = JSON.parse(localStorage.getItem("user") || "{}");
       const res = await axios.get("http://localhost:4000/meal", {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
       })

        const data = res.data
        selectedCategory === "all" 
         ? setFilteredItems(data)
         : setFilteredItems(data.filter((item) => item.category === selectedCategory));
        }
      catch(error){
        console.log("Error occured:" + error)
      }
    }
    fetchData()
  }, [selectedCategory, filteredItems])

  async function logoutHandler(){
    localStorage.removeItem("user")
    dispatch({ type: "LOGOUT"})
    navigate("/user/login")
  }


  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex justify-between">
            <div className=" ">
              <h1 className="text-3xl font-bold text-foreground mb-2">Food Items Management</h1>
              <p className="text-muted-foreground">Manage your restaurant menu items</p>
            </div>
            <span onClick={()=>logoutHandler()}>
              LogOut
            </span>
          </div>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                All Items
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category)
                  }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setIsCreating(true)}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Add New Item
            </button>
          </div>

          {/* Main Content */}
          {isCreating ? (
            <CreateFoodForm onCancel={() => setIsCreating(false)} />
          ) : editingItem ? (
            <EditFoodForm 
              item={editingItem} 
              onCancel={() => setEditingItem(null)} 
            />
          ) : ( 
            <FoodList 
              items={filteredItems} 
              onEdit={setEditingItem}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
