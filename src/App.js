import StarRating from "./components/StarRating";

function App() {
  return (
    <div >
      <div>
        Product Rating
      </div>
      <StarRating
        style={{ backgroundColor: 'lightblue' }}
        onDoubleClick={e => alert('double click')}

      />
    </div>


  );
}

export default App;
