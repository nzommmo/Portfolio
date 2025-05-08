import React from 'react'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "1f6ad7fe-a06a-4931-aee5-6178ec2b3b7a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully.");
      event.target.reset();
      // Clear the message after 5 seconds
      setTimeout(() => {
        setResult("");
      }, 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-slate-200 mb-6">
          Get In Touch
        </h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-slate-200 placeholder-slate-500 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-slate-200 placeholder-slate-500 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-slate-200 placeholder-slate-500 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-500"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-teal-500 px-6 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            Submit Form
          </button>
        </form>

        {result && (
          <p className="mt-4 text-sm text-teal-300">{result}</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
