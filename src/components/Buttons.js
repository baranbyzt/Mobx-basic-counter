


import { observer } from "mobx-react-lite"
import useGlobalCounter from '../store/Store'




let minus = () => {
    useGlobalCounter.azalttir()
  }
  let plus = () => {
    useGlobalCounter.arttir()
  }

  

const Buttons = observer(({ useGlobalCounter }) => 

<span>


<div className="buttons">
<p onClick={plus}>increase</p>
<p onClick={minus}>minus</p>
</div>

</span>)


export default Buttons;