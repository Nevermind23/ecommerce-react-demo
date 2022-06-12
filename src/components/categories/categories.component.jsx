import CategoryItemComponent from "../category-item/category-item.component";
import "./categories.styles.scss";

const CategoriesComponent = ({categories}) => {
    return (
        <div className="categories-container">
            {categories.map((category) => {
                return <CategoryItemComponent category={category} key={category.id}/>;
            })}
        </div>
    );
};

export default CategoriesComponent;