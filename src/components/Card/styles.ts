export const styleCard = {
  position: "relative",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  alignItems: "center",
  boxShadow: "none",
  border: "none",
  cursor: "pointer",

  "&:hover": {
    borderRadius: "0.625rem",
    background: "#F2F2F2",
    boxShadow: "0.125rem 0.125rem 0.3125rem #00000026",
    transition: "all ease 0.2s",
  },
};

export const styleLikeBox = {
  position: "absolute",
  top: "0",
  right: "0",
  padding: "0.625rem",
};

export const styleImageBox = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: {
    xs: "1.875rem 0",
    md: "1.875rem",
  },
};

export const styleImage = {
  display: "block",
  width: {
    xs: "40%",
    sm: "35%",
    md: "28%",
  },
  height: "100%",
};

export const styleContent = {
  padding: "0",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

export const styleName = {
  padding: "0",
  lineHeight: "2.5rem",
};
