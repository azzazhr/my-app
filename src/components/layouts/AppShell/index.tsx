import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "../footer";

const disableNavbar = ["/auth/login", "/auth/register"];
type AppShellProps = {
  children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
  return (
    <div className="app-container">

      <main className="main-content">
        {!disableNavbar.includes(pathname) && <Navbar /> }
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default AppShell;