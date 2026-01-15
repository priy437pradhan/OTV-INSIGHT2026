const API_BASE_URL = "http://127.0.0.1:5001/api/category";

export const categoryService = {
  async getAll() {
    const res = await fetch(API_BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch categories");
    return res.json();
  },

  async create(payload) {
    const res = await fetch(API_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Failed to create category");
    return res.json();
  },

  async update(id, payload) {
    const res = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Failed to update category");
    return res.json();
  },

  async remove(id) {
    const res = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete category");
    return res.json();
  },
};
