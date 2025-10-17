interface ToggleButtonProps {
  toggle: boolean;
  onToggle: (value: boolean) => void;
}

const ToggleButton = ({ toggle, onToggle }: ToggleButtonProps) => {
  return (
    <button
      onClick={() => onToggle(!toggle)}
      className={`
        relative inline-flex h-[18px] w-[34px] items-center rounded-full
        transition-colors duration-200 ease-in-out cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-red-700 dark:focus:outline-red-400
        ${
          toggle
            ? "bg-red-700 hover:bg-red-500 dark:bg-red-400"
            : "bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400"
        }
      `}
      role="switch"
      aria-checked={toggle}
    >
      <span
        className={`
          inline-block h-[15px] w-[15px] transform rounded-full bg-white
          transition-transform duration-200 ease-in-out shadow-sm
          ${toggle ? "translate-x-[18px]" : "translate-x-0.5"}
        `}
      />
    </button>
  );
};

export default ToggleButton;
