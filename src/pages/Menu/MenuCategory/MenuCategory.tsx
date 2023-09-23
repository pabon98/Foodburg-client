import React from "react";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

interface MenuCategoryProps {
    items: any
    title?: string
    img?: string
    subtitle?: string
    _id: string
    

}
const MenuCategory: React.FC<MenuCategoryProps> = ({items, title, img, subtitle}) => {
    return (
        <div className="pt-8">
            { title && <Cover img={img} title={title} subtitle={subtitle}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map((item: MenuCategoryProps)=>
                     // @ts-ignore
                        <MenuItem key={item._id}
                        item={item}
                        >
                        </MenuItem>
                        )
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-2 mt-4 mx-auto">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;