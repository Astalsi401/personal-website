import { Link } from "react-router-dom";
import { Tags } from "@/components";
import { clsx } from "@functions";

export const Project: React.FC<{ page: string; path: string; href: string; myPage: boolean; thumbnail?: string; tags?: string[] }> = ({ page, path, href, thumbnail, tags, myPage }) => (
  <div className="col-sm-6 col-md-4 col-lg-3 p-2" key={page}>
    <Link to={myPage ? `${import.meta.env.BASE_URL}${path}${href}` : href} target={myPage ? "_self" : "_blank"} className="d-block bg-white shadow-sm w-100 h-100 text-center text-decoration-none portfolio">
      <div className={clsx("portfolio-thumb w-100 ratio-16by9 position-relative overflow-hidden", thumbnail && thumbnail === logo(thumbnail) ? "page-view" : "page-logo")} style={{ backgroundImage: thumbnail && `url(${import.meta.env.BASE_URL}${logo(thumbnail)})` }}>
        {tags && <Tags className="position-absolute" tags={tags} />}
      </div>
      <div className="py-2">{page}</div>
    </Link>
  </div>
);

const logo: (logoPath: string) => string = (logoPath: string) => {
  switch (logoPath) {
    case "python":
      return "/assets/images/python-logo.svg";
    case "css":
      return "/assets/images/CSS3-logo.svg";
    case "js":
      return "/assets/images/js-logo.svg";
    default:
      return logoPath;
  }
};
