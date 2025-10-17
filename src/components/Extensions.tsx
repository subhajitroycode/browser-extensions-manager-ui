import { useState } from "react";
import extensionData from "../data/data.json";
import ExtensionBox from "./ExtensionBox";
import { useSearchParams } from "react-router";

type Extension = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

const Extensions = () => {
  const [searchParams] = useSearchParams();
  const [extensions, setExtensions] = useState<Extension[]>(extensionData);

  let activeState: string | null = searchParams.get("extensions");
  let filteredExtensions: Extension[] = extensions;

  if (activeState === "active") {
    filteredExtensions = extensions.filter((ext) => ext.isActive);
  } else if (activeState === "inactive") {
    filteredExtensions = extensions.filter((ext) => !ext.isActive);
  }

  const handleToggle = (index: number, value: boolean) => {
    setExtensions((prev) =>
      prev.map((ext, i) => (i === index ? { ...ext, isActive: value } : ext))
    );
  };

  const handleRemove = (index: number) => {
    setExtensions((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section>
      <div className="grid grid-cols-3 grid-rows-4 gap-2.5 mb-10">
        {filteredExtensions.map((extension, index) => {
          const originalIndex = extensions.findIndex(
            (ext) => ext.name === extension.name
          );

          return (
            <ExtensionBox
              key={index}
              extension={extension}
              onToggle={(value) => handleToggle(originalIndex, value)}
              onRemove={() => handleRemove(originalIndex)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Extensions;
