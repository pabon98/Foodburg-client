import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items, title, img, subtitle}) => {
    return (
        <div className="pt-8">
            { title && <Cover img={img} title={title} subtitle={subtitle}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item=>
                        <MenuItem key={item._id}
                        item={item}
                        >
                        </MenuItem>
                        )
                }
            </div>
        </div>
    );
};

export default MenuCategory;