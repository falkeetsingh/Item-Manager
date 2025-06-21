import { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({onSelect}) => {
  const[item,setItem ] = useState ([]);

  useEffect(()=>{
    axios.get('/api/items')
    .then(res=> setItem(res.data))
    .catch(err => console.log(err));
  },[]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {item.map(item => (
        <div key={item._id} className="border p-2 cursor-pointer" onClick={() => onSelect(item)}>
          <img src={`/${item.coverImage}`} alt={item.name} className="h-32 w-full object-cover rounded" />
          <p className="mt-2 font-semibold text-center">{item.name}</p>
        </div>
      ))}
    </div>
  )
};

export default ItemList
