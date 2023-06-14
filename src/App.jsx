import { RouterProvider } from "react-router-dom";
import { router } from "./routers/Router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="max-w-[1350px] mx-auto">
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </div>
    </>
  );
}

export default App;
