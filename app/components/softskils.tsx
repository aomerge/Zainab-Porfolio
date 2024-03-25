export const SoftSkill = ({
  Id,
  text,
  styles,
}: {
  Id?: string;
  text: string;
  styles?: string;
}) => {
  return (
    <section
      id={Id}
      className={
        "px-10 py-14 rounded-md border flex justify-center items-center border-gray-700 bg-secondary" +
        styles
      }
    >
      <h2>{text}</h2>
    </section>
  );
};
