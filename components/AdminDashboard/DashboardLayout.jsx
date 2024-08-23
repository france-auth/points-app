import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
