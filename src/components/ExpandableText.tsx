import { useState } from "react"

interface Props{
    maxChars?: number,
    children: String,
}
const ExpandableText = ({maxChars = 100, children}: Props) => {
  let [isExpandable, setExpandable] = useState(false);

  if(children.length <= maxChars) return <p>{children}</p>

  const text = <span>{children.substring(0, maxChars)}...</span>;

    return <p> {isExpandable ? text : children}<button onClick={() => setExpandable(!isExpandable)}>{isExpandable ? "ReadMore": "ReadLess"}</button></p>

  
}

export default ExpandableText