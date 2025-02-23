import Image from "next/image";

export const Hero = () => {
  return (
    <section className="radialGradient flex flex-col items-center justify-start px-8 pb-12 pt-32 sm:text-start">
      <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-start">
        <Image
          className="radial-gradient size-50 sm:size-60"
          src="/Me.png"
          height={150}
          width={150}
          alt="me-mockup"
        />
        <div>
          <div className="space-y-3">
            <h1 className="text-md sm:text-lg">
              hey i am <span className="font-semibold">risi</span>
            </h1>
            <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-600 bg-clip-text text-3xl text-transparent">
              <span className="bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text font-semibold text-transparent">
                Full Stack{" "}
              </span>
              developer
            </h1>
            <button className="rounded-xl bg-white px-4 py-2 text-sm font-thin text-black">
              Connect with me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
