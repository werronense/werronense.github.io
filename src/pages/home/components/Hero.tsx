import portrait from "../../../assets/stephen-werronen.jpg";

export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center py-12 bg-peach">
        <h1 className="text-5xl">Stephen Werronen</h1>
      </div>
      <div className="bg-linear-to-b from-peach from-50% to-night to-50%">
        <img
          src={portrait}
          alt="Stephen Werronen"
          className="rounded-full max-w-48 mx-auto"
        />
      </div>
    </>
  );
}
