import { useEffect ,useState} from "react"


function Greet() {
    const [data, setData] = useState(0)
    useEffect(() => {
       console.warn("UseEffect is working",data)
    },[data])
    return (
        <div>
            <h1>Useeffect data {data}</h1>
            <button onClick={()=>setData(data+1)}>Update</button>
        </div>
    )
}

export default Greet
