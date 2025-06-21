import React, { useState } from 'react'
import ItemList from '../../Components/ItemList'
import ItemModal from '../../Components/ItemModal';

const ViewItem = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Items</h1>
      <ItemList onSelect={setSelectedItem} />
      {selectedItem && <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  )
}

export default ViewItem
