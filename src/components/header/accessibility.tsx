import { useAppSelector } from "@store";

export const Accessibility: React.FC = () => {
  const sidebarAnchorID = useAppSelector((state) => state.sidebarAnchorID);
  const access = [
    { href: "#main-content", text: "Skip to main content" },
    { href: `#${sidebarAnchorID}`, text: "Skip to sidebar" },
  ];
  return (
    <div className="accessibility w-max position-fixed">
      {access.map((a) => (
        <a key={a.text} href={a.href}>
          {a.text}
        </a>
      ))}
    </div>
  );
};
