type EditorProps = {
    typedData: string,
    setTypedData : (typedData:string) => void;
}


export function Editor ({typedData, setTypedData}: EditorProps) {
    return (
        <section className="w-full flex flex-col h-full body-">
            <div className="w-full header p-3">
                <p className="text-gray-300 text-center uppercase tracking-wider">Editor</p>
            </div>
            <textarea className="w-full flex-1 overflow-y-auto box-border body text-gray-300 p-6 resize-none outline-none" onChange={(e) => setTypedData(e.target.value)} value={typedData}></textarea>
        </section>
    )
}