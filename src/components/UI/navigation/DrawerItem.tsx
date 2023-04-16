import Link from "next/link";

interface DrawerItemProps {
  title: string;
  link: string;
  icon: string;
}

export default function DrawerItem(
  props: React.PropsWithChildren<DrawerItemProps>
): JSX.Element {
  return (
    <Link href={props.link}>
      <li className="flex w-full flex-row py-2 text-2xl">
        <span className="">{props.icon}</span>
        <span>{props.title}</span>
      </li>
    </Link>
  );
}
