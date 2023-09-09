import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

interface MenuItemType {
    _id: string
    name: string
    category: string
    image: string
    price: number
}

interface MenuItemProps {
    children: never[]; key: any; item: any;
  }

const PopularMenu: React.FC = () => {
 const [menu] = useMenu()
    let popular: MenuItemType[];
    // @ts-ignore
    popular = menu.filter((item: any) => item.category === 'popular');
    return (
        <section className="mb-12">
            <SectionTitle heading={'From Our Menu'} subHeading={'Popular items'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map((item: any)=> {
                        // @ts-ignore
                        return <MenuItem key={item._id}
                                          item={item}
                        >
                        </MenuItem>
                    })
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4 md:ml-[560px]">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;