
interface DrawerItemProps {
  title: string;
  link: string;
  icon: string;
}

export default function  DrawerItem(props: React.PropsWithChildren<DrawerItemProps>): JSX.Element {
  return <li className="text-2xl py-2"><a href={props.link}>
    <div className="">
      {props.icon}
    </div>
    <div>
      {props.title}
    </div>
  </a></li>
}
