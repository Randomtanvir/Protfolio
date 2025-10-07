const ActionButton = ({ icon: Icon, onClick, className, label }) => (
  <button
    onClick={onClick}
    aria-label={label}
    title={label}
    className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${className}`}
  >
    <Icon className="w-4 h-4" />
  </button>
);

export default ActionButton;
