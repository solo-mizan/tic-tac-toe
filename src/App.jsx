export function Square() {
  return (
    <button className="bg-white border border-gray-300 h-12 w-12 m-1 leading-9 text-lg">
      X
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div>
        <button className="bg-white border border-gray-300 h-12 w-12 m-1 leading-9 text-lg">
          X
        </button>
        <button className="bg-white border border-gray-300 h-12 w-12 m-1 leading-9 text-lg">
          X
        </button>
        <button className="bg-white border border-gray-300 h-12 w-12 m-1 leading-9 text-lg">
          X
        </button>
      </div>
      <div>
        <button className="bg-white border border-gray-300 h-12 w-12 m-1 leading-9 text-lg">
          X
        </button>
        <button className="bg-white border border-gray-300 h-12 w-12 m-1 leading-9 text-lg">
          X
        </button>
        <button className="bg-white border border-gray-300 h-12 w-12 m-1 leading-9 text-lg">
          X
        </button>
      </div>
      <div>
        <button className="bg-white border border-gray-300 h-12 w-12 m-1 leading-9 text-lg">
          X
        </button>
        <button className="bg-white border border-gray-300 h-12 w-12 m-1 leading-9 text-lg">
          X
        </button>
        <button className="bg-white border border-gray-300 h-12 w-12 m-1 leading-9 text-lg">
          X
        </button>
      </div>
    </>
  );
}

/*
Game 
  --> Board
    --> Square
  --> History
*/
