import { FunctionComponent } from "react";

const Layout: FunctionComponent = ({
    children,
}) => {
  return (
    <main className="app">
    {children}
  </main>
  );
};
export default Layout;
