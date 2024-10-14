import GuestLayout from "../Layout/GuestLayout";

const Welcome = () => {
  return (
    <GuestLayout>
      <header className="text-center w-full text-3xl tracking-widest py-8">
        <h1 className="text-link font-poppins">
          <span className="font-bold">FINE</span>bank.
          <span className="font-bold">IO</span>
        </h1>
      </header>
    </GuestLayout>
  );
};

export default Welcome;
