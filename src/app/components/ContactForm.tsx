"use client";
export default function ContactForm() {

  async function handleSubmit(e:any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "9c7aa973-0b26-4620-8068-d4b0d570874a",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} 
        className="rounded-2xl border-2 border-prettyPink flex items-center gap-4 flex-col bg-prettyPurple font-sans mt-7">
        <h2 className="text-white text-xl my-4">Vamos conversar</h2>
        <div className="flex gap-2 items-center w-1/2 ">
          <input type="text" name="name" required placeholder="Your name"
            className="p-3 pl-12 rounded-xl mt-4 text-black bg-gray-200 placeholder:text-gray-400 w-full bg-user
            bg-no-repeat bg-[center_left_1rem]"
          />
        </div>
        <div className="flex gap-2 items-center w-1/2">
          <input type="email" name="email" required placeholder="email@example.com" 
            className="p-3 pl-10 rounded-xl mt-4 text-black bg-gray-200 placeholder:text-gray-400 w-full
            bg-email bg-no-repeat bg-[center_left_1rem]"
          />
        </div>
        <textarea name="message" required rows={3} placeholder="Enter Message"
          className="p-3 rounded-xl mt-4 text-black bg-gray-200 placeholder:text-gray-400 w-1/2"
        />

        <button type="submit"
          className="w-full bg-[#311b46] p-4 mt-2 rounded-b-2xl border-prettyPink border-t-[1px]"
        >Enviar</button>
      </form>
    </>
  );
}