import { useState } from "react";
import ToggleButton from "./ToggleButton";

type Props = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

const ExtensionBox = ({ extension }: { extension: Props }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleToggle = (value: boolean) => {
    console.log(value);

    setIsActive(value);
  };

  return (
    <div className="bg-neutral-0 rounded-2xl p-4 shadow border border-neutral-100 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-0 relative">
      <div className="flex items-start gap-4 mb-20">
        <img className="w-12" src={extension.logo} alt={extension.name} />
        <div>
          <h3 className="font-bold mb-1.5 text-lg">{extension.name}</h3>
          <p className="font-light text-sm/snug dark:text-neutral-300">
            {extension.description}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 mb-4 flex justify-between items-center w-[calc(100%-32px)] ">
        <button className="border border-neutral-300 dark:border-neutral-600 rounded-full py-1.5 px-3 text-sm font-medium focus:outline-2 focus:outline-offset-2 focus:outline-red-400 focus:border-transparent hover:border-red-700 hover:bg-red-700 dark:hover:bg-red-400 hover:text-neutral-0 dark:hover:text-neutral-900 transition-colors cursor-pointer">
          Remove
        </button>
        <ToggleButton toggle={isActive} onToggle={handleToggle} />
      </div>
    </div>
  );
};

export default ExtensionBox;
