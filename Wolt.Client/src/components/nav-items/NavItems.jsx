import "../../styles/NavItems.css";

export default function NavItems({ Wrap, WrapItem, Tooltip, Button, Link }) {
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
      <div className="flex flex-shrink-0 items-center space-x-4">
        <Wrap spacing={6}>
          <WrapItem>
            <Tooltip
              label="Home"
              bgColor="black"
              color="white"
              padding={2}
              borderRadius={10}
            >
              <Link to="/home">
                <Button color="black" variant="ghost">
                  <p>Home</p>
                </Button>
              </Link>
            </Tooltip>
          </WrapItem>
          <WrapItem>
            <Tooltip
              label="Catalog"
              bgColor="black"
              color="white"
              padding={2}
              borderRadius={10}
            >
              <Link to="/catalog">
                <Button color="black" variant="ghost">
                  <p>Catalog</p>
                </Button>
              </Link>
            </Tooltip>
          </WrapItem>
          <WrapItem>
            <Tooltip
              label="News"
              bgColor="black"
              color="white"
              padding={2}
              borderRadius={10}
            >
              <Link to="/news">
                <Button color="black" variant="ghost">
                  <p>News</p>
                </Button>
              </Link>
            </Tooltip>
          </WrapItem>
          <WrapItem>
            <Tooltip
              label="About Us"
              bgColor="black"
              color="white"
              padding={2}
              borderRadius={10}
            >
              <Link to="/aboutus">
                <Button color="black" variant="ghost">
                  <p>About us</p>
                </Button>
              </Link>
            </Tooltip>
          </WrapItem>
        </Wrap>
      </div>
    </div>
  );
}
