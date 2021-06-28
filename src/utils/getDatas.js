import axios from 'axios';

const getDatas = async () => {
    return await axios.get("http://localhost:3000/list");
}

export default getDatas;