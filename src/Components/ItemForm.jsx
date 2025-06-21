import { useState } from 'react';
import axios from 'axios';

const ItemForm = () => {
  const [form, setForm] = useState({
    name: '',
    type: '',
    description: ''
  });

  const [coverImage, setCoverImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', form.name);
    data.append('type', form.type);
    data.append('description', form.description);
    data.append('coverImage', coverImage);

    for (const file of additionalImages) {
      data.append('additionalImages', file);
    }

    try {
      await axios.post('/api/items', data);
      alert('Item added successfully');
    } catch (err) {
      console.error(err);
      alert('Error adding item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-xl mx-auto">
      <input
        className="w-full p-2 border"
        placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        className="w-full p-2 border"
        placeholder="Type"
        onChange={e => setForm({ ...form, type: e.target.value })}
        required
      />
      <textarea
        className="w-full p-2 border"
        placeholder="Description"
        onChange={e => setForm({ ...form, description: e.target.value })}
        required
      />
      <input
        type="file"
        onChange={e => setCoverImage(e.target.files[0])}
        required
        name="coverImage"
      />
      <input
        type="file"
        multiple
        onChange={e => setAdditionalImages([...e.target.files])}
        name="additionalImages"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default ItemForm;
