import { Outlet, useNavigation } from "react-router-dom";

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="relative">
      {isLoading && (
        <div className="fixed inset-0 bg-white/70 z-50 flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-[#632ee3]"></span>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default MainLayout;