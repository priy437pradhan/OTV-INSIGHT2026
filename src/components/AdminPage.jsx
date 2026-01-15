import React, { useEffect, useState, useCallback } from "react";
import { categoryService } from "../services/categoryService";

function AdminPage() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  const loadCategories = useCallback(async () => {
    const data = await categoryService.getAll();
    setCategories(data);
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const handleCreate = async () => {
    if (!name.trim()) return;

    await categoryService.create({
      category_name: name,
      summary: "",
      description: "",
      category_image: "",
    });

    setName("");
    loadCategories();
  };

  const handleDelete = async (id) => {
    await categoryService.remove(id);
    loadCategories();
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Admin – Categories</h1>

      <div className="flex gap-3 mb-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category name"
          className="bg-black/40 border border-white/20 px-4 py-2 rounded"
        />
        <button
          onClick={handleCreate}
          className="bg-gradient-to-r from-orange-500 to-pink-600 px-6 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="space-y-3">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex justify-between items-center bg-white/5 p-4 rounded"
          >
            <span>{cat.category_name}</span>
            <button
              onClick={() => handleDelete(cat.id)}
              className="text-red-400 hover:text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
