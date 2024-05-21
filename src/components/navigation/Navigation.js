import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export const Navigation = () => {
  return (
    <div style={{ backgroundColor: "#0f084b", padding:"30px",color:"whitesmoke" }}>
      <Navbar>
        <NavbarBrand>
          <p>YLA</p>
        </NavbarBrand>

        <NavbarContent style={{flexDirection:""}}>
          <NavbarItem>
            <Link color="foreground" href="#">
              Nos services
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Booking
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">Nos Tarifs</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">Contact</Link>
          </NavbarItem>
        </NavbarContent>

        {/* <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent> */}
      </Navbar>
    </div>
  );
};
