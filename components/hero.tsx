import Image from "next/image";
export const Hero = () => (
  <section className="radialGradient flex flex-col items-center justify-start px-8 pb-14 pt-32 sm:text-start">
    <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-start">
      {" "}
      <Image
        className="radial-gradient size-50 sm:size-60"
        src="/Me.png"
        height={150}
        width={150}
        alt="me-mockup"
      />
      <div>
        {" "}
        <div className="space-y-3">
          {" "}
          <h1 className="text-md sm:text-lg">
            {" "}
            hey, I am <span className="font-semibold text-primary">
              risi
            </span>{" "}
          </h1>
          <h2 className="text-3xl">
            {" "}
            <span className="font-semibold text-primary">Full Stack </span>{" "}
            software developer{" "}
          </h2>{" "}
        </div>{" "}
        <p className="px-1 py-1 text-sm">
          {" "}
          I am a passionate web developer helping turn ideas into fully
          functional websites{" "}
        </p>{" "}
      </div>{" "}
    </div>{" "}
  </section>
);
// import Image from "next/image";
//
// export const Hero = () => (
//   <section className="radialGradient flex flex-col items-center justify-start px-8 py-24 sm:text-start">
//     <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-start">
//       <Image
//         className="radial-gradient  size-50 sm:size-60"
//         src="/Me.png"
//         height={150}
//         width={150}
//         alt="me-mockup"
//       />
//
//       <div>
//         <div className="space-y-3">
//           <h1 className="text-md sm:text-lg">
//             hey, I am <span className="font-semibold text-primary">risi</span>
//           </h1>
//           <h2 className="text-3xl">
//             <span className="font-semibold text-primary">Full Stack </span>
//             software developer
//           </h2>
//         </div>
//         <p className="text-sm px-1 py-1">
//           I am a passionate web developer helping turn ideas into fully
//           functional websites
//         </p>
//       </div>
//     </div>
//   </section>
// );
