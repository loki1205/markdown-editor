import { useState } from "react"
import { Editor } from "./components/Editor"
import { Preview } from "./components/Preview"

function App() {
  const [typedData, setTypedData] = useState(`\n# Markdown Editor\n\n## Coming soon\n\n- Local Storage\n\n- Multiple Tabs\n\n- Authentication`);
  return (
    <main className="w-screen grid grid-cols-1 md:grid-cols-2 h-screen bg-gray-400 gap-x-px gap-y-px">
      <Editor typedData={typedData} setTypedData={setTypedData}/>
      <Preview typedData={typedData}/>
    </main>
  )
}

export default App
