import MealsItem from "./MealsItem";

const MealsGrid = ({ meals }) => {
  const ulClass = `grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] w-[90%] max-w-[90rem] gap-20 my-8 mx-auto p-0 `;
  return (
    <ul
      className={`${ulClass}`}
    >
      {meals.map((meal) => (
        <li key={meal.id}>
            <MealsItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
