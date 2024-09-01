import { marked } from "marked"
import dompurify from "dompurify"
import { useEffect, useState } from "react"
type PreviewProps = {
    typedData: string
}

export function Preview({ typedData }: PreviewProps) {

    const [parsedData, setParsedData] = useState('');
    useEffect(() => {
        const parseMarkdown = async () => {
          const result = marked.parse(typedData);
          if (result instanceof Promise) {
            try {
              const html = await result;
              console.log(html);
              setParsedData(dompurify.sanitize(html));
            } catch (error) {
              console.error('Error rendering markdown:', error);
            }
          } else {
            setParsedData(result);
            console.log(result);
          }
        };
    
        parseMarkdown();
      }, [typedData]); 
    return (
        <section className="w-full h-full body">
            <div className="w-full header p-3">
                <p className="text-gray-300 text-center tracking-wider uppercase">Preview</p>
            </div>
            <div className="w-full prose-headings:underline prose-a:text-pink-500 prose prose-invert flex-1 overflow-y-scroll box-border body text-gray-300 p-6 resize-none outline-none" dangerouslySetInnerHTML={{ __html: parsedData }} />
        </section>
    )
}