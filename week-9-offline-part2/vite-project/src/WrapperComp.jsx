function WrapperComp() {
    return (
      <div>
          <Card>
              <h2>Card Title</h2>
              <p>This is some content inside the card.</p>
          </Card>
          <Card>
              <h2>Another Card</h2>
              <p>This card has different content!</p>
              <h3>muuuahhhh</h3>
              <input type="text" placeholder="extra thing"/>
          </Card>
      </div>
  );
}
// Card component to style its children
function Card({ children }) {
  return (
    <div style={{
        border: '1px solid #ccc', // Border style
        borderRadius: '5px', // Rounded corners
        padding: '20px', // Padding inside the card
        margin: '10px', // Margin outside the card
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)', // Box shadow for subtle depth
        // backgroundColor:"green" // Optional background color
    }}>
        {children}
    </div>
);
}

export default WrapperComp;
