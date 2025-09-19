import { useState } from 'react';

export default function App() {
  const [belege, setBelege] = useState([]);
  const [kategorie, setKategorie] = useState('');
  const [betrag, setBetrag] = useState('');
  const [datum, setDatum] = useState('');

  const addBeleg = () => {
    if (kategorie && betrag && datum) {
      setBelege([...belege, { kategorie, betrag, datum }]);
      setKategorie('');
      setBetrag('');
      setDatum('');
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">BelegBuddy</h1>
      <input value={datum} onChange={e => setDatum(e.target.value)} type="date" className="border p-2 w-full mb-2" />
      <input value={betrag} onChange={e => setBetrag(e.target.value)} placeholder="Betrag in €" type="number" className="border p-2 w-full mb-2" />
      <select value={kategorie} onChange={e => setKategorie(e.target.value)} className="border p-2 w-full mb-2">
        <option value="">Kategorie wählen</option>
        <option>Bücher</option>
        <option>Technik</option>
        <option>Fahrtkosten</option>
      </select>
      <button onClick={addBeleg} className="bg-blue-500 text-white px-4 py-2 rounded w-full">Hinzufügen</button>
      <ul className="mt-4 space-y-2">
        {belege.map((b, i) => (
          <li key={i} className="border p-2 rounded">
            {b.datum} – {b.kategorie} – {b.betrag} €
          </li>
        ))}
      </ul>
    </div>
  );
}