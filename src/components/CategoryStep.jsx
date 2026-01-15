import React, { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { categoryService } from "../service/categoryService";

const CategoryStep = ({
  selectedCategories,
  setSelectedCategories,
  onNext,
  onBack,
}) => {
  const [categories, setCategories] = useState([]);
  const [localError, setLocalError] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch admin-added categories
  useEffect(() => {
    categoryService
      .getAll()
      .then((data) => setCategories(data))
      .catch(() => setLocalError("Failed to load categories"))
      .finally(() => setLoading(false));
  }, []);

  const handleCategorySelect = (e) => {
    const categoryId = e.target.value;
    if (!categoryId) return;

    if (selectedCategories.length >= 3) {
      setLocalError("You can select a maximum of 3 categories");
      return;
    }

    if (!selectedCategories.includes(categoryId)) {
      setSelectedCategories([...selectedCategories, categoryId]);
      setLocalError("");
    }

    e.target.value = "";
  };

  const removeCategory = (id) => {
    setSelectedCategories(selectedCategories.filter((c) => c !== id));
    setLocalError("");
  };

  const handleNext = () => {
    if (selectedCategories.length === 0) {
      setLocalError("Please select at least one category");
      return;
    }
    onNext();
  };

  return (
    <>
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-white mb-2">
          Select Your Categories
        </h2>
        <p className="text-gray-300">
          Choose 1–3 categories that best describe your content
        </p>
      </div>

      {loading ? (
        <p className="text-center text-gray-400">Loading categories...</p>
      ) : (
        <div className="space-y-3">
          {/* Select */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Content Categories
            </label>

            <select
              onChange={handleCategorySelect}
              disabled={selectedCategories.length >= 3}
              className="w-full px-4 py-3 bg-black/40 text-white
                border border-white/20 rounded-lg
                focus:ring-2 focus:ring-orange-500 focus:border-transparent
                outline-none transition-all disabled:opacity-50"
            >
              <option value="">Choose a category...</option>
              {categories.map((cat) => (
                <option
                  key={cat.id}
                  value={String(cat.id)}
                  disabled={selectedCategories.includes(String(cat.id))}
                >
                  {cat.category_name}
                </option>
              ))}
            </select>

            {localError && (
              <p className="text-red-500 text-sm mt-1">{localError}</p>
            )}
          </div>

          {/* Selected Chips */}
          {selectedCategories.length > 0 && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Selected Categories ({selectedCategories.length}/3)
              </label>

              <div className="flex flex-wrap gap-2">
                {selectedCategories.map((id) => {
                  const label =
                    categories.find((c) => String(c.id) === id)
                      ?.category_name || id;

                  return (
                    <div
                      key={id}
                      className="flex items-center gap-2 px-4 py-2
                        bg-gradient-to-r from-orange-500 to-pink-600
                        text-white rounded-full text-sm font-medium shadow-md"
                    >
                      <span>{label}</span>
                      <button
                        onClick={() => removeCategory(id)}
                        className="hover:bg-white/20 rounded-full p-1 transition"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={onBack}
              className="flex-1 border border-white/30 text-white py-3 rounded-lg
                font-semibold hover:bg-white/10 transition-all"
            >
              Back
            </button>

            <button
              onClick={handleNext}
              className="flex-1 bg-gradient-to-r from-orange-500 to-pink-600
                text-white py-3 rounded-lg font-semibold
                hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Next
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryStep;
