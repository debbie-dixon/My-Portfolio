export default function Header({ text, id }) {
  return (
    <>
      <div className="flex flex-col items-center mt-3">
        <h1
          id={id}
          className="text-center py-2 font-serif font-bold text-3xl md:text-4xl "
        >
          {text}
        </h1>
        <div className="h-0.5 bg-gray-600 w-10 rounded-2xl"></div>
      </div>
    </>
  );
}
