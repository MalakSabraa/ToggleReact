import React from 'react';
import useToggle from '../hooks/useToggle';

type Props = {
  text: string;
  header: string;
  image: string;
};

const Card: React.FC<Props> = ({ text, header, image }) => {
  const [isVisible, toggle] = useToggle();

  return (
    <div className="border p-4 sm:p-6 rounded-xl shadow-md text-center bg-white max-w-sm mx-auto transition hover:shadow-lg">
      {/* Logo and Header */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <img src={image} alt={header} className="logo-img mx-auto shrink-0" />
        <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
          {header}
        </h4>
      </div>

      {/* Toggle Text */}
      {isVisible && (
        <p className="text-gray-700 text-left text-sm sm:text-base leading-relaxed mb-4 px-1">
          {text}
        </p>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggle}
        className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm sm:text-base rounded hover:bg-blue-700 transition"
      >
        {isVisible ? 'Hide Info' : 'Show Info'}
      </button>
    </div>
  );
};

export default Card;