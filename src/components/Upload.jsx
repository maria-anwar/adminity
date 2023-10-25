import React from "react";

const Upload = () => {
  return (
    <>
     
     <div>
        {/* <header class="bg-green-600 p-20">
            <h1 class="text-white text-4xl text-center">Header</h1>
            <h2 class="text-white text-xl text-center">Scroll down to see the effect</h2>
        </header> */}
        <nav class="sticky top-0 bg-blue-600 p-5 drop-shadow shadow-blue-600">
            <h1 class="text-white text-4xl text-center">Sticky Nav Bar</h1>
        </nav>
        <div class="h-screen">
            <h1 class="text-4xl text-center p-20">Content</h1>
        </div>
        <footer class="h-96 p-20 bg-red-600">
            <h1 class="text-white text-4xl text-center p-20">Footer</h1>
        </footer>
    </div>
    </>
  );
};

export default Upload;
