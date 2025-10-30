import { Edit2, Mail, Phone, Save, User, X } from "lucide-react";
import { useState } from "react";
import { AppContext } from "../context/AppContext";
const Profile = () => {
  const { user } = useContext(AppContext); // falta usar los datos reales del usuario logueado traido por context
  const [profileData, setProfileData] = useState({
    name: "hugo",
    email: "hugo@example.com",
    phone: "+54-388-1234567",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState({ ...profileData });

  const handleInputChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
    setTempData({ ...profileData });
  };

  const handleSave = () => {
    setProfileData({ ...tempData });
    setIsEditing(false);
    console.log("Profile updated:", tempData);
    toast.success("Profile updated successfully!");
  };

  const handleCancel = () => {
    setTempData({ ...profileData });
    setIsEditing(false);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* principal */}

      <div className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-4">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mi perfil</h1>
          <p className="text-xl text-white/90">
            Administrar su información personal y la configuración de su cuenta.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 -mt-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-primary" />
                </div>

                <h2 className="text-2xl font-bold text-gray-800">
                  {profileData.name}
                </h2>
                <p className="text-gray-600">Informacion del Paciente</p>
              </div>
            </div>

            {!isEditing && (
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Edit2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            {" "}
            Informacion del Personal
          </h3>

          <div className="space-y-6">
            {/* nombre en el campo */}
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700 mb-2"
              ></label>
              <div className="relative">
                <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />

                <input
                  type="text"
                  name="name"
                  value={isEditing ? tempData.name : profileData.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="Enter your full name"
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg transition-colors ${
                    isEditing
                      ? "border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      : "border-gray-200 bg-gray-50 text-gray-600"
                  }`}
                />
              </div>
            </div>

            {/* Email  */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  name="email"
                  value={isEditing ? tempData.email : profileData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg transition-colors ${
                    isEditing
                      ? "border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      : "border-gray-200 bg-gray-50 text-gray-600"
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Nro de celular */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nro de Celular
              </label>
              <div className="relative">
                <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="tel"
                  name="phone"
                  value={isEditing ? tempData.phone : profileData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg transition-colors ${
                    isEditing
                      ? "border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      : "border-gray-200 bg-gray-50 text-gray-600"
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Accion Buttons */}

            {isEditing && (
              <div className="flex gap-4 pt-6">
                <button
                  onClick={handleSave}
                  className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" /> Grabar los Cambios
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <X className="w-5 h-5" />
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
