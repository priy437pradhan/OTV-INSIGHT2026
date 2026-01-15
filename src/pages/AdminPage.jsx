import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Shield,
  LogOut,
  Plus,
  Trash2,
  Save,
  X,
  CheckCircle,
} from "lucide-react";
import { authService } from "../service/authService";

// Dummy categories for testing
const DUMMY_CATEGORIES = [
  { id: 1, name: "Best Content Creator", description: "For outstanding content creation" },
  { id: 2, name: "Best Influencer", description: "Most influential personality" },
  { id: 3, name: "Best Vlogger", description: "Best video blogging content" },
  { id: 4, name: "Best Gaming Creator", description: "Top gaming content creator" },
  { id: 5, name: "Best Educational Creator", description: "Best educational content" },
];

const CatagoriesPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [categories, setCategories] = useState(DUMMY_CATEGORIES);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    // Check if user is admin
    if (!user || user.role_id !== "1") {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleToggleCategory = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleAddCategory = () => {
    if (!newCategory.name.trim()) {
      setMessage({ type: "error", text: "Category name is required" });
      return;
    }

    const newId = Math.max(...categories.map((c) => c.id)) + 1;
    setCategories([
      ...categories,
      {
        id: newId,
        name: newCategory.name,
        description: newCategory.description,
      },
    ]);
    setNewCategory({ name: "", description: "" });
    setShowAddModal(false);
    setMessage({ type: "success", text: "Category added successfully!" });

    setTimeout(() => setMessage({ type: "", text: "" }), 3000);
  };

  const handleDeleteCategory = (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCategories(categories.filter((c) => c.id !== categoryId));
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
      setMessage({ type: "success", text: "Category deleted successfully!" });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    }
  };

  const handleSaveCategories = async () => {
    if (selectedCategories.length === 0) {
      setMessage({ type: "error", text: "Please select at least one category" });
      return;
    }

    setLoading(true);
    try {
      await authService.addCategories(selectedCategories);
      setMessage({
        type: "success",
        text: `Successfully saved ${selectedCategories.length} categories!`,
      });
      setSelectedCategories([]);

      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message || "Failed to save categories",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Shield className="text-purple-600" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">INSIGHT 2026 - Category Management</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-600">{user.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success/Error Message */}
        {message.text && (
          <div
            className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
              message.type === "success"
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-800"
            }`}
          >
            {message.type === "success" ? (
              <CheckCircle size={20} />
            ) : (
              <X size={20} />
            )}
            <span>{message.text}</span>
          </div>
        )}

        {/* Action Bar */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Category Management
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {selectedCategories.length} categories selected
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Plus size={18} />
                Add Category
              </button>
              <button
                onClick={handleSaveCategories}
                disabled={selectedCategories.length === 0 || loading}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save size={18} />
                {loading ? "Saving..." : "Save Selected"}
              </button>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`bg-white rounded-lg shadow-sm border-2 transition-all cursor-pointer ${
                selectedCategories.includes(category.id)
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-200 hover:border-purple-300"
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3 flex-1">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => handleToggleCategory(category.id)}
                      className="mt-1 w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteCategory(category.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  ID: {category.id}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Add Category Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowAddModal(false)}
          />

          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Add New Category
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category Name *
                  </label>
                  <input
                    type="text"
                    value={newCategory.name}
                    onChange={(e) =>
                      setNewCategory({ ...newCategory, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
                    placeholder="e.g., Best Content Creator"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={newCategory.description}
                    onChange={(e) =>
                      setNewCategory({
                        ...newCategory,
                        description: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
                    placeholder="Brief description of the category"
                    rows={3}
                  />
                </div>

                <button
                  onClick={handleAddCategory}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Add Category
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatagoriesPage;