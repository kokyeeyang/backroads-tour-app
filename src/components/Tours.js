import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours"></Title>
      <div className="section-center featured-center">
        <Tour></Tour>
      </div>
    </section>
  );
};
export default Tours;
