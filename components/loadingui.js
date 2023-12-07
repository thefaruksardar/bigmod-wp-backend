import Image from "next/image";
import pikachu from "@/public/pikachu-running.gif";
const Loadingui = () => {
  return (
    <div className={`flex justify-center items-center h-screen w-screen`}>
      <Image
        priority
        src={pikachu}
        height={100}
        width={100}
        alt="Loadingui"
        title="Loadingui"
        // className="h-40 w-40 aspect-auto"
      />
    </div>
  );
};
export default Loadingui;
