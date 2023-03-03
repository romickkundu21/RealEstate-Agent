import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src="/logo.png" alt="RealE"  width="28px" style={{marginTop:"10px"}}/>
        ) : (
          <img src="/logo.png" alt="RealE" width="80px" style={{marginTop:"10px"}} />
        )}
      </Link>
    </Button>
  );
};
