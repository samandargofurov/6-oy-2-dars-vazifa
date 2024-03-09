import './App.css'

import Books from '../src/components/Books'
import data from './data/data.json'
import image from "./assets/background.avif";

function App() {
  return (
          <div className='App'>
              <div className="main">
                {data.map(data => (
                    <Books
                        // key={data.id}
                        language={data.language}
                        country={data.country}
                        link={data.link}
                        author={data.author}
                        pages={data.pages}
                        title={data.title}
                        year={data.year}
                    />
                ))}
              </div>
          </div>
    )
}

export default App
