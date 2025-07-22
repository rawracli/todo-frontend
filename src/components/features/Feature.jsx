export default function Feature({heading, description}) {
  return (
    <>
      <h3 className="text-[1.7rem] md:text-[2.25rem] lg:text-[2.5rem] tracking-tight leading-tight font-bold pb-0.5">
        {heading}
      </h3>
      <p className="text-[1.2rem] md:text-[1.75rem] lg:text-[2rem] text-gray-500 leading-tight">
        {description}
      </p>
    </>
  );
}
