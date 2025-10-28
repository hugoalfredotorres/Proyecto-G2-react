import { Grid2X2 } from "lucide-react";

const Dashboard = () => {
  const Data = [
    {
      title: "Total Appointments",
      value: 10,
      icon: Grid2X2,
    },
  ];
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-600">Welcome back!</p>
      </div>

      {/* Simple Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {Data.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              <div className="flex items-center space-x-3">
                <Icon size={24} className="text-gray-500" />
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <p className="text-sm text-gray-600">{item.title}</p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.value}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Dashboard;
