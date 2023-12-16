const Section = (props) => {
  return (
    <div>
      <p key={props.key}> {props.category} </p>
      <div className="container">
        {props.images.map((image, index) => {
          return <img class="miniature" alt={index} src={image} />;
        })}
      </div>
      <br></br>
    </div>
  );
};
export default Section;
