import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumbs = ({ crumbs }) => {
  return (
    <nav className="mx-3 lg:max-w-6xl lg:mx-auto">
      <ul className="flex items-center gap-1 text-sm not-ul my-3">
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center capitalize">
            {index > 0 && <span>/</span>} {/* Separator between crumbs */}
            <Link href={crumb.permalink} className=" px-1">
              {crumb.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
