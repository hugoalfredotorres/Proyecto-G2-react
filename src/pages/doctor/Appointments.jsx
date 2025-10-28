import { Calendar, Clock, Mail, MapPin, Phone, User } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
const Appointments = () => {
  // Dummy appointment data
  const [appointments] = useState([
    {
      id: 1,
      doctorName: "Dr. Sarah Ahmed",
      specialty: "Cardiologist",
      date: "2024-10-15",
      time: "10:00 AM",
      status: "confirmed",
      patientName: "John Doe",
      phone: "+92-300-1234567",
      email: "john.doe@example.com",
      location: "City Hospital, Karachi",
      fees: 2000,
      paymentMethod: "online",
      symptoms: "Chest pain and irregular heartbeat",
      doctorImage:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      doctorName: "Dr. Ahmad Khan",
      specialty: "Neurologist",
      date: "2024-10-18",
      time: "02:30 PM",
      status: "pending",
      patientName: "Jane Smith",
      phone: "+92-321-9876543",
      email: "jane.smith@example.com",
      location: "Medical Center, Lahore",
      fees: 1800,
      paymentMethod: "clinic",
      symptoms: "Severe headaches and dizziness",
      doctorImage:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      doctorName: "Dr. Fatima Ali",
      specialty: "Dermatologist",
      date: "2024-10-20",
      time: "11:15 AM",
      status: "cancelled",
      patientName: "Mike Johnson",
      phone: "+92-333-5555444",
      email: "mike.johnson@example.com",
      location: "Skin Care Clinic, Islamabad",
      fees: 1500,
      paymentMethod: "clinic",
      symptoms: "Skin rash and allergic reaction",
      doctorImage:
        "https://images.unsplash.com/photo-1594824475108-41e4550ae1d0?w=150&h=150&fit=crop&crop=face",
    },
  ]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleStatusChange = (newStatus, appointmentId) => {
    // Update status in state or send API request
    console.log("Status changed to:", newStatus);
    toast.success("Appointment status updated successfully!");
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-4">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All Appointments
          </h1>
          <p className="text-xl text-white/90">
            List of all appointments scheduled with patients.
          </p>
        </div>
      </div>

      {/* Appointments List */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="space-y-6">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={appointment.doctorImage}
                      alt={appointment.doctorName}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {appointment.doctorName}
                      </h3>
                      <p className="text-primary font-medium">
                        {appointment.specialty}
                      </p>
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-full border text-sm font-medium flex items-center gap-2">
                    <select
                      value={appointment.status}
                      onChange={(e) =>
                        handleStatusChange(e.target.value, appointment.id)
                      }
                      className="bg-transparent focus:outline-none "
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Content */}

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column - Appointment Details */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      Appointment Details
                    </h4>

                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-gray-800">
                          {formatDate(appointment.date)}
                        </p>
                        <p className="text-sm text-gray-600">
                          Appointment Date
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-gray-800">
                          {appointment.time}
                        </p>
                        <p className="text-sm text-gray-600">Time</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-gray-800">
                          {appointment.location}
                        </p>
                        <p className="text-sm text-gray-600">Location</p>
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">
                          {" "}
                          Consultation Fee:
                        </span>
                        <span className="text-xl font-bold text-primary">
                          $ {appointment.fees}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 mt-1">
                        Payment:
                        {appointment.paymentMethod === "clinic"
                          ? "Pay At Clinie"
                          : "Online"}
                      </p>
                    </div>
                  </div>
                  {/* Right Column - patient Details */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      Patient Information
                    </h4>

                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-gray-800">
                          {appointment.patientName}
                        </p>
                        <p className="text-sm text-gray-600">Patient Name</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <a
                          href={`tel:${appointment.phone}`}
                          className="font-medium text-primary hover:underline"
                        >
                          {appointment.phone}
                        </a>
                        <p className="text-sm text-gray-600">Phone Number</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <a
                          href={`mailto:${appointment.email}`}
                          className="font-medium text-primary hover:underline"
                        >
                          {appointment.email}
                        </a>
                        <p className="text-sm text-gray-600">Email Address</p>
                      </div>
                    </div>

                    {appointment.symptoms && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm font-medium text-gray-700 mb-1">
                          Symptoms/Reason:
                        </p>
                        <p className="text-sm text-gray-600">
                          {appointment.symptoms}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Appointments;
