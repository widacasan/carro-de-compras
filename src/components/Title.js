import {Component} from 'react'

const styles = {
    title: {
        marginButtom: '30px',
    }
}
class Title extends Component{
    render (){
        return(
            <h1 style= {StyleSheet.title}>Tienda Wida</h1>
        )
    }
}
export default Title