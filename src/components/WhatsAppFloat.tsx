const WHATSAPP_LINK = "https://wa.me/91XXXXXXXXXX";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-4 md:right-6 z-[60] h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-200 hover:scale-105 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.9 11.9 0 0 0 12.04 0C5.42 0 .04 5.38.04 12c0 2.12.56 4.19 1.63 6.02L0 24l6.14-1.61A11.92 11.92 0 0 0 12.04 24C18.66 24 24.04 18.62 24.04 12c0-3.21-1.25-6.24-3.52-8.52ZM12.04 21.8c-1.8 0-3.55-.48-5.09-1.38l-.37-.22-3.64.95.97-3.55-.24-.37a9.77 9.77 0 0 1-1.52-5.23c0-5.41 4.41-9.82 9.82-9.82 2.62 0 5.08 1.02 6.93 2.87a9.72 9.72 0 0 1 2.88 6.94c0 5.41-4.41 9.81-9.74 9.81Zm5.39-7.34c-.3-.15-1.76-.87-2.03-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.08-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
};

export default WhatsAppFloat;
