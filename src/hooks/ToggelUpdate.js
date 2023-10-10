import { useState } from "react";

const ToggleUpdate = () => {
const [toggle , setToggle] = useState(false);

function handleToggle() {
    setToggle((prev) => !prev);
}

return [toggle , handleToggle];

}


export default ToggleUpdate;