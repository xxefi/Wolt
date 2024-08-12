import "../../styles/NavItems.css";

export default function NavItems({ Wrap, WrapItem, Tooltip, Button, NavLink }) {
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
              <Button
                component={NavLink}
                to="/home"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "white" : "black",
                  "&.active": {
                    color: "white",
                    backgroundColor: "black",
                  },
                }}
              >
                <p
                  style={{
                    width: "80px",
                    textAlign: "center",
                  }}
                >
                  Home
                </p>
              </Button>
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
              <Button
                component={NavLink}
                to="/catalog"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "white" : "black",
                  "&.active": {
                    color: "white",
                    backgroundColor: "black",
                  },
                }}
              >
                <p
                  style={{
                    width: "100px",
                    textAlign: "center",
                  }}
                >
                  Catalog
                </p>
              </Button>
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
              <Button
                component={NavLink}
                to="/news"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "white" : "black",
                  "&.active": {
                    color: "white",
                    backgroundColor: "black",
                  },
                }}
              >
                <p
                  style={{
                    width: "80px",
                    textAlign: "center",
                  }}
                >
                  News
                </p>
              </Button>
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
              <Button
                component={NavLink}
                to="/aboutus"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "white" : "black",
                  "&.active": {
                    color: "white",
                    backgroundColor: "black",
                  },
                }}
              >
                <p
                  style={{
                    width: "100px",
                    textAlign: "center",
                  }}
                >
                  About Us
                </p>
              </Button>
            </Tooltip>
          </WrapItem>
        </Wrap>
      </div>
    </div>
  );
}
