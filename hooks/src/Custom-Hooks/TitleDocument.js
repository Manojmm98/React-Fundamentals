import {useEffect} from 'react'

function TitleDocument(count) {

    useEffect(() => {
        document.title = `COUNT IS ${count}`
    })

  
}

export default TitleDocument
