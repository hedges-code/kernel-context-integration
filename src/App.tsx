import './App.css'

function App() {

  // Function to handle form submission for datasets
  const handleDatasetPost = () => {
    const data = {
      datasets: [
        { name: "dataset1", link: "url1" },
        { name: "dataset2", link: "url2" }
      ]
    }

    // Create a form that properly submits JSON data
    const form = document.createElement('form')
    form.method = 'POST'
    form.action = 'http://localhost:3000/api/context'
    form.style.display = 'none'

    // Create a single hidden input with the JSON string of the entire data object
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = 'datasets'
    input.value = JSON.stringify(data)
    form.appendChild(input)

    document.body.appendChild(form)
    form.submit()
  }

  // Function to handle GET request with context
  const handleContextGet = () => {
    const contextString = "This is sample context data"
    const encodedContext = encodeURIComponent(contextString)
    
    // Redirect to Next.js application with context as query parameter
    window.location.href = `http://localhost:3000/cortex/chat/kernellilly-red?context=${encodedContext}`
  }

  return (
    <>
      <div className="card">
        <h2>Send Data to Kernel Lilly</h2>
        <button onClick={handleDatasetPost} style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Send Datasets (POST)
        </button>
        <button onClick={handleContextGet} style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Send Context (GET)
        </button>
      </div>

    </>
  )
}

export default App
