import {Text} from 'react-native'

export default function PopUp({status, text} : {status: boolean, text: string} ){
    let color = status ? 'green' : 'red'
    return <>
        <Text style={{color}}>{text}</Text>
    </>
}