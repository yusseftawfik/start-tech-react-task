import { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Suspense } from "react";

const PublicLayout: FC = () => (
  <div className="flex h-full flex-col">
    <Navbar />
    <main className="h-full w-full flex-1">
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </div>
);

export default PublicLayout;
