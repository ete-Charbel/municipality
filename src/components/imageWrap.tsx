import Image from "next/image";

export default function ImageWrap(props: any) {
  return (
    <div className="overflow-hidden">
      <div className="zoom container2">
        <Image src={props.src} alt="placeholder" width="500" height="500" />
      </div>
    </div>
  );
}
