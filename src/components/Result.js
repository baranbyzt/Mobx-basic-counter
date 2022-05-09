







import { observer } from "mobx-react-lite"
import useGlobalCounter,{GlobalCounter} from '../store/Store'


const Result = observer(({ GlobalCounter }) => 
<span>
<p className='result'>{useGlobalCounter.mycounter}</p>

</span>)


export default Result;