// Importamos connect para poder conectarnos con redux

import { connect } from 'react-redux';

// Le pasamos una propiedad llamada children(ya que layout va a ser el contendor padre)
const Layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

// Esto lo que va a hacer es llamar a cualquiera de las variables que tengamos de redux
// y que queramos usar
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

}) (Layout);