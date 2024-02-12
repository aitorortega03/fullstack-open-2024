import Part from "./Part";

const Content = ({ course }) => {

  let parts = [...course.parts]

  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
      <p style={{fontWeight: 'bold'}}>total of {parts.reduce((total, part) => total + part.exercises, 0)} exercises</p>
    </div>
  );
};

export default Content;