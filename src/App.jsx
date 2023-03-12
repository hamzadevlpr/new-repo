function App() {
  let date = new Date();
  let day = date.getHours();
  let names = [
    "Hamza", "Umar", "Qasim", "Afzal", "Ahsan", "Babar", "Waseem", "Ibrar"
  ]
  return (
    <>
      <h1>Good {day >= 4 ? "Evening" : "Afternoon"}, {names[Math.trunc(Math.random()*7)]}</h1>
    </>
  );
}

export default App;
