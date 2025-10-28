import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Edit2,
  Save,
  X,
  MapPin,
  GraduationCap,
  Star,
  Briefcase,
  DollarSign,
} from "lucide-react";
import toast from "react-hot-toast";

const MyProfile = () => {
  const [doctorData, setDoctorData] = useState({
    name: "Dr. Richmond Herrick",
    specialty: "Neurosurgeon",
    rating: 5,
    education: "MBBS, MS (Neurosurgery)",
    experience: "12 years",
    fees: 1500,
    location: "City Hospital, Karachi",
    phone: "+92-300-1234567",
    email: "richmond.herrick@example.com",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState({ ...doctorData });

  const handleInputChange = (e) => {
    setTempData({ ...tempData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
    setTempData({ ...doctorData });
  };

  const handleSave = () => {
    setDoctorData({ ...tempData });
    setIsEditing(false);
    console.log("Doctor profile updated:", tempData);
    toast.success("Doctor profile updated successfully!");
  };

  const handleCancel = () => {
    setTempData({ ...doctorData });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-4">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Doctor Profile
          </h1>
          <p className="text-xl text-white/90">
            Manage your professional information and account settings
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto p-4 -mt-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {doctorData.name}
                  </h2>
                  <p className="text-gray-600">{doctorData.specialty}</p>
                </div>
              </div>
              {!isEditing && (
                <button
                  onClick={handleEdit}
                  className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Profile Form */}
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Professional Information
            </h3>

            <div className="space-y-6">
              {/* Name */}
              <InputField
                label="Full Name"
                name="name"
                icon={<User className="w-5 h-5 text-gray-400" />}
                value={isEditing ? tempData.name : doctorData.name}
                onChange={handleInputChange}
                isEditing={isEditing}
              />

              {/* Specialty */}
              <InputField
                label="Specialty"
                name="specialty"
                icon={<Star className="w-5 h-5 text-gray-400" />}
                value={isEditing ? tempData.specialty : doctorData.specialty}
                onChange={handleInputChange}
                isEditing={isEditing}
              />

              {/* Education */}
              <InputField
                label="Education"
                name="education"
                icon={<GraduationCap className="w-5 h-5 text-gray-400" />}
                value={isEditing ? tempData.education : doctorData.education}
                onChange={handleInputChange}
                isEditing={isEditing}
              />

              {/* Experience */}
              <InputField
                label="Experience"
                name="experience"
                icon={<Briefcase className="w-5 h-5 text-gray-400" />}
                value={isEditing ? tempData.experience : doctorData.experience}
                onChange={handleInputChange}
                isEditing={isEditing}
              />

              {/* Fees */}
              <InputField
                label="Consultation Fees"
                name="fees"
                type="number"
                icon={<DollarSign className="w-5 h-5 text-gray-400" />}
                value={isEditing ? tempData.fees : doctorData.fees}
                onChange={handleInputChange}
                isEditing={isEditing}
              />

              {/* Location */}
              <InputField
                label="Location"
                name="location"
                icon={<MapPin className="w-5 h-5 text-gray-400" />}
                value={isEditing ? tempData.location : doctorData.location}
                onChange={handleInputChange}
                isEditing={isEditing}
              />

              {/* Phone */}
              <InputField
                label="Phone Number"
                name="phone"
                icon={<Phone className="w-5 h-5 text-gray-400" />}
                value={isEditing ? tempData.phone : doctorData.phone}
                onChange={handleInputChange}
                isEditing={isEditing}
              />

              {/* Email */}
              <InputField
                label="Email Address"
                name="email"
                type="email"
                icon={<Mail className="w-5 h-5 text-gray-400" />}
                value={isEditing ? tempData.email : doctorData.email}
                onChange={handleInputChange}
                isEditing={isEditing}
              />

              {/* Action Buttons */}
              {isEditing && (
                <div className="flex gap-4 pt-6">
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Save className="w-5 h-5" />
                    Save Changes
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
    </div>
  );
};

// 🔹 Reusable InputField component
const InputField = ({
  label,
  name,
  type = "text",
  icon,
  value,
  onChange,
  isEditing,
}) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-2"
    >
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        {icon}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={!isEditing}
        className={`w-full pl-10 pr-4 py-3 border rounded-lg transition-colors ${
          isEditing
            ? "border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            : "border-gray-200 bg-gray-50 text-gray-600"
        }`}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  </div>
);

export default MyProfile;
