import Carousel from "./Carousel";

export default function ItemModal({ item, onClose }) {
  const allImages = [`/${item.coverImage}`, ...item.additionalImages.map(img=>`/${img}`)];
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded p-6 max-w-lg w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold text-red-500">×</button>
        <h2 className="text-xl font-bold">{item.name}</h2>
        <p className="italic text-sm">{item.type}</p>
        <p className="mb-4">{item.description}</p>
        <Carousel images={allImages}/>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded" onClick={() => alert('📧 Enquiry sent')}>Enquire</button>
      </div>
    </div>
  );
}
