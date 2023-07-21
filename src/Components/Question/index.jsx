export default function Question({ question }) {
  return (
    <div className="output-area">
      <p style={{ color: "white" }}>
        {question || "Select an option to view question"}
      </p>
    </div>
  );
}
