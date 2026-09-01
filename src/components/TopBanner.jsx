const TopBanner = () => {
  return (
    <div className="w-full bg-gray-100 flex items-center justify-center overflow-hidden h-[150px]">
      <div className="text-center p-4">
        <p className="text-gray-500 font-medium text-lg">
          [Banner Image Placeholder]
        </p>
        <p className="text-gray-400 text-xs mt-1">
          Recommended aspect ratio for this height is very wide, e.g., 1920x150 pixels.
        </p>
      </div>
      {/* 
        To replace this with a real image later, you can use:
        <img src="/path-to-your-banner.jpg" alt="Offer Banner" className="w-full h-full object-cover" />
      */}
    </div>
  );
};

export default TopBanner;
