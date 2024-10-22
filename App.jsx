import React from "react";
class Button extends  React.Component{
  //kelas komponents
  render() {
    return(
      <button
      className="h-10 px-6 font-semibold rounded-md bg-white text-white"
      type="submit"
      >
        beli sekarang
      </button>
    );
  }
}
//

function ButtonBlack(){
  return (
    <button
    className="h-10 px-6 font-semibold rounded-md bg-green-400 text-white"
    type="submit"
    >
      Pocong Ngesot
    </button>
  );
}

function ButtonRed(){
  return (
    <button
    className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white"
    type="submit"
    >
      pocong kidal
    </button>
  );
}

function App() {
  return (
    <div className="flex justify-center bg-blue-700 min-h-screen items-center">
      <div>
        <Button></Button>
        <Button></Button>
        <ButtonRed></ButtonRed>
        <ButtonBlack></ButtonBlack>
        </div>
    </div>
  )
}
export default App
