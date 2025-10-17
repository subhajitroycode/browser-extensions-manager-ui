import extensions from "../data/data.json";
import ExtensionBox from "./ExtensionBox";

const Extensions = () => {
  return (
    <section>
      <div className="grid grid-cols-3 grid-rows-4 gap-2.5 mb-10">
        {extensions.map((extension, index) => (
          <ExtensionBox key={index} extension={extension} />
        ))}
      </div>
    </section>
  );
};

export default Extensions;
