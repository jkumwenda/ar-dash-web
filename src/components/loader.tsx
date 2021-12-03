import spinner from "../assets/Spinner-primary.gif";

export default function () {
  return (
    <div className="w-full h-full flex items-center justify-center my-20">
      <img src={spinner} className="w-14 h-14 left-1/2 top-1/2" />
    </div>
  );
}
