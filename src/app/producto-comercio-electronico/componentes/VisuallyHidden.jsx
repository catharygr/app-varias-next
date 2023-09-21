const hiddenStyles = {
  display: "inline-block",
  position: "absolute",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  height: "1px",
  width: "1px",
  border: 0,
  margin: "-1px",
  padding: 0,
};

export default function VisuallyHidden({ children }) {
  return <span style={hiddenStyles}>{children}</span>;
}
