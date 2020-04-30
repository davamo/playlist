/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

const DetailPlaylist = (props) => {
    const { id } = props.match.params;
    const urlTemp = 'https://mychannel.nunchee.tv/api/ott/contents/details';

    const [data, loading] = useFetch(`${urlTemp}/${id}`);

    function useFetch(url) {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        async function fetchUrl() {
            const response = await fetch(url);
            const json = await response.json();

            if (!json.data.staff || json.data.staff.length === 0) {
                console.log("salir de aca");
            }
            else {
                setData(json.data.staff);
            }
            setLoading(false);
        }
        useEffect(() => {
            fetchUrl();
        }, []);
        return [data, loading];
    }

    return (
        <>
            <ul>
                {loading ? <div>Loading...</div> :
                    data.map((row, i) => (
                        <li key={i}>
                            <span style={{ color: '#ffffff', fontSize: '10px' }}>{row.name.first} {row.name.last} : {row.name.short} </span>
                        </li>
                    )
                    )}
            </ul>
        </>
    );
}


export default DetailPlaylist;
