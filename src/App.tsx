import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {Cat} from "./Cat.ts";

function App() {

    const [cat, setCat] = useState<Cat>();
    const [story, setStory] = useState<string>();

    useEffect(() => {
        axios.get("/api/cats/58c5ac6c-dc3e-426d-928e-4351b4b12827")
            .then(response => setCat(response.data))
        axios.get("/api/cats/58c5ac6c-dc3e-426d-928e-4351b4b12827/story")
            .then(response => setStory(response.data))
    }, []);

    function createBob() {
        axios.post("/api/cats", {
            "id": "123671523817-234234",
            "name": "Bob",
            "breed": "Siam",
            "age": 14
        })
    }

    return (
        <>
            <button onClick={createBob}>Lege Katze Bob an</button>

            Unsere Katze {cat?.name} sie ist {cat?.age} Jahre alt und eine {cat?.breed}-Katze.

            {
                story ? <>
                    Ihre Story:
                    {story}
                </> : <>Lade story...</>
            }
        </>
    )
}

export default App
