import { Link, useSearchParams } from "react-router";

const Navbar = () => {
  const [searchParams] = useSearchParams();
  let activeData: string | null = searchParams.get("extensions");

  return (
    <nav className="flex gap-2 text-xs">
      <Link
        to="/"
        className={`px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-600 transition-colors focus:outline-2 focus:outline-offset-1 focus:outline-red-400 ${
          activeData === null
            ? "bg-red-500 dark:bg-red-400 text-neutral-0 dark:text-neutral-950 hover:bg-red-400 dark:hover:bg-red-500"
            : "bg-neutral-0 dark:bg-neutral-700 text-neutral-950 dark:text-neutral-0 hover:text-neutral-500 dark:hover:text-neutral-0 dark:hover:bg-neutral-600"
        }`}
      >
        All
      </Link>
      <Link
        to="/?extensions=active"
        className={`px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-600 transition-colors focus:outline-2 focus:outline-offset-1 focus:outline-red-400 ${
          activeData === "active"
            ? "bg-red-500 dark:bg-red-400 text-neutral-0 dark:text-neutral-950 hover:bg-red-400 dark:hover:bg-red-500"
            : "bg-neutral-0 dark:bg-neutral-700 text-neutral-950 dark:text-neutral-0 hover:text-neutral-500 dark:hover:text-neutral-0 dark:hover:bg-neutral-600"
        }`}
      >
        Active
      </Link>
      <Link
        to="/?extensions=inactive"
        className={`px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-600 transition-colors focus:outline-2 focus:outline-offset-1 focus:outline-red-400 ${
          activeData === "inactive"
            ? "bg-red-500 dark:bg-red-400 text-neutral-0 dark:text-neutral-950 hover:bg-red-400 dark:hover:bg-red-500"
            : "bg-neutral-0 dark:bg-neutral-700 text-neutral-950 dark:text-neutral-0 hover:text-neutral-500 dark:hover:text-neutral-0 dark:hover:bg-neutral-600"
        }`}
      >
        Inactive
      </Link>
    </nav>
  );
};

export default Navbar;
