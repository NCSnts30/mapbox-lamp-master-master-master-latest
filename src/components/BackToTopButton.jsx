import { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY >= 450) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Add event listener to window object when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const buttonStyles = `
    fixed
    bottom-8
    right-8
    rounded-full
    bg-teal-400
    text-black
    px-4
    py-2
    transition-opacity
    duration-300
    ${showButton ? 'opacity-100' : 'opacity-0'}
  `;

  return (
    <button className={buttonStyles} onClick={handleClick}>
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14l-7-7-7 7" />
      </svg>
    </button>
  );
};

export default BackToTopButton;
