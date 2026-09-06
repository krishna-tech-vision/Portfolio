import { useState } from "react";
import validation from "./validateForm";

export default function ContactForm() {
  // Contact form
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: { id: "a", name: "fullApplication" },
    budgetRange: { id: 1, name: "<$50" },
    message: "",
  });

  // Project type
  const projectOption = [
    { id: "a", type: "Full Application" },
    { id: "b", type: "API Only" },
    { id: "c", type: "Consulting" },
  ];

  // Budget range
  const budgetOption = [
    { id: 1, value: "<$50" },
    { id: 3, value: "$50-$100" },
    { id: 2, value: "$100-$150" },
    { id: 4, value: "$200+" },
  ];

  // Commucate to server
  const [server, setServer] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validate = validation(form);

    if (validate.isValid) {
      const client = {
        name: form.name,
        email: form.email,
        message: form.message,
        projectType: form.projectType.name,
        budgetRange: form.budgetRange.name,
      };

      setForm((prev) => ({ ...prev, name: "", email: "", message: "" }));
      setError(null);

      submitForm(client);
      return;
    }

    setError(validate.error);
  };

  const submitForm = async (client) => {
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(client),
      });

      const data = await response.json();

      setServer(data);
    } catch (error) {
      console.error("Error caught:", error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[95%] p-5 lg:p-10 tb:mt-10 bg-gray-900 border-1 border-gray-700 shadow-[0px_0px_10px] shadow-gray-800 rounded-lg"
      >
        <div className="flex lp:flex-col gap-5">
          <label className="text-gray-200 flex flex-col gap-2">
            Name{" "}
            <input
              className="p-3 bg-indigo-50 rounded-md outline-0 border-2 focus:border-blue-500 text-gray-900"
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            {/* Error message for name */}
            {error && (
              <p style={{ fontSize: "12px", color: "#e4242a" }}>
                {error.name || ""}
              </p>
            )}
          </label>
          <label className="text-gray-200 flex flex-col gap-2">
            Email{" "}
            <input
              className="p-3 bg-indigo-50 rounded-md outline-0 border-2 focus:border-blue-500 text-gray-900"
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            {/* Error message for Email */}
            {error && (
              <p style={{ fontSize: "12px", color: "#e4242a" }}>
                {error.email || ""}
              </p>
            )}
          </label>
        </div>

        {/* Project Type */}
        <div className="mt-5">
          <h2 className="text-gray-300">Project Type</h2>
          <div className="flex flex-wrap gap-3 mt-2">
            {projectOption.map((project, index) => (
              <div
                key={index}
                className={`project-type px-4 py-2 rounded-4xl border-1 border-gray-700 text-gray-300 ${form.projectType.id === project.id ? "bg-indigo-100 text-gray-800" : ""} cursor-pointer`}
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    projectType: { id: project.id, name: project.type },
                  }))
                }
              >
                {project.type}
              </div>
            ))}
          </div>
        </div>

        {/* Budget Range */}
        <div className="mt-5">
          <h2 className="text-gray-300">Budget Range</h2>
          <div className="flex flex-wrap gap-3 mt-3">
            {budgetOption.map((budget, index) => (
              <div
                key={index}
                className={`project-type w-30 text-center py-1 rounded-md border-1 border-gray-700 text-gray-300 ${form.budgetRange.id === budget.id ? "bg-indigo-100 text-gray-800" : ""} cursor-pointer`}
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    budgetRange: { id: budget.id, name: budget.value },
                  }))
                }
              >
                {budget.value}
              </div>
            ))}
          </div>
        </div>

        {/* Message */}
        <textarea
          className="bg-indigo-50 mt-8 w-full max-h-30 p-3 rounded-xl outline-0"
          type="text"
          value={form.message}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, message: e.target.value }))
          }
        />

        {/* Error message for message */}
        {error && (
          <p style={{ fontSize: "12px", color: "#e4242a" }}>
            {error.message || ""}
          </p>
        )}

        {/* Server error */}
        {server && (
          <p
            style={{
              fontSize: "12px",
              color: server.sucess ? "#00cc18" : "#e4242a",
              textAlign: "center",
            }}
          >
            {server.error || server.message}
          </p>
        )}

        <button
          type="submit"
          className="hover-button bg-indigo-100 w-full py-3 mt-5 rounded-md cursor-pointer"
        >
          Send Message{" "}
        </button>
      </form>
    </>
  );
}
