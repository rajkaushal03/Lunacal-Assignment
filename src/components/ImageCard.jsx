
// eslint-disable-next-line react/prop-types
const ImageCard = ({ src, alt }) => {
  return (
    <div className="image  h-full flex-shrink-0 px-2">
      <img
        src={src}
        alt={alt}
        className="rounded-box h-full w-full object-cover"
      />
    </div>
  );
};

export default ImageCard;
