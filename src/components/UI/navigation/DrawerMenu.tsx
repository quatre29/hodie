import { LSMItems } from "~/helpers/navigation/LSMItems";
import DrawerItem from "~/components/UI/navigation/DrawerItem";
import { CircleStackIcon } from "@heroicons/react/24/solid";

export default function DrawerMenu(
  props: React.PropsWithChildren
): JSX.Element {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{props.children}</div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu w-80 bg-base-100 p-8 text-base-content">
          <div className="btn-warning btn-lg btn mb-12 flex gap-2 text-lg font-bold">
            <CircleStackIcon />
            HODIE
          </div>
          <ul className="">
            {LSMItems.map((menuitem) => (
              <DrawerItem
                title={menuitem.title}
                icon={menuitem.icon}
                link={menuitem.link}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
