import React from "react";
import emailjs from "emailjs-com";
export default function Form() {
  const initialValue = {
    name: "",
    email: "",
    message: "",
  };

  const handleInputName = (e) => {
    initialValue.name = e.target.value;
  };
  const handleInputEmail = (e) => {
    initialValue.email = e.target.value;
  };
  const handleInputMessage = (e) => {
    initialValue.message = e.target.value;
  };
  function sendEmail(e) {
    e.preventDefault();
    const { name, email, message } = initialValue;

    if (name && email && message !== "") {
      emailjs
        .sendForm(
          "service_afdwl9h",
          "template_n07jphg",
          e.target,
          "wc8YZ3MYCA_Bn-oty"
        )
        .then(
          (result) => {
            alert("Thank you for reaching out to me");
          },
          (error) => {
            alert(error.text);
          }
        );
      e.target.reset();
    } else alert("Please fill out all the fields in the form");
  }
  return (
    <div>
      <section className="text-cyan-100 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-4xl font-medium title-font text-white mb-4">
              Contact Me
            </h1>
            <p className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl">
              Feel Free to share your thoughts.
            </p>
          </div>
          <form onSubmit={sendEmail}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleInputName}
                      required
                      placeholder="John Doe"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      onChange={handleInputEmail}
                      id="email"
                      required
                      name="email"
                      placeholder="Johndoe@gmail.com"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Hey Divyansh! Let's Connect......"
                      onChange={handleInputMessage}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-mycolor-100 border-0 py-2 px-8 focus:outline-none hover:bg-mycolor-200 rounded text-lg font-semibold"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
