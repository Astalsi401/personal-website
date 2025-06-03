import { Outlet } from "react-router";
import { Header } from "@/components";
import { ScrollToTop } from "@/utils/scroll-to-top";
import { Loading } from "@ui/loading";

export const Root: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Loading>
        <Outlet />
      </Loading>
    </>
  );
};
