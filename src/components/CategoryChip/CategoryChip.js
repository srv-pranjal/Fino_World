import "./CategoryChip.css";
const classNames = require("classnames");

export const CategoryChip = ({
  categoryName,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <span
      className={classNames("chip", {
        "chip--active": categoryName === activeCategory,
      })}
      onClick={() => setActiveCategory(categoryName)}
    >
      {categoryName}
    </span>
  );
};
