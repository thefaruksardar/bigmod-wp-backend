import Loadingui from "@/components/loadingui";
import { Suspense } from "react";

const Loading = () => {
  return;
  <Suspense fallback={<Loadingui />}>
    <Loadingui />
  </Suspense>;
};
export default Loading;
