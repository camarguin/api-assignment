import { useState, useEffect } from "react";

export const useHttp = (url, selectedCharacters) => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadedCharacter, setLoadedCharacter] = useState({});

    useEffect(() => {
        //run a function
        fetchData();
    }, [selectedCharacters]);

    const fetchData = () => {
        console.log(
            "Sending HTTP request for new character with id: ",
            selectedCharacters
        );
        setIsLoading(true);

        fetch(url + selectedCharacters + "/")
            .then((response) => {
                // console.log(resp);
                if (!response.ok) {
                    throw new Error("Could not fetch character!");
                }
                return response.json();
            })
            .then((charData) => {
                setLoadedCharacter(charData);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

    return [isLoading, loadedCharacter]

}